import React, { useState } from "react";
import { projectsData } from "../../data/mockData";
import ProjectCard from "../ui/ProjectCard";

const Portfolio = () => {
  const [filter, setFilter] = useState("Tudo");
  const categories = ["Tudo", "Mobile development", "Web development", "Web design", "Outros"];

  const filteredProjects = filter === "Tudo" 
    ? projectsData 
    : projectsData.filter(p => p.category.toLowerCase() === filter.toLowerCase());

  return (
    <article className="portfolio active" data-page="portfólio">
      <header>
        <h2 className="h2 article-title">Portfólio</h2>
      </header>

      <section className="projects">
        <ul className="filter-list">
          {categories.map((cat) => (
            <li className="filter-item" key={cat}>
              <button 
                className={filter === cat ? "active" : ""} 
                onClick={() => setFilter(cat)}
              >
                {cat}
              </button>
            </li>
          ))}
        </ul>

        <div className="filter-select-box">
          <button className="filter-select" data-select>
            <div className="select-value" data-selecct-value>{filter === "Tudo" ? "Selecione uma categoria" : filter}</div>
            <div className="select-icon">
              <ion-icon name="chevron-down"></ion-icon>
            </div>
          </button>
        </div>

        <ul className="project-list">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} data={project} />
          ))}
        </ul>
      </section>
    </article>
  );
};

export default Portfolio;
