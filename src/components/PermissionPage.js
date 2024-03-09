import React from 'react'
import { FormPermissionRequest } from './components'

const PermissionPage = ({ permissionType, setPermissionPage, key }) => {
  return (
    <div>
      <section>
      </section>
      <FormPermissionRequest permissionType={permissionType} setPermissionPage={setPermissionPage} />
    </div>
  )
}

export default PermissionPage