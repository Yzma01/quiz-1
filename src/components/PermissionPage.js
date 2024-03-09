import React from 'react'
import { FormPermissionRequest, getMunicipalityData } from './components'
import { useState, useEffect } from 'react'

const PermissionPage = ({ permissionType, setPermissionPage, permissionIndex }) => {
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
      <section>
        <h1>
          {permissionIndex}
          {municipalityData?.municipality?.permits[permissionIndex].title}
        </h1>

      </section>
      <FormPermissionRequest permissionType={permissionType} setPermissionPage={setPermissionPage} />
    </div>
  )
}

export default PermissionPage