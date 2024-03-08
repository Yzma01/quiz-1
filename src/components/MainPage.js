import React from 'react'
import { Card, permissions } from './components'
const MainPage = ({setPermissionPage}) => {
    return (
        <div>
            <section className='info'>
                <h4>
                    ¡Bienvenidos a la Municipalidad de San Francisco!
                </h4>
                <p>
                    Somos el corazón de la comunidad, comprometidos con el progreso y el bienestar. Trabajamos para brindar servicios eficientes, promover la participación ciudadana y construir un futuro próspero. ¡Únete a nosotros en la construcción de una San Francisco mejor para todos!</p>
            </section>

            <section className='permissions' id='permissions'>
                {permissions.map(({ title, description, key }) => (
                    <Card title={title} description={description} key={key} onClick={setPermissionPage}/>
                ))}
            </section>
        </div>
    )
}

export default MainPage