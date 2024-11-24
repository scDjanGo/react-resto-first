import React from 'react'
import './style.scss'


function TwoPhoto() {


    return (
        <div className='twoPhoto'>
            <div className='photo'>
                <div>
                    <img src="/twoPhoto/onePhoto.png" alt="basic menu" />
                </div>
                <span>Основное меню<p className='line'></p></span>
            </div>

            <div className='photo'>
                <div>
                    <img src="/twoPhoto/twoPhoto.png" alt="basic menu" />
                </div>
                <span>Барная карта<p className='line'></p></span>
            </div>
        </div>
    )
}


export default TwoPhoto