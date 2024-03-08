import React from 'react'
import Card from './components/Card'
import FormPermissionRequest from './components/FormPermissionRequest'
import PermissionPage from './components/PermissionPage'

const App = () => {
  const permissions = [
    {
      title: "Permiso de Construcción",
      description: "Autorización para llevar a cabo proyectos de construcción, garantizando el cumplimiento de normativas y estándares locales.",
      link: './components/PermissionPage'
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

  function handleClick(){
    return(
      <PermissionPage />
    )
  }
  return (

    <div className='main'>
      <header className='header'>
        <a><h2 className='title'>Munp San Francisco</h2></a>
        <ul class="nav justify-content-end">
          <li class="nav-item">
            <a
              class="nav-link active"
              aria-current="page"
              href="#">
              Home
            </a>
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              href="#"
            >
              Permissions
            </a>
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              href="#"
            >
              About
            </a>
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              href='#'
            >
              Contact
            </a>
          </li>
        </ul>
      </header>

      <section>
        <section className='info'>
          <h4>
            ¡Bienvenidos a la Municipalidad de San Francisco!
          </h4>
          <p>
            Somos el corazón de la comunidad, comprometidos con el progreso y el bienestar. Trabajamos para brindar servicios eficientes, promover la participación ciudadana y construir un futuro próspero. ¡Únete a nosotros en la construcción de una San Francisco mejor para todos!</p>
        </section>

        <section className='permissions'>
          {permissions.map(({title,description, key}) => (
            <Card title={title} description={description} key={key} onClick={handleClick}/>
          ))}
        </section>
      </section>
      <FormPermissionRequest permissionType={'hola'}/>
      <footer></footer>
    </div>
  )
}

export default App