import React, { useEffect, useState } from 'react'
import { Card, getMunicipalityData } from './components'

const MainPage = ({ setPermissionPage }) => {
    const [municipalityData, setMunicipalityData] = useState(null)

    useEffect(() => {
        const fetchData = async () => {
            const data = await getMunicipalityData();
            setMunicipalityData(data[0])
        }
        fetchData();
    }, [])
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
                {municipalityData ? (
                    municipalityData.municipality.permits ? (
                        municipalityData.municipality.permits.map(({ title, description }, index) => (
                            <Card title={title} description={description} key={index} onClick={setPermissionPage} />
                        ))
                    ) : (
                        <p>No hay permisos disponibles.</p>
                    )
                ) : (
                    <p>Cargando permisos...</p>
                )}
            </section>
        </div>
    )
}

export default MainPage