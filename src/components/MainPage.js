import React, { useEffect, useState } from 'react'
import { Card, getMunicipalityData } from './components'

const MainPage = ({ setPermissionPage, setPermissionIndex }) => {
    const [municipalityData, setMunicipalityData] = useState(null)

    useEffect(() => {
        const fetchData = async () => {
            const data = await getMunicipalityData();
            setMunicipalityData(data[0])
        }
        fetchData();
    }, [])

    function handleClick(key) {
        setPermissionIndex(key)
        setPermissionPage(false)
    }
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
                {municipalityData?.municipality?.permits?.map(({ title, description }, key) => {
                    return (
                        <div>

                        <Card
                            title={title}
                            description={description}
                            index={key}
                            onClick={() => handleClick(key)}
                            key={key}
                            />
                            </div>
                    )
                    key = key + 1;
                }
                )}
            </section>
        </div>
    )
}

export default MainPage