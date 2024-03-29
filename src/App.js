import React, { useState, useEffect } from 'react'
import { CardMV, MainPage, NavBar, PermissionPage, getMunicipalityData } from './components/components';

const App = () => {
  const [showPermissionPage, setShowPermissionPage] = useState(true);
  const [municipalityData, setMunicipalityData] = useState(null);
  const [permissionIndex, setPermissionIndex] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getMunicipalityData();
      setMunicipalityData(data[0])
    }
    fetchData();
  }, [])

  return (
    <div className='main'>
      <NavBar setShowPermissionPage={() => setShowPermissionPage(true)} />
      <section>
        {showPermissionPage && <MainPage
          setPermissionPage={setShowPermissionPage}
          setPermissionIndex={setPermissionIndex}
        />}
        {!showPermissionPage && <PermissionPage
          permissionIndex={permissionIndex}
          setPermissionPage={() => setShowPermissionPage(true)}
        />}
      </section>
      <footer>
        <section className='about' id='about'>
          <h2>{municipalityData?.municipality?.name}</h2>
          <p>{municipalityData?.municipality?.about?.description}</p>
          <section className='mision-vision'>
            <CardMV title={'Mision'} description={municipalityData?.municipality?.about?.mission} />
            <CardMV title={'Vision'} description={municipalityData?.municipality?.about?.vision} />
          </section>
          <h5>Valores</h5>
          <section className='values'>
            {municipalityData?.municipality?.about?.values?.map((value, index) => (
              <p key={index}>{value}</p>
            ))}
          </section>
        </section>

        <section className='contact' id='contact'>
          <p>{municipalityData?.municipality?.about?.contact?.address}</p>
          <p>{municipalityData?.municipality?.about?.contact?.phone}</p>
          <p>{municipalityData?.municipality?.about?.contact?.email}</p>
        </section>
      </footer>
    </div>
  )
}

export default App