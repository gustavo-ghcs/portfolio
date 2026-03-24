import React from "react";

const TestimonialCard = ({ data, onClick }) => {
  return (
    <li className="testimonials-item" onClick={onClick}>
      <div className="content-card" data-testimonials-item>
        <figure className="testimonials-avatar-box">
          <img src={data.avatar} alt={data.name} width="60" data-testimonials-avatar />
        </figure>
        <h4 className="h4 testimonials-item-title" style={{ whiteSpace: "nowrap" }} data-testimonials-title>{data.name}</h4>
        <div className="testimonials-text" data-testimonials-text>
          <p>{data.text}</p>
        </div>
      </div>
    </li>
  );
};

export default TestimonialCard;
