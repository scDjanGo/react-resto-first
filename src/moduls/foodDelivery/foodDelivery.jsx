import './style.scss'


function FoodDelivery({openDelivery, setOpenDelivery}) {



    return (
        <div className={`foodDelivery-container ${openDelivery ? 'active' : ''}`}>
            <button className='exit' onClick={(e) => {setOpenDelivery(prev => !prev)}}>x</button>
            <span>доставка</span><p className='line'></p>
            <h2>
                Служба доставки
            </h2>
            <div>
                <p>
                    Phasellus diam, ultrices lobortis integer et. Diam, purus vel sagittis,
                    non, a. In risus, venenatis enim vitae mauris aliquet orci. Consectetur
                    nibh interdum nullam ut lobortis eu etiam sem. Et in vitae
                    pellentesque non, lectus orci natoque faucibus suspendisse. Semper
                    aliquam id et ultrices velit donec lacus. In odio sit nibh volutpat cras
                    placerat sit feugiat dignissim. Rutrum et suspendisse tortor, lobortis
                    eleifend in fringilla. Egestas cursus imperdiet cursus dui, nulla id
                    massa. Hendrerit nam enim semper porttitor imperdiet diam semper.
                    Nulla sit etiam cras morbi enim elementum euismod sapien.
                </p>
            </div>

            <form onSubmit={(e) => {}}>
                <input type="adress" placeholder='Введите адресс' required/>
                <input type="tel" placeholder='Ваш номер для связи' required/>
                <input type="text"  placeholder='Комментарии'/>

                <button>Отправить</button>
            </form>

            <div className="buttons">
                <button>Подробнее</button><button>Условия доставки</button>
            </div>
        </div>
    )
}

export default FoodDelivery