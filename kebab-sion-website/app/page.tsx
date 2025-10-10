import React from "react";

export default function Home() {
  return (
    <main>
      {/* Contact Section */}
      <section id="contact" className="section bg-light">
        <div className="container-max">
          <h2>Contact & Livraison</h2>
          <p className="subtitle">Trouvez-nous et commandez facilement</p>

          <div className="contact-grid">
            {/* Colonne gauche : infos */}
            <div>
              <div className="card" style={{ padding: "32px" }}>
                <h3
                  style={{
                    fontSize: "24px",
                    marginBottom: "24px",
                    color: "#333",
                  }}
                >
                  Informations
                </h3>

                <div className="contact-info">
                  <div className="contact-icon">📍</div>
                  <div>
                    <h4 style={{ fontWeight: "600", marginBottom: "8px" }}>
                      Adresse
                    </h4>
                    <p style={{ color: "#666" }}>
                      Chemin des Pains 12
                      <br />
                      1950 Sion, Valais
                    </p>
                  </div>
                </div>

                <div className="contact-info">
                  <div className="contact-icon">📞</div>
                  <div>
                    <h4 style={{ fontWeight: "600", marginBottom: "8px" }}>
                      Téléphone
                    </h4>
                    <a
                      href="tel:+41789133202"
                      style={{ color: "#E63946", textDecoration: "none" }}
                    >
                      +41 78 913 32 02
                    </a>
                  </div>
                </div>

                <div className="contact-info">
                  <div className="contact-icon">🕒</div>
                  <div>
                    <h4 style={{ fontWeight: "600", marginBottom: "8px" }}>
                      Horaires d'ouverture
                    </h4>
                    <div style={{ color: "#666" }}>
                      <p>Lundi - Jeudi: 11h00 - 22h00</p>
                      <p>Vendredi - Samedi: 11h00 - 23h00</p>
                      <p>Dimanche: 16h00 - 22h00</p>
                    </div>
                  </div>
                </div>

                <div className="contact-buttons">
                  <a
                    href="https://wa.me/41789133202"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary"
                    style={{
                      backgroundColor: "#25D366",
                      flex: 1,
                      textAlign: "center",
                    }}
                  >
                    Commander WhatsApp
                  </a>
                  <a
                    href="https://maps.google.com/?q=Chemin+des+Pains+12,+1950+Sion"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary"
                    style={{ flex: 1, textAlign: "center" }}
                  >
                    🗺️ Itinéraire
                  </a>
                </div>
              </div>
            </div>

            {/* Colonne droite : carte Google Maps */}
            <div>
              <div
                className="card"
                style={{ overflow: "hidden", height: "400px", padding: 0 }}
              >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2751.234567890123!2d7.358621!3d46.229871!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478ec7c8a8f7a5a5%3A0x38b3eaa6756d9150!2sChemin%20des%20Pains%2012%2C%201950%20Sion%2C%20Suisse!5e0!3m2!1sfr!2sch!4v1699999999999!5m2!1sfr!2sch"
                  width="100%"
                  height="100%"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Localisation Kebab Sion"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
