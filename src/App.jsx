import Navbar from './components/Navbar'
import ProjectHeader from './components/ProjectHeader'
import TechStack from './components/TechStack'
import SectionBlock from './components/SectionBlock'
import TechList from './components/TechList'
import Accordion from './components/Accordion'
import EndpointList from './components/EndpointList'
import VideoEmbed from './components/VideoEmbed'
import Footer from './components/Footer'
import ExpandableImage from './components/ExpandableImage'

const backendTechs = [
  { name: 'Tecnología 1', description: 'Descripción de tecnología 1' },
  { name: 'Tecnología 2', description: 'Descripción de tecnología 2' },
  { name: 'Tecnología 3', description: 'Descripción de tecnología 3' },
]

const frontendTechs = [
  { name: 'Tecnología A', description: 'Descripción de tecnología A' },
  { name: 'Tecnología B', description: 'Descripción de tecnología B' },
]

const endpoints = [
  {
    method: 'GET',
    path: '/api/recurso1',
    summary: 'Obtiene lista de recursos',
    details: [
      'Retorna todos los registros',
      'Soporta paginación',
      'Formato JSON',
    ],
  },
  {
    method: 'POST',
    path: '/api/recurso1',
    summary: 'Crea un nuevo recurso',
    details: [
      'Recibe datos en formato JSON',
      'Valida los campos requeridos',
      'Retorna el recurso creado',
    ],
  },
  {
    method: 'GET',
    path: '/api/recurso1/{id}',
    summary: 'Obtiene un recurso específico',
    details: [
      'Busca por ID',
      'Retorna 404 si no existe',
    ],
  },
  {
    method: 'PUT',
    path: '/api/recurso1/{id}',
    summary: 'Actualiza un recurso',
    details: [
      'Actualiza todos los campos',
      'Retorna el recurso actualizado',
    ],
  },
  {
    method: 'DELETE',
    path: '/api/recurso1/{id}',
    summary: 'Elimina un recurso',
    details: [
      'Elimina de la base de datos',
'Retorna 204 si exitoso',
    ],
  },
];

const project = {
  title: 'Nombre del Proyecto',
  technologies: ['Tecnología 1', 'Tecnología 2', 'Tecnología 3'],
  description: [
    'Este es un proyecto de ejemplo que demuestra las capacidades del sistema.',
    'Fue desarrollado como plantilla para documentar diferentes tipos de proyectos.',
    'Los detalles específicos pueden modificarse según las necesidades de cada caso.',
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
          <TechList items={backendTechs} />
          <Accordion title="Endpoints">
            <EndpointList endpoints={endpoints} />
          </Accordion>
          <p className="section-text text-small">
            Algunos endpoints pueden requerir autenticación.
          </p>
        </SectionBlock>
        <SectionBlock title="Frontend" id="frontend">
          <TechList items={frontendTechs} />
        </SectionBlock>
        <SectionBlock title="Detalles del proyecto" id="muestra">
          <Accordion title="Toque aquí para una demostración detallada">
            <p className="section-text">
              Esta sección muestra las funcionalidades y características principales del proyecto.
            </p>
            <p className="section-text">
              Los detalles específicos pueden variar según los requisitos de cada caso.
            </p>
            <ExpandableImage src="/generico.jpg" alt="Muestra del proyecto" />
          </Accordion>
        </SectionBlock>
        <SectionBlock title="Videos demostrativos" id="videos">
          <VideoEmbed videoId="SgEQrUIKJ6Y" title="Video demostrativo" />
        </SectionBlock>
        <Footer />
      </section>
    </>
  )
}

export default App
