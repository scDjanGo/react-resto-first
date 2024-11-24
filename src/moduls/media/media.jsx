import './style.scss'

function Media({closeModal, setCloseModal, openMenu, setOpenMenu, basketActive, setBasketActive, openDelivery, setOpenDelivery}) {


    return (
        <div className='media-container'>
            <div className='logo'>
                <img src="/media/logo.png" alt="#" />
                <img src="/media/x.png" alt="#" />
            </div>

                <ul>
                    <li onClick={(e) => setOpenMenu(prev =>!prev)}>Меню</li>
                    <li onClick={(e) => setOpenDelivery(prev => !prev)}>Доставка</li>
                    <li onClick={(e) => setBasketActive(prev => !prev)}>Оплата</li>
                    <li onClick={(e) => {setCloseModal(prev => !prev)}}>Бронь столика</li>
                </ul>

            <div className='social'>
                <img src="/media/youtube.png" alt="#" />
                <img src="/media/vk.png" alt="#" />
                <img src="/media/telegramm.png" alt="#" />
            </div>
        </div>
    )
}

export default Media