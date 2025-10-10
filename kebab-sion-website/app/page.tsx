import Image from "next/image";
import React from "react";

export default function Home() {
  return (
    <div style={{ minHeight: "100vh" }}>
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
          <p>
            🥙 Kebab Sion – Goûtez nos spécialités maison, fraîches et préparées
            sur place
          </p>
          <div className="hero-buttons">
            <a href="#menu" className="btn-primary">
              🍽️ Voir le menu
            </a>
            <a
              href="https://wa.me/41789133202"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              style={{ backgroundColor: "#25D366" }}
            >
              Commander sur WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section bg-light">
        <div className="container-max">
          <div className="grid grid-2" style={{ alignItems: "center" }}>
            <div>
              <h2 style={{ fontSize: "40px", textAlign: "left" }}>
                À propos de Kebab Sion
              </h2>
              <p
                style={{
                  fontSize: "18px",
                  lineHeight: "1.6",
                  marginBottom: "24px",
                }}
              >
                Depuis notre ouverture, nous nous engageons à vous servir des
                produits frais et de qualité. Notre équipe passionnée prépare
                chaque commande avec soin, en utilisant des ingrédients
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
                src="https://images.unsplash.com/photo-1556745750-68295fefafc5?crop=entropy&cs=srgb&fm=jpg&q=85"
                alt="Notre équipe"
                width={250}
                height={200}
              />
              <Image
                src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?crop=entropy&cs=srgb&fm=jpg&q=85"
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

          <div className="grid grid-4">
            {/* Sandwichs */}
            <div className="card">
              <div className="card-header">
                <h3>🥙 Sandwichs</h3>
              </div>
              <div className="card-body">
                <div className="menu-item">
                  <div>
                    <h4>Kebab Poulet</h4>
                    <p>Poulet, salade, tomates, sauce</p>
                  </div>
                  <span className="price">CHF 12.–</span>
                </div>
                <div className="menu-item">
                  <div>
                    <h4>Kebab Agneau</h4>
                    <p>Agneau, légumes frais, sauce</p>
                  </div>
                  <span className="price">CHF 13.–</span>
                </div>
                <div className="menu-item">
                  <div>
                    <h4>Kebab Mixte</h4>
                    <p>Poulet et agneau, crudités</p>
                  </div>
                  <span className="price">CHF 14.–</span>
                </div>
              </div>
            </div>

            {/* Assiettes */}
            <div className="card">
              <div className="card-header">
                <h3>🍽️ Assiettes</h3>
              </div>
              <div className="card-body">
                <div className="menu-item">
                  <div>
                    <h4>Assiette Poulet</h4>
                    <p>Avec frites et salade</p>
                  </div>
                  <span className="price">CHF 16.–</span>
                </div>
                <div className="menu-item">
                  <div>
                    <h4>Assiette Mixte</h4>
                    <p>Poulet, agneau, frites, salade</p>
                  </div>
                  <span className="price">CHF 18.–</span>
                </div>
                <div className="menu-item">
                  <div>
                    <h4>Assiette Végé</h4>
                    <p>Falafels, légumes grillés</p>
                  </div>
                  <span className="price">CHF 15.–</span>
                </div>
              </div>
            </div>

            {/* Burgers */}
            <div className="card">
              <div className="card-header">
                <h3>🍔 Burgers</h3>
              </div>
              <div className="card-body">
                <div className="menu-item">
                  <div>
                    <h4>Cheeseburger</h4>
                    <p>Steak, fromage, légumes</p>
                  </div>
                  <span className="price">CHF 11.–</span>
                </div>
                <div className="menu-item">
                  <div>
                    <h4>Chicken Burger</h4>
                    <p>Poulet pané, salade, tomate</p>
                  </div>
                  <span className="price">CHF 12.–</span>
                </div>
                <div className="menu-item">
                  <div>
                    <h4>Kebab Burger</h4>
                    <p>Viande kebab, sauce spéciale</p>
                  </div>
                  <span className="price">CHF 13.–</span>
                </div>
              </div>
            </div>

            {/* Boissons */}
            <div className="card">
              <div className="card-header">
                <h3>🥤 Boissons</h3>
              </div>
              <div className="card-body">
                <div className="menu-item">
                  <div>
                    <h4>Coca-Cola</h4>
                    <p>33cl</p>
                  </div>
                  <span className="price">CHF 3.–</span>
                </div>
                <div className="menu-item">
                  <div>
                    <h4>Ayran</h4>
                    <p>Boisson traditionnelle</p>
                  </div>
                  <span className="price">CHF 3.50</span>
                </div>
                <div className="menu-item">
                  <div>
                    <h4>Thé à la menthe</h4>
                    <p>Fraîchement préparé</p>
                  </div>
                  <span className="price">CHF 4.–</span>
                </div>
              </div>
            </div>
          </div>

          <div style={{ textAlign: "center", marginTop: "48px" }}>
            <a
              href="https://wa.me/41789133202"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              style={{
                backgroundColor: "#25D366",
                fontSize: "18px",
                padding: "16px 32px",
              }}
            >
              🛵 Commander maintenant
            </a>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="section bg-light">
        <div className="container-max">
          <h2>Galerie Photos</h2>
          <p className="subtitle">Découvrez nos délicieux plats en images</p>

          <div className="gallery-grid">
            {[
              {
                src: "https://images.unsplash.com/photo-1633321702518-7feccafb94d5",
                alt: "Kebab sandwich délicieux",
              },
              {
                src: "https://images.unsplash.com/photo-1530469912745-a215c6b256ea",
                alt: "Broche à kebab traditionnelle",
              },
              {
                src: "https://images.unsplash.com/photo-1529006557810-274b9b2fc783",
                alt: "Gyros avec accompagnements",
              },
              {
                src: "https://images.pexels.com/photos/2233729/pexels-photo-2233729.jpeg",
                alt: "Assiette kebab complète",
              },
            ].map((image, index) => (
              <div key={index} className="gallery-item">
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={300}
                  height={300}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="avis" className="section">
        <div className="container-max">
          <h2>Avis Clients</h2>
          <p className="subtitle">Ce que disent nos clients</p>

          <div className="grid grid-3">
            {[
              {
                name: "Marie Dupont",
                rating: 5,
                comment:
                  "Meilleur kebab du Valais ! Service rapide et délicieux. Je recommande vivement !",
                date: "Il y a 2 jours",
              },
              {
                name: "Jean-Pierre Morand",
                rating: 5,
                comment:
                  "Excellent accueil, produits frais et savoureux. Le kebab mixte est un régal !",
                date: "Il y a 1 semaine",
              },
              {
                name: "Sarah Klein",
                rating: 5,
                comment:
                  "Super qualité, portions généreuses et prix corrects. Mon kebab préféré à Sion !",
                date: "Il y a 2 semaines",
              },
            ].map((review, index) => (
              <div key={index} className="review-card">
                <div className="review-header">
                  <div className="stars">
                    {[...Array(review.rating)].map((_, i) => (
                      <span key={i}>⭐</span>
                    ))}
                  </div>
                  <span className="review-date">{review.date}</span>
                </div>
                <p className="review-text">"{review.comment}"</p>
                <div className="review-author">{review.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section bg-light">
        <div className="container-max">
          <h2>Contact & Livraison</h2>
          <p className="subtitle">Trouvez-nous et commandez facilement</p>

          <div className="contact-grid">
            {/* Colonne gauche */}
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
                      style={{
                        color: "#E63946",
                        textDecoration: "none",
                      }}
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

            {/* Colonne droite : carte */}
            <div>
              <div
                className="card"
                style={{
                  overflow: "hidden",
                  height: "400px",
                  padding: 0,
                }}
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

      {/* Footer */}
      <footer>
        <div className="container-max">
          <div className="grid grid-3">
            <div>
              <h3>Kebab Sion</h3>
              <p>
                Votre restaurant kebab de confiance à Sion. Produits frais,
                service rapide, goût authentique.
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
            <p>© 2025 Kebab Sion. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
