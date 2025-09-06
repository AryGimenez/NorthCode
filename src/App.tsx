// App.tsx

import React, { useState, useEffect, useRef } from 'react';
import { Menu, Linkedin, Phone, Github, Mail } from 'lucide-react';
// MessageSquareText agregar cuando metamos el mensajer de la emprea  Watsap



// --- Importación de imágenes ---

import heroBackground from './assets/backgrounds/hero-background.jpg'
import logo from './assets/logo.png'

// Fotos Equipo ----------------
import fotoAry from './assets/equipo/ary-negro.jpg'
import fotoFacundo from './assets/equipo/facundo.jpg'
import fotoMateo from './assets/equipo/mateo.jpg'
import fotoEsteban from './assets/equipo/esteban.jpg'
// Fotos de Proyectos ----------------
import logoMGSoluciones from './assets/proyectos/MGSoluciones.png'
import logoMColors from './assets/proyectos/MontevideoColors.jpg'
import logoGuzzetti from './assets/proyectos/Guzzetti.jpg'



/**
 * Hook para animaciones de "fade-in" al hacer scroll.
 * Devuelve una referencia (ref) para adjuntar al elemento que se desea animar,
 * y un estado booleano (isInView) que se vuelve verdadero cuando el elemento
 * entra en la vista del usuario.
 *
 * @returns {[React.RefObject<HTMLDivElement>, boolean]}
 */
const useFadeInOnScroll = (): [React.RefObject<HTMLDivElement>, boolean] => {
  // `useRef` crea una referencia persistente que apunta a un elemento del DOM.
  // Esta referencia no cambia entre renderizados del componente.
  const ref = useRef<HTMLDivElement>(null);
  
  // `useState` crea un estado local para el componente.
  // Este estado se utiliza para rastrear si el elemento está en la vista o no.
  const [isInView, setIsInView] = useState(false);

  // `useEffect` se usa para efectos secundarios, como la creación de un observador.
  // Se ejecuta una sola vez después del renderizado inicial gracias al array de dependencias vacío `[]`.
  useEffect(() => {
    // Captura la referencia actual del elemento para usarla en el observer.
    const currentRef = ref.current;
    if (!currentRef) return; // Si no hay referencia, sale de la función.

    // Crea una instancia de IntersectionObserver.
    // Esta API observa si un elemento (el "target") es visible dentro de otro elemento (el "root").
    const observer = new IntersectionObserver(
      ([entry]) => {
        // La función de callback se ejecuta cuando la visibilidad cambia.
        // `entry.isIntersecting` es `true` si el elemento está visible en la pantalla.
        if (entry.isIntersecting) {
          setIsInView(true);// Cambia el estado para activar la animación.
          observer.unobserve(currentRef); // Detiene la observación para no ejecutar la animación múltiples veces.
        }
      },
      {
        root: null, // El "root" es el viewport del navegador
        rootMargin: '0px', // No se añade margen adicional al viewport.
        threshold: 0.1, // El 10% del elemento debe ser visible para activar el observador.
      }
    );
     // Inicia la observación del elemento.
    observer.observe(currentRef);
    
    // Función de limpieza que se ejecuta cuando el componente se desmonta.
    // Esto es crucial para evitar fugas de memoria.
    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);  // Asegura que el observador se detenga.
      }
    };
  }, []); // Array de dependencias vacío, asegura que el efecto se ejecute solo una vez.
  
  // El hook devuelve la referencia y el estado de visibilidad.
  // Estos valores se usan en el componente principal para conectar el elemento
  // y aplicar la clase de animación.
  return [ref as React.RefObject<HTMLDivElement>, isInView];
};




// --- Datos de los proyectos ---

