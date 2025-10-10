import Image from "next/image";

export default function Home() {
  return (
    <div style={{ minHeight: '100vh' }}>
      {/* Navigation */}
      <nav>
        <div className="container-max">
          <h1>Kebab Sion</h1>
          <div className="nav-links">
            <a href="#accueil">Accueil</a>
            <a href="#about">À propos</a>
            <a href="#menu">Menu</a>
            <a href="#gallery">Galerie</a>
            <a href="#avis">Avis</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="accueil" className="hero">
        <div className="hero-content">
          <h1>Votre kebab préféré à Sion 🇨🇭</h1>
          <p>🥙 Kebab Sion – Goûtez nos spécialités maison, fraîches et préparées sur place</p>
          <div className="hero-buttons">
            <a href="#menu" className="btn-primary">🍽️ Voir le menu</a>
            <a 
              href="https://wa.me/41789133202"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              style={{ backgroundColor: '#25D366' }}
            >
              Commander sur WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section bg-light">
        <div className="container-max">
          <div className="grid grid-2" style={{ alignItems: 'center' }}>
            <div>
              <h2 style={{ fontSize: '40px', textAlign: 'left' }}>À propos de Kebab Sion</h2>
              <p style={{ fontSize: '18px', lineHeight: '1.6', marginBottom: '24px' }}>
                Depuis notre ouverture, nous nous engageons à vous servir des produits frais et de qualité. 
                Notre équipe passionnée prépare chaque commande avec soin, en utilisant des ingrédients 
                sélectionnés et des recettes traditionnelles.
              </p>
              <div className="about-features">
                <div className="about-feature">
                  <div className="icon">🥩</div>
                  <h3>Viande Fraîche</h3>
                  <p>Sélectionnée quotidiennement</p>
                </div>
                <div className="about-feature">
                  <div className="icon">⚡</div>
                  <h3>Service Rapide</h3>
                  <p>Préparation en 5-10 minutes</p>
                </div>
                <div className="about-feature">
                  <div className="icon">👨‍🍳</div>
                  <h3>Spécialités Maison</h3>
                  <p>Recettes traditionnelles</p>
                </div>
                <div className="about-feature">
                  <div className="icon">🏔️</div>
                  <h3>Local Sion</h3>
                  <p>Cœur du Valais</p>
                </div>
              </div>
            </div>
            <div className="about-images">
              <Image
                src="https://images.unsplash.com/photo-1556745750-68295fefafc5?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Njd8MXwxfHNlYXJjaHwxfHxyZXN0YXVyYW50fGVufDB8fHx8MTc1OTg2MzMxMnww&ixlib=rb-4.1.0&q=85"
                alt="Notre équipe"
                width={250}
                height={200}
              />
              <Image
                src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Njd8MHwxfHNlYXJjaHwyfHxyZXN0YXVyYW50fGVufDB8fHx8MTc1OTg2MzMxMnww&ixlib=rb-4.1.0&q=85"
                alt="Notre restaurant"
                width={250}
                height={200}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="section">
        <div className="container-max">
          <h2>Notre Menu</h2>
          <p className="subtitle">Découvrez nos délicieuses spécialités</p>

          {/* ... contenu inchangé ... */}

          <div style={{ textAlign: 'center', marginTop: '48px' }}>
            <a 
              href="https://wa.me/41789133202"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              style={{ backgroundColor: '#25D366', fontSize: '18px', padding: '16px 32px' }}
            >
              🛵 Commander maintenant
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section bg-light">
        <div className="container-max">
          <h2>Contact & Livraison</h2>
          <p className="subtitle">Trouvez-nous et commandez facilement</p>

          <div className="contact-grid">
            <div>
              <div className="card" style={{ padding: '32px' }}>
                <h3 style={{ fontSize: '24px', marginBottom: '24px', color: '#333' }}>Informations</h3>
                
                <div className="contact-info">
                  <div className="contact-icon">📍</div>
                  <div>
                    <h4 style={{ fontWeight: '600', marginBottom: '8px' }}>Adresse</h4>
                    <p style={{ color: '#666' }}>
                      Chemin des Pains 12<br />1950 Sion, Valais
                    </p>
                  </div>
                </div>

                <div className="contact-info">
                  <div className="contact-icon">📞</div>
                  <div>
                    <h4 style={{ fontWeight: '600', marginBottom: '8px' }}>Téléphone</h4>
                    <a 
                      href="tel:+41789133202" 
                      style={{ color: '#E63946', textDecoration: 'none' }}
                    >
                      +41 78 913 32 02
                    </a>
                  </div>
                </div>

                <div className="contact-info">
                  <div className="contact-icon">🕒</div>
                  <div>
                    <h4 style={{ fontWeight: '600', marginBottom: '8px' }}>Horaires d'ouverture</h4>
                    <div style={{ color: '#666' }}>
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
                    style={{ backgroundColor: '#25D366', flex: 1, textAlign: 'center' }}
                  >
                    Commander WhatsApp
                  </a>
                  <a 
                    href="https://maps.google.com/?q=Chemin+des+Pains+12,+1950+Sion"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary"
                    style={{ flex: 1, textAlign: 'center' }}
                  >
                    🗺️ Itinéraire
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <div className="container-max">
          <div className="grid grid-3">
            <div>
              <h3>Kebab Sion</h3>
              <p>
                Votre restaurant kebab de confiance à Sion. Produits frais, service rapide, 
                goût authentique.
              </p>
            </div>
            
            <div>
              <h4>Liens Utiles</h4>
              <div>
                <a href="#menu">Menu</a>
                <a href="#about">À propos</a>
                <a href="#contact">Contact</a>
                <a href="#avis">Avis clients</a>
              </div>
            </div>
            
            <div>
              <h4>Contact Rapide</h4>
              <div>
                <p>📞 +41 78 913 32 02</p>
                <p>📍 Chemin des Pains 12, Sion</p>
                <p>🕒 Lun-Jeu: 11h-22h</p>
              </div>
            </div>
          </div>
          
          <div className="footer-bottom">
            <p>&copy; 2025 Kebab Sion. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
