import React, { useState } from "react";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <aside className={`sidebar ${isOpen ? "active" : ""}`} data-sidebar>
      <div className="sidebar-info">
        <figure className="avatar-box">
          <img src="./images/perfil.jpg" alt="Gustavo Hollanda" width="80" />
        </figure>

        <div className="info-content">
          <h1 className="name" title="Gustavo Hollanda">Gustavo Hollanda</h1>
          <p className="title">Web / Mobile developer</p>
        </div>

        <button className="info_more-btn" onClick={() => setIsOpen(!isOpen)}>
          <span>Mostrar Contatos</span>
          <ion-icon name="chevron-down"></ion-icon>
        </button>
      </div>

      <div className="sidebar-info_more">
        <div className="separator"></div>

        <ul className="contacts-list">
          <li className="contact-item">
            <div className="icon-box">
              <ion-icon name="mail-outline"></ion-icon>
            </div>
            <div className="contact-info">
              <p className="contact-title">Email</p>
              <a href="mailto:ghv.guga@gmail.com" className="contact-link">ghv.guga@gmail.com</a>
            </div>
          </li>

          <li className="contact-item">
            <div className="icon-box">
              <ion-icon name="logo-whatsapp"></ion-icon>
            </div>
            <div className="contact-info">
              <p className="contact-title">WhatsApp</p>
              <a href="https://wa.me/5581979080734" className="contact-link" target="_blank" rel="noopener noreferrer">
                +55 (81) 97908-0734
              </a>
            </div>
          </li>

          <li className="contact-item">
            <div className="icon-box">
              <ion-icon name="calendar-outline"></ion-icon>
            </div>
            <div className="contact-info">
              <p className="contact-title">Nascimento</p>
              <time dateTime="04-02-2002">04 de Fevereiro, 2002</time>
            </div>
          </li>

          <li className="contact-item">
            <div className="icon-box">
              <ion-icon name="location-outline"></ion-icon>
            </div>
            <div className="contact-info">
              <p className="contact-title">Localização</p>
              <address>Recife, Pernambuco</address>
            </div>
          </li>
        </ul>

        <div className="separator"></div>

        <ul className="social-list">
          <li className="social-item">
            <a href="https://github.com/gustavo-ghcs" className="social-link" target="_blank" rel="noopener noreferrer">
              <ion-icon name="logo-github"></ion-icon>
            </a>
          </li>
          <li className="social-item">
            <a href="http://linkedin.com/in/gustavo-de-hollanda/" className="social-link" target="_blank" rel="noopener noreferrer">
              <ion-icon name="logo-linkedin"></ion-icon>
            </a>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
