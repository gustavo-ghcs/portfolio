import React, { useState } from "react";
import { testimonialsData, clientsData } from "../../data/mockData";
import TestimonialCard from "../ui/TestimonialCard";

const About = () => {
  const [modalData, setModalData] = useState(null);

  const openModal = (data) => {
    setModalData(data);
  };

  const closeModal = () => {
    setModalData(null);
  };

  return (
    <article className="about active" data-page="sobre">
      <header>
        <h2 className="h2 article-title">Sobre mim</h2>
      </header>

      <section className="about-text">
        <p>Sou estudante de Sistemas de Informação, com paixão por inovação, tecnologia, hardware e empreendedorismo.</p>
        <p>Impulsionado por um desejo incessante de aprender, busco constantemente oportunidades para desenvolver soluções inovadoras que avancem o progresso tecnológico e promovam um impacto social positivo.</p>
        <p>Atualmente, estou focado em desenvolvimento web e mobile, com experiência em Python, JavaScript, React, React Native e Node.js. Além disso, tenho conhecimento em metodologias ágeis, design de interfaces e branding.</p>
      </section>

      <section className="service">
        <h3 className="h3 service-title">O que estou fazendo</h3>
        <ul className="service-list">
          <li className="service-item">
            <div className="service-icon-box">
              <img src="./images/icon-app.svg" alt="mobile app icon" width="40" />
            </div>
            <div className="service-content-box">
              <h4 className="h4 service-item-title">Mobile</h4>
              <p className="service-item-text">Desenvolvimento de aplicações para Android e iOS.</p>
            </div>
          </li>
          <li className="service-item">
            <div className="service-icon-box">
              <img src="./images/icon-dev.svg" alt="Web development icon" width="40" />
            </div>
            <div className="service-content-box">
              <h4 className="h4 service-item-title">Web</h4>
              <p className="service-item-text">Desenvolvimento de sites.</p>
            </div>
          </li>
          <li className="service-item">
            <div className="service-icon-box">
              <img src="./images/icon-dev.svg" alt="backend icon" width="40" />
            </div>
            <div className="service-content-box">
              <h4 className="h4 service-item-title">Back End</h4>
              <p className="service-item-text">Desenvolvimento e manutenção de sistemas robustos e escaláveis.</p>
            </div>
          </li>
          <li className="service-item">
            <div className="service-icon-box">
              <img src="./images/icon-photo.svg" alt="camera icon" width="40" />
            </div>
            <div className="service-content-box">
              <h4 className="h4 service-item-title">Drone</h4>
              <p className="service-item-text">Produção de imagens aéreas.</p>
            </div>
          </li>
        </ul>
      </section>

      <section className="testimonials">
        <h3 className="h3 testimonials-title">Depoimentos</h3>
        <ul className="testimonials-list has-scrollbar">
          {testimonialsData.map((testimonial) => (
            <TestimonialCard
              key={testimonial.id}
              data={testimonial}
              onClick={() => openModal(testimonial)}
            />
          ))}
        </ul>
      </section>

      {/* Modal is simplified for brevity and stability. Toggling class based on state. */}
      <div className={`modal-container ${modalData ? 'active' : ''}`} data-modal-container>
        <div className={`overlay ${modalData ? 'active' : ''}`} onClick={closeModal} data-overlay></div>
        {modalData && (
          <section className="testimonials-modal">
            <button className="modal-close-btn" onClick={closeModal} data-modal-close-btn>
              <ion-icon name="close-outline"></ion-icon>
            </button>
            <div className="modal-img-wrapper">
              <figure className="modal-avatar-box">
                <img src={modalData.avatar} alt={modalData.name} width="80" data-modal-img />
              </figure>
              <img src="./images/icon-quote.svg" alt="quote icon" />
            </div>
            <div className="modal-content">
              <h4 className="h3 modal-title" data-modal-title>{modalData.name}</h4>
              <div data-modal-text>
                <p>{modalData.text}</p>
              </div>
            </div>
          </section>
        )}
      </div>

      <section className="clients">
        <h3 className="h3 clients-title">Clientes</h3>
        <ul className="clients-list has-scrollbar">
          {clientsData.map((client) => (
            <li className="clients-item" key={client.id}>
              <a href={client.link} target="_blank" rel="noopener noreferrer">
                <img 
                  src={client.logo} 
                  alt={client.name} 
                  style={client.customWidth ? { maxWidth: client.customWidth, width: '100%' } : {}}
                />
              </a>
            </li>
          ))}
        </ul>
      </section>
    </article>
  );
};

export default About;
