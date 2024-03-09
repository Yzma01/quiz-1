import React from 'react'

const CardMV = ({ title, description }) => {
    return (
        <div className='permisision-card'>
        <div class="card" style={{ width: 18 + 'rem' }}>
            <div class="card-body">
                <h5 class="card-title">{title}</h5>
                <p class="card-text">
                    {description}
                </p>
            </div>
        </div>
    </div>
    )
}

export default CardMV