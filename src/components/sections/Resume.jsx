import React from "react";
import { experienceData, skillsData } from "../../data/mockData";
import "../../assets/css/Resume.css";

const Resume = () => {
  return (
    <article className="resume active" data-page="resumo">
      <header>
        <h2 className="h2 article-title">Currículo</h2>
      </header>

      <section className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <ion-icon name="book-outline"></ion-icon>
          </div>
          <h3 className="h3">Formação acadêmica</h3>
        </div>

        <ol className="timeline-list">
          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">Centro de Informática - UFPE</h4>
            <span>2022 - 2026</span>
            <p className="timeline-text">Bacharelado em Sistemas de Informação.</p>
          </li>
        </ol>
      </section>

      <section className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <ion-icon name="book-outline"></ion-icon>
          </div>
          <h3 className="h3">Experiência</h3>
        </div>

        <ol className="timeline-list">
          {experienceData.map((exp) => (
            <li className="timeline-item" key={exp.id}>
              <h4 className="h4 timeline-item-title">{exp.title}</h4>
              <span>{exp.period}</span>
              <p className="timeline-text">{exp.description}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="skill">
        <h3 className="h3 skills-title">Skills</h3>
        <div className="skills-marquee-wrapper">
          <div className="skills-marquee">
            {[...skillsData, ...skillsData].map((skill, index) => (
              <div className="skill-badge" key={index}>
                {skill}
              </div>
            ))}
          </div>
        </div>
      </section>
    </article>
  );
};

export default Resume;