const projects = [
  {  //MG Soluciones IT
    id: 1, // <- Identificador único
    title: 'MG Soluciones IT', 
    description: 'Creamos una plataforma web profesional para MG Soluciones IT, destacando sus servicios clave de soporte técnico, infraestructura IT y respaldos en la nube. Un diseño moderno y funcional que conecta a los clientes con soluciones tecnológicas eficientes.', 
    img: logoMGSoluciones, 
    url: 'https://mgsolucionesit.com.uy/' 
  },
  { // Montevideo Colors
    id: 2,
    title: 'Montevideo Colors', 
    description: 'Este proyecto es el sitio web para Montevideo Colors, una residencia estudiantil en el centro de Montevideo. La web fue diseñada para destacar su ubicación estratégica y una amplia gama de servicios esenciales para estudiantes, como WiFi, Netflix, limpieza diaria y seguridad las 24 horas.', 
    img: logoMColors, 
    url: 'https://www.montevideocolors.com.uy/' 
  },
  { // Guzzetti - Arámbula Clinica Odontologica
    id: 3,
    title: 'Guzzetti - Arámbula Clinica Odontologica', 
    description: 'Este proyecto es el sitio web de una clínica odontológica. La página está diseñada para transmitir confianza y profesionalismo, destacando un servicio dental integral que busca tanto la salud bucal como la armonía estética. Se enfatiza el compromiso con la excelencia y la experiencia del paciente para crear un espacio confiable y moderno.', 
    img: logoGuzzetti, 
    url: 'https://guzzettiarambulaodontologos.com/' 
  },
];

// --- Sección Visión ---
const VisionSection: React.FC = () => {
  return (
    <section id="vision" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-4">Nuestra visión</h2>
        <p className="max-w-3xl mx-auto text-lg mb-8 leading-relaxed">
          Queremos convertirnos en un referente tecnológico en la frontera Uruguay–Brasil,
          generando soluciones digitales innovadoras y creando oportunidades de empleo para jóvenes.
        </p>
        <p className="max-w-3xl mx-auto text-lg italic leading-relaxed">
          Soñamos con un futuro donde Artigas sea reconocido como un semillero de talento IT
          que exporta conocimiento y creatividad al mundo.
        </p>
      </div>
    </section>
  );
};

// --- Seccion Equipo ----

  // Datos del equipo

  const teamMembers = [
    { // Datos Facundo
      id: 1, // Identificador único
      name: 'Facundo',
      role: 'Diseñador UX/UI',
      img: fotoFacundo,

      linkedin: 'https://www.linkedin.com/in/facundo-quir%C3%B3-salda%C3%B1a-bustamante-1225b5250/',
      github: 'https://github.com/thejokor16',
      mail: 'mailto:facugoqui@gmail.com'

    },
    { // Datos Esteban
      id: 2,
      name: 'Esteban',
      role: 'Backend Developer',
      img: fotoEsteban,

      linkedin: 'https://www.linkedin.com/in/esteban-silva-598110182/',
      github: 'https://github.com/Megamonster2YT',
      mail: 'mailto:silvaesteban309@gmail.com'

    },
    { // Datos Ary
      id: 3,
      name: 'Ary',
      role: 'Infraestructura & CEO',
      img: fotoAry,

      linkedin: 'https://www.linkedin.com/in/ary-gimenez-2a42b5179/',  
      github: 'https://github.com/AryGimenez',
      mail: 'mailto:argi.prog@gmail.com'

    },
    {
      id: 4,
      name: 'Mateo',
      role: 'Ventas, Marketing & Frontend Developer',
      img: fotoMateo,

      linkedin: 'https://www.linkedin.com/in/mate-bds-46448a363/',
      github: 'https://github.com/MateoBas005',
      mail: 'mailto:matebsbastosdossantos@gmail.com'

    }
  ];


// Define la estructura de un solo miembro del equipo
interface TeamMember {
  id: number;
  name: string;
  role: string;
  img: string;

  linkedin: string;
  github: string;
  mail: string;
}


// Props para el componente TeamSection
interface TeamSectionProps {
  teamMembers: TeamMember[]; // <- ¡Este es el cambio clave!
};

// Componente para la sección del equipo 
// ChatGPt -- Esto hay que separarlo en las tarjeta y la seccion contenedora de las mismas 

