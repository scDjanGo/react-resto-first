
import React, { useState } from 'react'
import './style.scss'
import axios from 'axios'

function Booking({ open, setClose }) {
    const [formData, setFormData] = useState({
        name: '',
        telephone: '',
        quest: '',
        time: ''
    })

    const [errors, setErrors] = useState('')

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if (!formData.name || !formData.telephone || !formData.quest || !formData.time) {
            setErrors("Все поля должны быть заполнены.")
            return
        }

        setErrors('')
        console.log(formData);
        axios.post('https://665d6d5de88051d6040686d7.mockapi.io/booking', formData)
            .then(response => {
                console.log(response);
                alert(`${formData.name}, ваш запрос принят. \nСкоро наш админ позвонит вам`)
                document.querySelector('.booking-container').classList.remove('active')
            }).catch(error => {
                alert('Ошибка с сервером, повторите попытку позже', error)
            })

    }


    return (
        <div className={`booking-container ${open ? 'active' : ''}`} onClick={(e) => setClose(prev => !prev)}>
            <div className='main' onClick={(e) => { e.stopPropagation() }}>
                <div className='x'>
                    <img onClick={(e) => { setClose(prev => !prev)}} src="/booking/x.png" alt="#" />
                </div>
                <div className='booking-main'>
                    <div className="logo">
                        <img src="/booking/Logo.png" alt="#" />
                        <p>Забронировать столик</p>
                    </div>
                    <form className='booking-form' onSubmit={handleSubmit}>
                        <label htmlFor="name">
                            <input
                                name='name'
                                type="text"
                                placeholder='Имя'
                                value={formData.name}
                                onChange={handleChange}
                                required=""
                            />
                        </label>
                        <label htmlFor="telephone">
                            <input
                                name='telephone'
                                type="tel"
                                placeholder='Телефон'
                                pattern='\+996\s?(\d{3})\s?\d{6}\'
                                title='Введите номер телефона в формате +996 XXX XXXXXX'
                                value={formData.telephone}
                                onChange={handleChange}
                                required=""
                            />
                        </label>
                        <div>
                            <label htmlFor="quest">
                                <input
                                    name='quest'
                                    type="number"
                                    placeholder='Гостей'
                                    min={0}
                                    max={8}
                                    value={formData.quest}
                                    onChange={handleChange}
                                    required=""
                                />
                            </label>
                            <label htmlFor="time">
                                <input
                                    name='time'
                                    type="time"
                                    value={formData.time}
                                    onChange={handleChange}
                                    required=""
                                />
                            </label>
                        </div>
                        {errors && <p className="error-message">{errors}</p>}
                        <button className='form-button' type="submit">Забронировать</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Booking
