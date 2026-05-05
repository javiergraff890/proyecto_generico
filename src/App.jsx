import Navbar from './components/Navbar'
import ProjectHeader from './components/ProjectHeader'
import TechStack from './components/TechStack'
import SectionBlock from './components/SectionBlock'
import Accordion from './components/Accordion'
import EndpointList from './components/EndpointList'
import Footer from './components/Footer'
import ExpandableImage from './components/ExpandableImage'

const endpoints = [
  {
    method: 'GET',
    path: '/api/palabra',
    summary: 'Obtiene una palabra aleatoria',
    details: [
      'Consulta la tabla translations',
      'Selecciona: id, termino, pronunciacion, significado, contexto',
      'Ordena aleatoriamente (ORDER BY RAND())',
      'Limita a 1 resultado',
      'Retorna JSON con datos o 404 si no hay registros',
      'Ejemplo: { "id": 1, "termino": "...", "pronunciacion": "...", "significado": "...", "contexto": "..." }',
    ],
  },
  {
    method: 'POST',
    path: '/api/responder',
    summary: 'Registra respuesta y actualiza última fecha de aparición',
    details: [
      'Recibe JSON: { "id": entero, "resultado": booleano }',
      'Valida id con FILTER_VALIDATE_INT',
      'Valida que resultado sea booleano',
      'Actualiza campo ultima_vez_vista con NOW()',
      'Retorna { "success": true } o 400/404/500 con error',
    ],
  },
];

const project = {
  title: 'Cartas inglés',
  technologies: ['PHP', 'HTML/CSS/JS', 'SQL'],
  description: [
    'Mientras leía el libro "An Insider\'s Guide to Cloud Computing" de David Linthicum, tomaba notas en una hoja de cálculo de Google Sheets sobre palabras o frases que no entendía bien.',
    'En cada fila fui guardando el concepto, la pronunciación, la traducción y el contexto. Repasar o aprender estas nuevas ideas desde una planilla de cálculo no resulta cómodo, por lo que se me ocurrió crear una especie de juego.',
    'La dinámica consiste en que, en pantalla, vayan apareciendo cartas con distintos conceptos, los cuales intento traducir según lo que recuerdo. Luego, un botón de "Revelar" muestra el significado. Una vez revelado, tomo una decisión sobre si realmente lo tenía incorporado o no, y presiono el botón correspondiente: "Sabía" o "No sabía".',
    'Es un ciclo infinito: no se gana ni se pierde, simplemente se practica. Cada palabra/frase tiene un peso con un valor máximo de 5. Si recordé correctamente el significado, el peso sube; si no lo acierto, el peso baja. La idea es que las palabras/frases con menor peso, o aquellas que todavía no aparecieron, tengan más probabilidad de salir.',
  ],
};

function App() {
  return (
    <>
      <div className="top-bar" />
      <Navbar />
      <ProjectHeader title={project.title} />
      <section className="project-section">
        <TechStack technologies={project.technologies} />
        <SectionBlock title="Introducción" id="introduccion">
          {project.description.map((text, index) => (
            <p key={index} className="section-text">
              {text}
            </p>
          ))}
        </SectionBlock>
        <SectionBlock title="Backend" id="backend">
          <p className="section-text">
            La base de datos es muy simple: consiste en una única tabla con los campos término, pronunciación, significado y contexto.
          </p>
          <p className="section-text">
            El acceso a la base de datos se realiza a través de dos endpoints desarrollados en PHP: /api/palabra y /api/responder.
          </p>
          <Accordion title="Endpoints">
            <EndpointList endpoints={endpoints} />
          </Accordion>
          <p className="section-text text-small">
            Si bien no es código de backend, uso este espacio para explicar que la migración de Excel a SQL se realizó mediante un script de Python.
          </p>
          <p className="section-text text-small">
            Este script lee un archivo Excel (data.xlsx), extrae las columnas término, pronunciación, traducción y contexto de la hoja an_insider, y carga cada fila en la tabla translations de la base de datos MySQL words_en.
          </p>
        </SectionBlock>
        <SectionBlock title="Frontend" id="frontend">
          <p className="section-text">
            No profundizo demasiado en la explicación del frontend, ya que está desarrollado con OpenCode y, al tratarse de una aplicación sencilla, opté por una implementación simple en HTML, CSS y JavaScript puro, sin utilizar ningún framework.
          </p>
        </SectionBlock>
        <SectionBlock title="Detalles del proyecto" id="muestra">
          <Accordion title="Toque aquí para una demostración detallada">
            <p className="section-text">
              Las cartas aparecen de esta forma; como usuario, debo leer cada una e intentar recordar o deducir su significado.
            </p>
            <ExpandableImage src="/cartasingles/imagen1.png" alt="Muestra del proyecto" />
            <p className="section-text">
              Al presionar "Revelar", puedo ver el significado y verificar si realmente tenía el concepto incorporado o no; luego, presiono el botón correspondiente.
            </p>
            <ExpandableImage src="/cartasingles/imagen2.png" alt="Muestra del proyecto" />
            <p className="section-text spacer">
              Las estrellas que aparecen debajo de cada concepto indican cuántas veces lo acerté de forma consecutivas; cuanto mejor conozco una palabra, menor probabilidad tiene de volver a aparecer.
            </p>
          </Accordion>
        </SectionBlock>
        <Footer />
      </section>
    </>
  )
}

export default App
