import React from 'react';
import Proj001 from '../../images/quiz-master-max.png';
import Proj002 from '../../images/animanga-portfolio.png';
import Proj003 from '../../images/project.png';
import Proj004 from '../../images/project.png';
import Proj005 from '../../images/project.png';
import Proj006 from '../../images/project.png';

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "Quiz Master Max",
      image: Proj001,
      description: "A quiz app that allows users to take quizzes on a variety of programming topics.",
      link: 'https://quizmax.herokuapp.com/login',
      github: 'https://github.com/chrisjg19/QuizMasterMax5000'
    },
    {
      id: 2,
      title: "Animanga",
      image: Proj002,
      description: "A search engine for anime and manga. Users can search for anime and manga and view details about them.",
      link: 'https://jshigoodies.github.io/Animanga/',
      github: 'https://github.com/Jshigoodies/Animanga'
    },
    {
      id: 3,
      title: "Dynamic Dayplanner",
      image: Proj003,
      description: "A day planner that allows users to save events for each hour of the day.",
      link: 'https://steviemiller.github.io/dynamic-dayplanner/',
      github: 'https://github.com/StevieMiller/dynamic-dayplanner'
    },
    {
      id: 4,
      title: "Duly Noted: Note Taker",
      image: Proj004,
      description: "A note taking app that allows users to create, save, and delete notes.",
      link: 'https://gentle-temple-86627.herokuapp.com/',
      github: 'https://github.com/StevieMiller/duly-noted'
    },
    {
      id: 5,
      title: "Weather Medium",
      image: Proj005,
      description: "A weather app that allows users to search for the weather in any city.",
      link: 'https://steviemiller.github.io/weather-medium/',
      github: 'https://github.com/StevieMiller/weather-medium'
    },
    {
      id: 6,
      title: "Password Generator",
      image: Proj006,
      description: "A password generator that allows users to create a secure password.",
      link: 'https://steviemiller.github.io/secure-password-generator/',
      github: 'https://github.com/StevieMiller/secure-password-generator'
    },
  ];

  return (
    <section className='page-container'>
      <h2 className='mb-5'>Projects</h2>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        {projects.map(({ id, title, image, description, link, github }) => (
          <div className="col" key={id}>
            <div className="card h-100">
              <img src={image} alt={title} className="card-img-top" />
              <div className="card-body">
                <h3 className="card-title">{title}</h3>
                <p className="card-text">{description}</p>
                <div className="d-grid gap-2">
                  <a href={link} target="_blank" rel="noopener noreferrer" className="btn btn-primary">Demo</a>
                  <a href={github} target="_blank" rel="noopener noreferrer" className="btn btn-primary">GitHub</a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
