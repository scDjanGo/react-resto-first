import './style.scss'


function Contact({close, setClose}) {

    return (
        <div className='contact-container'>
            <div className='zag'>
                <div>
                    <span>контакты</span>
                    <p className='line'></p>
                </div>
            </div>

            <div className='main'>
                <div className='left'>
                    <div>
                        <div>
                            <span>2 <span>мин</span></span>
                            <p>из центра<br />Санкт-Петербурга</p>
                        </div>
                        <div>
                            <span>12 <span>мин</span></span>
                            <p>из города <br />Зеленогорскиз центра</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <span>42 <span>мин</span></span>
                            <p>из аэропорта <br />Пулково</p>
                        </div>
                        <div>
                            <span>52 <span>мин</span></span>
                            <p>из города <br />Павловск</p>
                        </div>
                    </div>
                </div>

                <div className="right">
                    <div className='right-inner'>
                        <div><img src="/Contact/maps.png" alt="" /> <span>Санкт-Петербург,Северная дорога, 11 </span></div>
                        <div><img src="/Contact/phone.png" alt="" /> <span>+7 (921) 777-77-77</span></div>
                        <h2>Время работы</h2>
                        <p>Вск-Чт <span>с 12:00 до 23:00</span></p>
                        <p>Пт-Сб <span>с 12:00 до 03:00</span></p>
                        <div className='buttons'>
                            <button onClick={(e) => setClose(prev => !prev)}>Бронь столика</button>
                            <button>Задать вопрос</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Contact