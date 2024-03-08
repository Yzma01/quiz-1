import React from 'react'
import FormPermissionRequest from './FormPermissionRequest'

const PermissionPage = ({permissionType, setPermissionPage}) => {
  return (
    <div>
      <FormPermissionRequest permissionType={permissionType} setPermissionPage={setPermissionPage}/>
    </div>
  )
}

export default PermissionPage