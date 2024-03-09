const getMunicipalityData = async () => {
  const mupInfo = [
    {
      municipality: {
        name: "Municipalidad de San Francisco",
        about: {
          description: "Somos la entidad gubernamental local comprometida con el progreso y bienestar de la comunidad de San Francisco. Nos destacamos por nuestra eficiencia, transparencia y el fomento de la participación ciudadana.",
          mission: "Trabajamos incansablemente para proporcionar servicios públicos de calidad, promover el desarrollo sostenible, mantener la infraestructura local y crear un ambiente inclusivo y seguro para todos los residentes.",
          vision: "Aspiramos a ser una municipalidad líder, reconocida por su innovación, gestión efectiva y mejora continua en la calidad de vida para los habitantes de San Francisco. Buscamos construir una ciudad modelo en términos de bienestar y desarrollo sostenible.",
          values: [
            "Compromiso con la comunidad",
            "Transparencia y rendición de cuentas",
            "Innovación y mejora continua",
            "Inclusión y diversidad",
            "Respeto por el medio ambiente",
            "Trabajo en equipo y colaboración"
          ],
          contact: {
            address: "Calle Principal #123, San Francisco",
            phone: "+123 456 7890",
            email: "info@municipalidadsf.gob"
          }
        },
        permits: [
          {
            title: "Permiso de Construcción",
            description: "Autorización para llevar a cabo proyectos de construcción, garantizando el cumplimiento de normativas y estándares locales.",
            detailDescription: "Este permiso es esencial para la ejecución de proyectos de construcción. Incluye la revisión de planos arquitectónicos, estudios de impacto ambiental y supervisión continua durante el proceso constructivo para garantizar la integridad estructural y la seguridad de los futuros ocupantes."
          },
          {
            title: "Permiso de Eventos Públicos",
            description: "Permite la realización de eventos públicos, asegurando la coordinación adecuada para la seguridad y comodidad de los asistentes.",
            detailDescription: "Este permiso permite la organización de eventos públicos e incluye la evaluación de medidas de seguridad, gestión de multitudes y la coordinación con servicios de emergencia. Además, implica la planificación detallada de rutas de evacuación, puntos de atención médica de emergencia y protocolos de seguridad específicos para cada tipo de evento, desde conciertos masivos hasta ferias locales."
          },
          {
            title: "Permiso de Comercio Ambulante",
            description: "Autorización para la operación de comercios ambulantes, contribuyendo al dinamismo económico y controlando la ocupación del espacio público.",
            detailDescription: "Este permiso es crucial para la operación de comercios ambulantes. Incluye la definición de áreas designadas para el comercio ambulante, regulación de horarios y la implementación de medidas para garantizar la higiene y seguridad de los productos ofrecidos."
          },
          {
            title: "Permiso de Estacionamiento Residencial",
            description: "Facilita el estacionamiento exclusivo para residentes en áreas designadas, mejorando la disponibilidad de espacios en zonas residenciales.",
            detailDescription: "Este permiso facilita el estacionamiento exclusivo para residentes. Incluye la asignación de espacios específicos, sistemas de control de acceso y la implementación de medidas para evitar el estacionamiento no autorizado."
          },
          {
            title: "Permiso de Uso de Suelo",
            description: "Regula la asignación y utilización de zonas específicas de acuerdo con el plan de desarrollo urbano, asegurando un crecimiento ordenado y sostenible.",
            detailDescription: "Este permiso regula la asignación y utilización de zonas específicas de acuerdo con el plan de desarrollo urbano. Involucra la revisión detallada de los proyectos en relación con el plan de desarrollo, considerando factores como la densidad poblacional, infraestructuras disponibles y la preservación de áreas verdes."
          },
          {
            title: "Permiso de Recolección de Residuos Especiales",
            description: "Autorización para la recolección y disposición adecuada de residuos especiales, contribuyendo a la preservación del medio ambiente y la salud pública.",
            detailDescription: "Este permiso es crucial para la recolección y disposición adecuada de residuos especiales. Incluye protocolos específicos para la manipulación, transporte y disposición final de residuos peligrosos, electrónicos u otros tipos especiales, asegurando el cumplimiento de normativas ambientales."
          }
        ]
      }
    }

  ]
  return mupInfo;
}

export default getMunicipalityData;