import { motion } from "framer-motion";
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";

export default function Contact() {
  return (
    <div className="bg-white text-black pt-32 pb-24 px-6 md:px-12 lg:px-24">
      
      {/* Title */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-3">Contact Us</h1>
        <p className="text-gray-600 max-w-xl mx-auto">
          Have questions or want to learn more? Get in touch with us — we’re here to help!
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        {/* Left content */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          className="space-y-6"
        >
          <div className="flex items-center gap-3 text-gray-700">
            <FaEnvelope className="text-lg text-red-500" />
            <span className="text-sm">info@reviuxx.com</span>
          </div>
          <div className="flex items-center gap-3 text-gray-700">
            <FaPhoneAlt className="text-lg text-red-500" />
            <span className="text-sm">015234662968</span>
          </div>

          <div className="flex items-center gap-3 text-gray-700">
            <FaMapMarkerAlt className="text-lg text-red-500" />
            <span className="text-sm">
              1309 Coffeen Avenue, STE 1200, Sheridan, Wyoming 82801, USA
            </span>
          </div>

          {/* Map */}
          <div className="rounded-xl overflow-hidden w-full h-64 shadow-lg">
            <iframe
              title="Reviuxx Location"
              width="100%"
              height="100%"
              loading="lazy"
              style={{ border: 0 }}
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d834816.0888305667!2d-107.286681763201!3d44.79763144055965!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5336a2cc2de0dad1%3A0xaab07d7dd7c0b8e7!2sSheridan%2C%20WY!5e0!3m2!1sen!2sus!4v1697977648882"
            ></iframe>
          </div>
        </motion.div>

        {/* Form */}
        <motion.form
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          className="bg-black text-white p-8 rounded-2xl shadow-xl space-y-5"
        >
          <div>
            <label className="text-sm">Name</label>
            <input 
              type="text"
              className="w-full mt-1 bg-gray-900 border border-gray-700 rounded-lg px-4 py-2 outline-none focus:border-red-500 transition"
            />
          </div>

          <div>
            <label className="text-sm">Email</label>
            <input 
              type="email"
              className="w-full mt-1 bg-gray-900 border border-gray-700 rounded-lg px-4 py-2 outline-none focus:border-red-500 transition"
            />
          </div>

          <div>
            <label className="text-sm">Message</label>
            <textarea
              rows="4"
              className="w-full mt-1 bg-gray-900 border border-gray-700 rounded-lg px-4 py-2 outline-none focus:border-red-500 transition"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-2 rounded-lg transition"
          >
            Send Message
          </button>
        </motion.form>
      </div>
    </div>
  );
}
