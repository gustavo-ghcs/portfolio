import { useState } from "react";
import emailjs from "@emailjs/browser";

export const useContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const sendEmail = (e, formRef) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs
      .sendForm('service_d6lxs0d', 'template_2fs6gug', formRef.current, 'sguwFf4IWd4T0BA02')
      .then((response) => {
        console.log('Success:', response);
        alert('Mensagem enviada com sucesso!');
        formRef.current.reset();
      })
      .catch((error) => {
        console.log('Error:', error);
        alert('Falha ao enviar a mensagem. Tente novamente.');
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return { isSubmitting, sendEmail };
};
