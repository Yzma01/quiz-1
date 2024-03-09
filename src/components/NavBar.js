import React from 'react'

const NavBar = ({ setShowPermissionPage }) => {
    return (
        <div>
            <header className='header'>
                <a><h2 className='title'>Munp San Francisco</h2></a>
                <ul class="nav justify-content-end">
                    <li class="nav-item" >
                        <a
                            class="nav-link active"
                            aria-current="page"
                            href="#"
                            onClick={setShowPermissionPage}
                        >
                            Home
                        </a>
                    </li>
                    <li class="nav-item">
                        <a
                            class="nav-link"
                            href="#permissions"
                            onClick={setShowPermissionPage}
                        >
                            Permissions
                        </a>
                    </li>
                    <li class="nav-item">
                        <a
                            class="nav-link"
                            href="#about"
                            onClick={setShowPermissionPage}
                        >
                            About
                        </a>
                    </li>
                    <li class="nav-item">
                        <a
                            class="nav-link"
                            href='#contact'
                            onClick={setShowPermissionPage}
                        >
                            Contact
                        </a>
                    </li>
                </ul>
            </header>
        </div>
    )
}

export default NavBar