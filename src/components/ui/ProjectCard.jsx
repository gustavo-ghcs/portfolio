import React from "react";

const ProjectCard = ({ data }) => {
  return (
    <li className="project-item active" data-filter-item data-category={data.category.toLowerCase()}>
      <a href={data.link} target="_blank" rel="noopener noreferrer">
        <figure className="project-img">
          <div className="project-item-icon-box">
            <ion-icon name="eye-outline"></ion-icon>
          </div>
          <img src={data.image} alt={data.title} loading="lazy" />
        </figure>
        <h3 className="project-title">{data.title}</h3>
        <p className="project-category">{data.category}</p>
      </a>
    </li>
  );
};

export default ProjectCard;
