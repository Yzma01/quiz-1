import React, { useState } from 'react'
import { MainPage, NavBar, PermissionPage } from './components/components';

const App = () => {
  const [showPermissionPage, setShowPermissionPage] = useState(true);
  return (
    <div className='main'>
      <NavBar setShowPermissionPage={() => setShowPermissionPage(true)}/>
      <section>
        {showPermissionPage && <MainPage setPermissionPage={() => setShowPermissionPage(false)}/>}
        {!showPermissionPage && <PermissionPage />}
      </section>
      <footer>
        <section id='about'></section>
        <section id='contact'></section>
      </footer>
    </div>
  )
}

export default App