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
            description: "Autorización para llevar a cabo proyectos de construcción, garantizando el cumplimiento de normativas y estándares locales."
          },
          {
            title: "Permiso de Eventos Públicos",
            description: "Permite la realización de eventos públicos, asegurando la coordinación adecuada para la seguridad y comodidad de los asistentes."
          },
          {
            title: "Permiso de Comercio Ambulante",
            description: "Autorización para la operación de comercios ambulantes, contribuyendo al dinamismo económico y controlando la ocupación del espacio público."
          },
          {
            title: "Permiso de Uso de Suelo",
            description: "Regula la asignación y utilización de zonas específicas de acuerdo con el plan de desarrollo urbano, asegurando un crecimiento ordenado y sostenible."
          },
          {
            title: "Permiso de Estacionamiento Residencial",
            description: "Facilita el estacionamiento exclusivo para residentes en áreas designadas, mejorando la disponibilidad de espacios en zonas residenciales."
          },
          {
            title: "Permiso de Recolección de Residuos Especiales",
            description: "Autorización para la recolección y disposición adecuada de residuos especiales, contribuyendo a la preservación del medio ambiente y la salud pública."
          }
        ]
      }
    }

  ]
  return mupInfo;
}

export default getMunicipalityData;