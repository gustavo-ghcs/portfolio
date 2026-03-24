import React, { useRef } from "react";
import { useContactForm } from "../../hooks/useContactForm";

const Contact = () => {
  const formRef = useRef();
  const { isSubmitting, sendEmail } = useContactForm();

  const handleSubmit = (e) => {
    sendEmail(e, formRef);
  };

  return (
    <article className="contact active" data-page="contato">
      <header>
        <h2 className="h2 article-title">Contato</h2>
      </header>

      <section className="mapbox" data-mapbox>
        <figure>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d501683.2470618674!2d-35.10442221443463!3d-8.046601963124245!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7ab18e897eaa550%3A0x2689be6894ffcf94!2sRecife%2C%20PE%2C%20Brazil!5e0!3m2!1sen!2sbd!4v1647608789441!5m2!1sen!2sbd"
            width="400" height="300" loading="lazy" title="Google Maps"
          ></iframe>
        </figure>
      </section>

      <section className="contact-form">
        <h3 className="h3 form-title">Formulário de Contato</h3>
        
        <form ref={formRef} onSubmit={handleSubmit} className="form" data-form>
          <div className="input-wrapper">
            <input type="text" name="user_name" className="form-input" placeholder="Nome completo" required data-form-input />
            <input type="email" name="user_email" className="form-input" placeholder="Endereço de email" required data-form-input />
          </div>
          
          <textarea name="message" className="form-input" placeholder="Sua mensagem" required data-form-input></textarea>
          
          <button className="form-btn" type="submit" disabled={isSubmitting} data-form-btn>
            <ion-icon name="paper-plane"></ion-icon>
            <span>{isSubmitting ? "Enviando..." : "Enviar Mensagem"}</span>
          </button>
        </form>
      </section>
    </article>
  );
};

export default Contact;
