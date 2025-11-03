export default function Impressum() {
  return (
    <div className="bg-white text-black px-6 md:px-12 lg:px-32 py-24 leading-relaxed">
      
      <h1 className="text-4xl font-bold mb-4">Impressum / Legal Notice</h1>

      <p className="text-sm text-gray-500 mb-10">
        Diese Vorlage wurde sorgfältig erstellt, ersetzt jedoch keine Rechtsberatung. / 
        This template is provided for convenience and does not constitute legal advice.
      </p>

      {/* 🇩🇪 German Section */}
      <section className="mb-14">
        <h2 className="text-2xl font-semibold mb-4">Impressum (Deutschland)</h2>

        <div className="space-y-4 text-gray-800">

          <p><strong>Angaben gemäß § 5 TMG</strong><br/>
          Reviuxx LLC<br/>
          1309 Coffeen Avenue, STE 1200<br/>
          Sheridan, Wyoming 82801<br/>
          USA</p>

          <p>
            <strong>Vertretungsberechtigte Person</strong><br/>
            Maurice Klapp (Managing Member)
          </p>

          <p>
            <strong>Kontakt</strong><br/>
            E-Mail: hello@reviuxx.com<br/>
            Web: https://www.reviuxx.com
          </p>

          <p>
            <strong>Registereintrag</strong><br/>
            Registriert beim Secretary of State, Wyoming (USA).<br/>
            Filing/Registration-ID: [falls vorhanden ergänzen]
          </p>

          <p>
            <strong>Umsatzsteuer</strong><br/>
            US-Unternehmen (LLC). Eine EU-USt-IdNr. liegt nicht vor.<br/>
            Optional: USt-IdNr. gemäß § 27a UStG: [DE…], falls vorhanden.
          </p>

          <p>
            <strong>Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV</strong><br/>
            Maurice Klapp, Anschrift wie oben.
          </p>

          <p>
            <strong>Geltungsbereich der Anbieterkennzeichnung</strong><br/>
            Dieses Impressum gilt für die Website reviuxx.com sowie – sofern verlinkt – für zugehörige Social-Media-Profile.
          </p>

          <p><strong>Haftung für Inhalte</strong><br/>
          Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte verantwortlich. […] Bei Bekanntwerden entsprechender Rechtsverletzungen entfernen wir diese Inhalte umgehend.
          </p>

          <p><strong>Haftung für Links</strong><br/>
          Unser Angebot enthält Links zu externen Websites. […] Bei Bekanntwerden von Rechtsverletzungen entfernen wir derartige Links umgehend.
          </p>

          <p><strong>Urheberrecht</strong><br/>
          Inhalte sind urheberrechtlich geschützt. […] Downloads und Kopien dieser Seite sind nur für den privaten Gebrauch gestattet.
          </p>

          <p><strong>Bild-/Mediennachweise</strong><br/>
          Rechte an Medien liegen bei Reviuxx LLC, außer anders angegeben.
          </p>

          <p><strong>Verbraucherinformationen</strong><br/>
            EU-Streitbeilegungsplattform: https://www.ec.europa.eu/consumers/odr/<br/>
            Keine Teilnahme an Schlichtungsverfahren gemäß § 36 VSBG
          </p>

          <p><strong>Datenschutz</strong><br/>
          Datenschutzerklärung: [Link einfügen]
          </p>

        </div>
      </section>

      {/* 🇺🇸 U.S. Section */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Legal Notice (United States)</h2>

        <div className="space-y-4 text-gray-800">

          <p><strong>Corporate Information</strong><br/>
          Reviuxx LLC<br/>
          1309 Coffeen Avenue, STE 1200, Sheridan, Wyoming 82801, USA<br/>
          Managing Member: Maurice Klapp</p>

          <p><strong>Contact</strong><br/>
          Email: hello@reviuxx.com<br/>
          Website: https://www.reviuxx.com</p>

          <p><strong>Registration</strong><br/>
          Registered with Secretary of State, Wyoming, USA<br/>
          Filing/Registration ID: [add if available]<br/>
          Tax/EIN: [add if available]</p>

          <p><strong>DMCA Agent (17 U.S.C. § 512)</strong><br/>
          Maurice Klapp<br/>
          same address as above<br/>
          Email: hello@reviuxx.com<br/>
          (Include required DMCA info when submitting claims)</p>

          <p><strong>Website Disclaimers</strong><br/>
          Information is provided “as-is” without warranties. […] Not liable for damages from website use.
          </p>

          <p><strong>No Legal Advice</strong><br/>
          No content here constitutes legal or financial advice.
          </p>

          <p><strong>Accessibility</strong><br/>
          Contact us if you encounter accessibility issues.
          </p>

          <p><strong>Consumer Disclosures</strong><br/>
          See Privacy Policy for U.S. consumer rights (e.g., California).
          </p>

          <p><strong>Governing Terms</strong><br/>
          Use of this site subject to Terms of Service and Privacy Policy.
          </p>

        </div>
      </section>

    </div>
  );
}
