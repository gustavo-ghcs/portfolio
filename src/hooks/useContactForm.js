import { useState } from "react";

export const useContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState(null);

  const sendEmail = (e, formRef) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus(null);

    const formData = new FormData(formRef.current);
    const data = Object.fromEntries(formData.entries());

    fetch("https://formsubmit.co/ajax/ghv.guga@gmail.com", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          formRef.current.reset();
          setStatus("success");
        } else {
          throw new Error("FormSubmit returned false");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        setStatus("error");
      })
      .finally(() => {
        setIsSubmitting(false);
        setTimeout(() => setStatus(null), 5000);
      });
  };

  return { isSubmitting, status, sendEmail };
};