const TeamSection: React.FC<TeamSectionProps> = ({ teamMembers }) => {
  const [nosotrosRef, nosotrosInView] = useFadeInOnScroll(); // Referencia y estado de visibilidad para la sección "Nosotros"
  return (
    <section id="nosotros" className="py-24 bg-black">
      <div ref={nosotrosRef} className={`container mx-auto px-4 text-center transition-all duration-1000 transform ${nosotrosInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-12">Conoce a nuestro equipo</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Mapa de miembros del equipo - Crea los diferentes DIV con los datos del equipo */}
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-gray-900 border border-gray-800 rounded-xl p-6 text-center transition-all duration-300 hover:scale-105 hover:border-red-600">
              <img src={member.img} alt={`Foto de ${member.name}`} className="w-24 h-24 mx-auto rounded-full mb-4 object-cover border-4 border-red-600" />
              <h3 className="text-xl font-bold text-white">{member.name}</h3>
              <p className="text-red-500 font-medium">{member.role}</p>
              <div className="flex justify-center space-x-4 mt-4">
                <a href={member.linkedin} className="transition-transform transform hover:scale-125 duration-200" aria-label={`LinkedIn de ${member.name}`}>
                  <Linkedin className="w-6 h-6 text-gray-400 hover:text-red-600" />
                </a>
                <a href={member.github} className="transition-transform transform hover:scale-125 duration-200" aria-label={`GitHub de ${member.name}`}>
                  <Github className="w-6 h-6 text-gray-400 hover:text-red-600" />
                </a>
                <a href={member.mail} className="transition-transform transform hover:scale-125 duration-200" aria-label={`Email de ${member.name}`}>
                  <Mail className="w-6 h-6 text-gray-400 hover:text-red-600" />
                </a>
                {/* <a href={member.whatsapp} className="transition-transform transform hover:scale-125 duration-200" aria-label={`WhatsApp de ${member.name}`}>
                  <MessageSquareText className="w-6 h-6 text-gray-400 hover:text-red-600" />
                </a> */}
              </div>
            </div>
          ))}
          
        </div>
      </div>
    </section>
  );
};



 // --- Componente Header (Navegación) ---
  
  // Es útil para que TypeScript entienda qué tipo de props espera cada componente.
  interface HeaderProps {
    toggleMobileMenu: () => void; // Una función que no recibe argumentos y no retorna nada.
    isMobileMenuOpen: boolean;    // Un valor booleano (true/false) que indica si el menú móvil está abierto.
    logo: string;                 // Una cadena de texto que representa la URL de la imagen del logo.
  }


  // Componente para el encabezado (Header)
  const Header: React.FC<HeaderProps> = ({ toggleMobileMenu, isMobileMenuOpen, logo }) => (
    <header className="fixed top-0 left-0 w-full z-50 bg-black bg-opacity-80 backdrop-blur-lg">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          {/* Logo */}
          <a href="#" className="flex items-center text-white text-xl font-bold space-x-2">
            <img src={logo} alt="Logo de NorthCode" className="w-10 h-10" /> 
            <span>NorthCode</span>
          </a>
       
        </div>

        {/* Enlaces de navegación */}
        <div className="hidden md:flex space-x-6 text-gray-300 font-semibold">
          <a href="#inicio" className="hover:text-red-600 transition-colors">Inicio</a>
          <a href="#nosotros" className="hover:text-red-600 transition-colors">Nosotros</a>
          <a href="#proyectos" className="hover:text-red-600 transition-colors">Proyectos</a>
          <a href="#contacto" className="hover:text-red-600 transition-colors">Contacto</a>
        </div>
        <button
        onClick={toggleMobileMenu} 
        className="md:hidden text-white focus:outline-none"
        title="Abrir menú de navegación"
        arial-label="Abrir menú de navegación"
        >
          <Menu className="w-6 h-6" />
        </button>
      </nav>
      <div className={`md:hidden bg-gray-900 text-white text-center py-4 space-y-4 ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
        <a href="#inicio" onClick={toggleMobileMenu} className="block py-2 hover:bg-gray-800 transition-colors">Inicio</a>
        <a href="#nosotros" onClick={toggleMobileMenu} className="block py-2 hover:bg-gray-800 transition-colors">Nosotros</a>
        <a href="#proyectos" onClick={toggleMobileMenu} className="block py-2 hover:bg-gray-800 transition-colors">Proyectos</a>
        <a href="#contacto" onClick={toggleMobileMenu} className="block py-2 hover:bg-gray-800 transition-colors">Contacto</a>
      </div>
    </header>
  );

// ------- Seccion Valor Social -------

/**
 * Componente que muestra el impacto social de la empresa, diseñado con una paleta de colores oscuros.
 * @component
 * @returns {JSX.Element} El elemento React de la sección de impacto social.
 */
const SocialImpactSection: React.FC = () => {
  return (
    <section id="social-impact" className="py-20 px-4 bg-gray-900 text-white">
      <div className="container mx-auto">
        <div className="md:flex md:space-x-12 items-center">
          {/* Columna de texto */}
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h2 className="text-4xl font-bold mb-4 text-gray-100">
              Impulsando a la juventud de Artigas hacia el mundo IT
            </h2>
            <p className="text-lg mb-4">
              NorthCode no es solo una empresa de tecnología, también es un proyecto social.
              Nuestro objetivo es formar y dar oportunidades a jóvenes de Artigas en el mundo del
              desarrollo y la innovación digital.
            </p>
            <ul className="list-disc list-inside space-y-2 text-lg mb-6">
              <li>Entrenamos talento local en programación y habilidades digitales.</li>
              <li>Creamos un entorno de aprendizaje donde la juventud puede crecer y trabajar en proyectos reales.</li>
              <li>Conectamos Artigas con Brasil y el mundo, abriendo puertas en un mercado que valora el talento IT.</li>
            </ul>
            <p className="text-lg font-semibold">
              Creemos que la tecnología puede ser el motor para transformar nuestra comunidad, y cada proyecto
              que desarrollamos nos ayuda a acercarnos más a esa visión.
            </p>
            <p className="text-lg font-bold mt-4">
              👉 Al elegir NorthCode, no solo contratás un servicio: también apoyás el futuro de jóvenes artiguenses.
            </p>
          </div>

          {/* Columna de imagen (placeholder) */}
          <div className="md:w-1/2">
            {/* Espacio para la foto de los jóvenes trabajando */}
            <div className="w-full h-80 rounded-2xl overflow-hidden shadow-lg bg-gray-800 flex items-center justify-center text-gray-400">
              <p className="p-4 text-center">
                Aquí va una foto de jóvenes uruguayos trabajando en el proyecto.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// ---- Sección Proyectos ----

// Define la estructura de un solo proyecto
interface ProjectsSectionMember {
    title: string;
    description: string;
    img: string;
    url: string;
}

// Props para el componente ProjectsSection
interface ProjectsSectionProps {
  projects: ProjectsSectionMember[];
}


// ChatGPt -- Esto creo que no va 



  interface HeroProps {
    heroBackground: string;
  }

  // Primer letrero de la pagina donde esta
  const Hero: React.FC<HeroProps> = ({ heroBackground }) => (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center text-center py-24 bg-gray-950 overflow-hidden">

     {/* div De Fondo */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${heroBackground})`,
        }}
      ></div>


      {/* Oscurese el fondo !ChatGPT  Podria acerlo de otra manera ??*/}
      <div className="absolute inset-0 z-10 bg-black/70"></div>


      <div className="relative z-20 max-w-4xl mx-auto px-4 ">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-10">
          <span className="text-red-600">Transformamos ideas</span><br /> en experiencias digitales.
        </h1>
        <a href="#contacto" className="px-8 py-3 rounded-full font-bold transition-all duration-300 bg-red-600 text-white shadow-lg shadow-red-500/50 hover:bg-red-700">
          Comienza tu proyecto
        </a>
      </div>
    </section>
  );

// -ChatGPT Este carrucel no me suta se mueve solo y me gustaria que si se moviera
// pero quiero que si quiero poder deslisar con el dedo o arrastrarlo algo asi 
// ademas se esta rrompiendo se vueve bien pareo de a rrato como que se atrasa es 
// desir que no tiene como un diley y no es continuo ademas aparese al borde de la 
// pagina lo cual no es correcto , deberia capas tener un borde algo por el estilo


// ---- Componente ProjectsSection (Proyectos)  ------------
const ProjectsSection: React.FC<ProjectsSectionProps> = ({ projects }) => {
  const [proyectosRef, proyectosInView] = useFadeInOnScroll(); // Referencia y estado de visibilidad para la sección "Proyectos"
  // Se duplica el array de proyectos para crear un efecto de carrusel infinito.
  const allProjects = [...projects, ...projects];

  return (
    <section id="proyectos" className="py-24 bg-gray-950">
      <style>
        {`
          @keyframes slide-right {
            from {
              transform: translateX(0);
            }
            to {
              transform: translateX(-50%);
            }
          }
          .animate-carousel {
            animation: slide-right 45s linear infinite;
          }
        `}
      </style>
      <div ref={proyectosRef} className={`text-center transition-all duration-1000 transform ${proyectosInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-12">Nuestros Proyectos</h2>
        {/* Contenedor del carrusel con overflow oculto para que solo se vea la banda */}
        <div className="relative w-full overflow-hidden py-4">
          {/* La banda de proyectos que se mueve. Se duplican los elementos para el loop infinito. */}
          <div className="flex animate-carousel">
            {allProjects.map((project, index) => (
              <a
                key={index}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-shrink-0 w-80 p-4"
              >
                <div className="bg-gray-900 border border-gray-800 rounded-xl p-4 overflow-hidden h-full transition-all duration-300 hover:scale-105 hover:border-red-600">
                  <img src={project.img} alt={`Imagen del proyecto: ${project.title}`} className="w-full h-48 object-cover rounded-md mb-4" />
                  <div className="text-left">
                    <h3 className="text-xl font-bold text-white">{project.title}</h3>
                    <p className="text-gray-400 mt-2">{project.description}</p>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};


// --- Componente ContactSection (Contacto) ---


// Props para el componente ContactSelect
interface ContactSelectPaper {
  whatsappUrl: string;
}

const ContactSection: React.FC<ContactSelectPaper> = ({ whatsappUrl }) => {
  const [contactoRef, contactoInView] = useFadeInOnScroll();
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [formMessage, setFormMessage] = useState('');
  const [isFormSubmitting, setIsFormSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsFormSubmitting(true);
    setFormMessage('Enviando mensaje...');

    // Validación simple
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
        setFormMessage('Por favor, completa todos los campos.');
        setIsFormSubmitting(false);
        return;
    }

    try {
      // Simula el envío a un servicio de backend o API.
      // En un proyecto real, reemplazarías esto con una llamada a la API (ej. fetch, axios).
      // Aquí, usamos un retraso de 1 segundo para simular la respuesta del servidor.
      await new Promise(resolve => setTimeout(resolve, 1000));

      setFormMessage('¡Gracias! Tu mensaje ha sido enviado correctamente.');
      // Reinicia el formulario
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error('Error al enviar el formulario:', error);
      setFormMessage('Ocurrió un error. Por favor, inténtalo de nuevo.');
    } finally {
      setIsFormSubmitting(false);
    }
  };

  return (
    <section id="contacto" className="py-24 bg-black">
      <div ref={contactoRef} className={`container mx-auto px-4 text-center transition-all duration-1000 transform ${contactoInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-12">Contáctanos</h2>
        <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
          ¿Listo para comenzar tu proyecto? Llena el formulario o contáctanos directamente.
        </p>
        <div className="max-w-xl mx-auto">
          <form onSubmit={handleFormSubmit} className="space-y-6">
            <input type="text" name="name" placeholder="Nombre completo" className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-red-600" required value={formData.name} onChange={handleChange} />
            <input type="email" name="email" placeholder="Correo electrónico" className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-red-600" required value={formData.email} onChange={handleChange} />
            <input type="text" name="subject" placeholder="Asunto" className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-red-600" required value={formData.subject} onChange={handleChange} />
            <textarea name="message" placeholder="Tu mensaje..." rows={5} className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-red-600 resize-none" required value={formData.message} onChange={handleChange}></textarea>
            <button
              type="submit"
              className="px-8 py-3 rounded-full font-bold transition-all duration-300 bg-red-600 text-white shadow-lg shadow-red-500/50 hover:bg-red-700 w-full"
              disabled={isFormSubmitting}
            >
              {isFormSubmitting ? 'Enviando...' : 'Enviar Mensaje'}
            </button>
          </form>
          {formMessage && (
            <div className="mt-4 text-sm font-semibold animate-pulse" style={{ color: formMessage.includes('Gracias') ? '#10B981' : '#EF4444' }}>
              {formMessage}
            </div>
          )}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center justify-center w-full px-8 py-3 rounded-full font-bold transition-all duration-300 bg-green-600 text-white hover:bg-green-700"
          >
            <Phone className="w-5 h-5 mr-2" />
            Contáctanos por WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};

// --- Componente Porque elegirnos ---

const WhyChooseUsSection: React.FC = () => {
  return (
    <section id="why-choose-us" className="py-20 px-4 bg-gray-900 text-white">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center text-gray-100">
          ¿Por qué elegir NorthCode?
        </h2>

        {/* Contenedor principal para las dos opciones de diseño */}
        <div className="flex flex-col md:flex-row md:space-x-8">
          {/* Opción 2: Diseño moderno y visual */}
          <div className="bg-gray-800 p-8 rounded-2xl shadow-lg md:w-full">
            <h3 className="text-2xl font-semibold mb-4 text-gray-100">
              Opción 2: Diseño moderno
            </h3>
            <div className="w-full h-56 rounded-xl mb-8 overflow-hidden bg-gray-700 flex items-center justify-center text-gray-400">
              [Aquí va una foto, por ejemplo de un equipo trabajando o un edificio moderno]
            </div>

            <p className="mb-6">
              En NorthCode creemos que una web no es solo un diseño, sino una herramienta que genera
              confianza, visibilidad y oportunidades reales de negocio.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-gray-700 p-4 rounded-xl">
                <span className="text-3xl mb-2 block">🚀</span>
                <strong className="block">Velocidad</strong>
                <p className="text-sm text-gray-400">Entregamos webs listas en pocos días.</p>
              </div>
              <div className="bg-gray-700 p-4 rounded-xl">
                <span className="text-3xl mb-2 block">🎨</span>
                <strong className="block">Diseño profesional</strong>
                <p className="text-sm text-gray-400">Interfaces modernas y adaptadas a celulares.</p>
              </div>
              <div className="bg-gray-700 p-4 rounded-xl">
                <span className="text-3xl mb-2 block">💸</span>
                <strong className="block">Costo accesible</strong>
                <p className="text-sm text-gray-400">Planes flexibles que se ajustan a cada negocio.</p>
              </div>
              <div className="bg-gray-700 p-4 rounded-xl">
                <span className="text-3xl mb-2 block">🤝</span>
                <strong className="block">Soporte cercano</strong>
                <p className="text-sm text-gray-400">Estamos en Artigas, pero con visión internacional.</p>
              </div>
              <div className="bg-gray-700 p-4 rounded-xl">
                <span className="text-3xl mb-2 block">📈</span>
                <strong className="block">Experiencia real</strong>
                <p className="text-sm text-gray-400">Ya trabajamos con empresas en Montevideo y seguimos creciendo.</p>
              </div>
            </div>

            <p className="text-lg font-bold mt-6 text-center">
              Nos importa tu éxito, porque si tu empresa crece, nosotros también crecemos.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};


// --- Componente Footer ---

const Footer = () => (
  <footer className="bg-gray-950 text-gray-500 py-8 text-center">
    <div className="container mx-auto px-4">
      <p>&copy; 2025 NorthCode Impulsando tu visión. Derechos reservados</p>
    </div>
  </footer>
);

// --- Componente principal de la aplicación ---

const App = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const whatsappUrl = `https://wa.me/59898559058?text=${encodeURIComponent('Hola, me gustaría más información sobre los servicios de NorthCode.')}`;

  return (
    <div className="bg-black text-white font-inter">
      {/* Seccion Header Barra superior  */}
      <Header toggleMobileMenu={toggleMobileMenu} isMobileMenuOpen={isMobileMenuOpen} logo={logo} />
      <main>
        {/* Seccion Hero Parte principal de la web */}
        <Hero heroBackground={heroBackground} />

        {/* Seccion Porque elegirnos */}
        <WhyChooseUsSection />

        {/* Seccion Vision */}  
        <VisionSection />

        {/* Seccion Impacto Social */}
        <SocialImpactSection />

        {/* Seccion Equipo */}
        <TeamSection teamMembers={teamMembers} />

        {/* Seccion Proyectos */}
        <ProjectsSection projects={projects} />
        
        {/* Seccion Contacto */}
        <ContactSection whatsappUrl={whatsappUrl} />
        

      </main>
      <Footer />
    </div>
  );
};

export default App;

// --- Comentarios importantes ---
// Aquí puedes agregar comentarios sobre la estructura y funcionalidad de tu aplicación.

// Aquí se define el componente Header usando una función flecha (arrow function).
// React.FC<HeaderProps> indica que es un componente de React que recibe props del tipo HeaderProps.
// Entre paréntesis van los props desestructurados: { toggleMobileMenu, isMobileMenuOpen, logo }.
// El símbolo => define la función flecha, que retorna el JSX (estructura visual del componente).

// --- Codigo a revisar para mejorar carrusel ---
// --- Componente ProjectsSection (Carrusel mejorado e infinito con drag) ---
// import React, { useRef, useEffect, useState } from 'react';

// const ProjectsSection: React.FC<ProjectsSectionProps> = ({ projects }) => {
//   const [proyectosRef, proyectosInView] = useFadeInOnScroll();
//   const carouselRef = useRef<HTMLDivElement>(null);
//   const [isDragging, setIsDragging] = useState(false);
//   const [startX, setStartX] = useState(0);
//   const [scrollLeft, setScrollLeft] = useState(0);

//   // Duplicamos los proyectos para el loop visual
//   const allProjects = [...projects, ...projects, ...projects];

//   // Loop infinito real: cuando el scroll llega al final, lo reseteamos al inicio
//   useEffect(() => {
//     const carousel = carouselRef.current;
//     if (!carousel) return;

//     const handleScroll = () => {
//       const maxScroll = carousel.scrollWidth / 3; // 1/3 porque triplicamos
//       if (carousel.scrollLeft >= maxScroll * 2) {
//         carousel.scrollLeft = maxScroll;
//       } else if (carousel.scrollLeft <= 0) {
//         carousel.scrollLeft = maxScroll;
//       }
//     };

//     carousel.addEventListener('scroll', handleScroll);
//     // Al montar, posicionamos en el centro
//     carousel.scrollLeft = carousel.scrollWidth / 3;

//     return () => {
//       carousel.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

//   // Drag con mouse
//   const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
//     setIsDragging(true);
//     setStartX(e.pageX - (carouselRef.current?.offsetLeft || 0));
//     setScrollLeft(carouselRef.current?.scrollLeft || 0);
//   };

//   const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
//     if (!isDragging || !carouselRef.current) return;
//     const x = e.pageX - carouselRef.current.offsetLeft;
//     const walk = (x - startX) * 1.5; // velocidad
//     carouselRef.current.scrollLeft = scrollLeft - walk;
//   };

//   const handleMouseUp = () => setIsDragging(false);
//   const handleMouseLeave = () => setIsDragging(false);

//   return (
//     <section id="proyectos" className="py-24 bg-gray-950">
//       <style>
//         {`
//           .no-select { user-select: none; }
//         `}
//       </style>
//       <div ref={proyectosRef} className={`text-center transition-all duration-1000 transform ${proyectosInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
//         <h2 className="text-3xl sm:text-4xl font-bold text-white mb-12">Nuestros Proyectos</h2>
//         <div className="relative w-full overflow-hidden py-4">
//           <div
//             ref={carouselRef}
//             className={`flex gap-4 overflow-x-scroll no-scrollbar cursor-grab no-select animate-none`}
//             style={{ scrollBehavior: 'auto' }}
//             onMouseDown={handleMouseDown}
//             onMouseMove={handleMouseMove}
//             onMouseUp={handleMouseUp}
//             onMouseLeave={handleMouseLeave}
//           >
//             {allProjects.map((project, index) => (
//               <a
//                 key={index}
//                 href={project.url}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="flex-shrink-0 w-80 p-4"
//                 draggable={false}
//               >
//                 <div className="bg-gray-900 border border-gray-800 rounded-xl p-4 overflow-hidden h-full transition-all duration-300 hover:scale-105 hover:border-red-600">
//                   <img src={project.img} alt={`Imagen del proyecto: ${project.title}`} className="w-full h-48 object-cover rounded-md mb-4" draggable={false} />
//                   <div className="text-left">
//                     <h3 className="text-xl font-bold text-white">{project.title}</h3>
//                     <p className="text-gray-400 mt-2">{project.description}</p>
//                   </div>
//                 </div>
//               </a>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }