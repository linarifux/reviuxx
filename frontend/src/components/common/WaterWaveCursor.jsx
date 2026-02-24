import { useEffect, useRef } from 'react';

const WaterWaveCursor = () => {
  const canvasRef = useRef(null);
  const ripples = useRef([]);
  const mouse = useRef({ x: 0, y: 0 });
  const lastMouse = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    // Make canvas full screen
    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', resize);
    resize();

    // Track mouse movement
    const handleMouseMove = (e) => {
      mouse.current = { x: e.clientX, y: e.clientY };

      // Calculate distance from the last ripple. 
      // This prevents spawning too many ripples if the user moves the mouse very slowly.
      const dx = mouse.current.x - lastMouse.current.x;
      const dy = mouse.current.y - lastMouse.current.y;
      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance > 20) { // Spawn a new wave every 20px of movement
        ripples.current.push({
          x: mouse.current.x,
          y: mouse.current.y,
          radius: 0,
          alpha: 0.6, // Starting opacity
          life: 1
        });
        lastMouse.current = { ...mouse.current };
      }
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Render Loop
    const render = () => {
      // Clear the canvas on every frame
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < ripples.current.length; i++) {
        const p = ripples.current[i];
        
        // Outer Red Glow (Reviuxx Brand Color)
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 1, false);
        ctx.strokeStyle = `rgba(210, 4, 45, ${p.alpha})`; // #D2042D
        ctx.shadowBlur = 15; // Creates the glowing liquid effect
        ctx.shadowColor = `rgba(210, 4, 45, ${p.alpha})`;
        ctx.lineWidth = 1.5;
        ctx.stroke();

        // Inner White Reflection (gives it the water/glass feel)
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius * 0.7, 0, Math.PI * 2, false);
        ctx.strokeStyle = `rgba(255, 255, 255, ${p.alpha * 0.5})`;
        ctx.shadowBlur = 0; // Remove shadow for the crisp inner ring
        ctx.lineWidth = 0.5;
        ctx.stroke();

        // Animate the wave (expand and fade)
        p.radius += 2.5; // Speed of the wave expanding
        p.alpha -= 0.015; // Speed of the fade out
        p.life -= 0.015;
      }

      // Garbage collection: remove dead ripples so memory doesn't leak
      ripples.current = ripples.current.filter((p) => p.life > 0);

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    // Cleanup on unmount
    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      // Fixed to the screen, covers everything, ignores mouse clicks so it doesn't block buttons
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-[9999]"
    />
  );
};

export default WaterWaveCursor;