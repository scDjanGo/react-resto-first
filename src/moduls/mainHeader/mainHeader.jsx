import './styleHeader.scss'

function MainHeader({open, setClose, openMenu, setOpenMenu, basketActive, setBasketActive, openDelivery, setOpenDelivery}) {

    return (
        <div className='mainHeader'>
            <header>
                <ul>
                    <li onClick={(e) => {setOpenMenu(prev => !prev)}}>Меню</li>
                    <li onClick={(e) => {setOpenDelivery(prev => !prev)}}>Доставка</li>
                    <li onClick={(e) => setBasketActive(prev => !prev)}>Оплата</li>
                    <li onClick={(e) => {setClose(prev => !prev)}}>Бронь столика</li>
                </ul>
            </header>

            <p>Видовой ресторан Food Exxe Relo <br/> на Крестовском острове</p>
        </div>
    )
}

export default MainHeader