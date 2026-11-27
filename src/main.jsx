import React from 'react';
import { createRoot } from 'react-dom/client';
import { Folder } from 'lucide-react';
import './styles.css';
import heroWindow from './assets/hero-window.png';
import rawDesign from './assets/raw-design.png';
import headphoneStand from './assets/headphone-stand.png';
import glitchborn from './assets/glitchborn.png';

const projects = [
  {
    title: 'Raw Design', image: rawDesign, category: 'DISEÑO DIGITAL / DESARROLLO WEB',
    description: 'Una herramienta web para diseñar indumentaria: del primer trazo al archivo para producción.',
    tags: 'Dibujo 2D · Mockups · Texturas'
  },
  {
    title: 'Soporte de auriculares', image: headphoneStand, category: 'HARDWARE',
    description: 'Un soporte de auriculares en PVC con luz RGB, controles físicos y electrónica integrada.',
    tags: 'Arduino · Electrónica · Hardware'
  },
  {
    title: 'Glitchborn', image: glitchborn, category: 'VIDEOJUEGOS / 3D',
    description: 'Un RPG en tercera persona: escenarios, enemigos, armas y animaciones.',
    tags: 'Modelado 3D'
  }
];

function WindowControls() {
  return <span className="window-controls" aria-hidden="true"><i>−</i><i>□</i><i>×</i></span>;
}

function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <div className="window-title"><span>{project.title}</span><WindowControls /></div>
      <img className="project-image" src={project.image} alt={`Imagen del proyecto ${project.title}`} />
      <div className="project-info">
        <span className="project-category">{project.category}</span>
        <p>{project.description}</p>
        <span className="project-tags">{project.tags}</span>
      </div>
    </article>
  );
}

function App() {
  const goTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  return (
    <>
      <header className="topbar">
        <a className="brand" href="#inicio" onClick={(e) => { e.preventDefault(); goTo('inicio'); }}>Ramiro SR / Portfolio</a>
        <nav aria-label="Navegación principal">
          <a href="#inicio" onClick={(e) => { e.preventDefault(); goTo('inicio'); }}>Inicio</a>
          <a href="#proyectos" onClick={(e) => { e.preventDefault(); goTo('proyectos'); }}>Proyectos</a>
          <a href="#habilidades" onClick={(e) => { e.preventDefault(); goTo('habilidades'); }}>Sobre mi</a>
          <a href="#contacto" onClick={(e) => { e.preventDefault(); goTo('contacto'); }}>Contacto</a>
        </nav>
      </header>

      <main>
        <section className="hero page-width" id="inicio">
          <div className="hero-copy">
            <p className="eyebrow">0.0 / Pantalla de Inicio</p>
            <div className="intro-block">
              <p className="hello">Hola, soy Ramiro</p>
              <h1>Ideas digitales,<br />objetos reales</h1>
              <p className="name">Ramiro Sanchez Rivera</p>
              <p className="bio">diseño y experimento. Me gusta conectar lo visual con lo tecnico para que las ideas funcionen, dentro y fuera de la pantalla</p>
              <button className="explore-button" onClick={() => goTo('proyectos')}>Explorar proyectos <Folder size={23} strokeWidth={1.4} /></button>
            </div>
          </div>
          <img className="hero-window" src={heroWindow} alt="Ventana de proyecto propio con un modelo 3D" />
        </section>

        <div className="ticker page-width" aria-label="Áreas de trabajo">DISEÑO DIGITAL / DISEÑO 3D / HARDWARE /</div>

        <section className="projects-section page-width" id="proyectos">
          <p className="eyebrow">0.1 / Proyectos seleccionados</p>
          <h2>Cada idea, una ventana.</h2>
          <div className="projects-grid">
            {projects.map((project) => <ProjectCard key={project.title} project={project} />)}
          </div>
        </section>

        <section className="skills-section page-width" id="habilidades">
          <p className="eyebrow">0.2 / Habilidades</p>
          <h2 className="outlined-heading">Distintas formas de resolver.</h2>
          <div className="skills-grid">
            <article className="skill-box"><h3>Diseño</h3><p>Figma · UI/UX · Composición · Identidad visual</p></article>
            <article className="skill-box"><h3>3D</h3><p>Blender · Modelado · Texturas · Iluminación · Render</p></article>
            <article className="skill-box"><h3>Hardware</h3><p>Arduino · Electrónica básica · Hardware</p></article>
          </div>
        </section>

        <section className="contact-window page-width" id="contacto">
          <div className="contact-title"><span>Nueva-Conversion.txt</span><WindowControls /></div>
          <div className="contact-content">
            <h2>¿Y si hacemos algo interesante?</h2>
            <p>Una idea o algun proyecto, Contactame.</p>
            <a href="https://wa.me/541142307439" target="_blank" rel="noreferrer">CONTACTO / 1142307439</a>
          </div>
        </section>
      </main>

      <footer>Ramiro Sanchez Rivera / 2026</footer>
    </>
  );
}

createRoot(document.getElementById('root')).render(<React.StrictMode><App /></React.StrictMode>);
