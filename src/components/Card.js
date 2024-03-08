import React from 'react'
import '../index.css'

const Card = ({ title, description, onClick, key }) => {
    return (
        <div className='permisision-card'>
            <div class="card" style={{ width: 18 + 'rem' }}>
                <div class="card-body">
                    <h5 class="card-title">{title}</h5>
                    <p class="card-text">
                        {description.lengt < 100 ? description : description.substr(0, 100) + '...'}
                    </p>
                    <div onClick={onClick} class="btn btn-primary">Request</div>
                </div>
            </div>
        </div>
    )
}

export default Card