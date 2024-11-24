import './style.scss'
import { useState } from 'react'

import Sidebar from '../sidebar/sidebar'


function Menu({ openMenu, setOpenMenu, basketActive, setBasketActive, basketContent, setBasketContent}) {

    const [closeMenu, setCloseMenu] = useState(false)

    const [comments, setComments] = useState([])
    const [inputValue, setInputValue] = useState('')


    const handleInputChangr = (event) => {
        setInputValue(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        if(inputValue.trim() !== '') {
            setComments([...comments, inputValue])
            setInputValue('')
        }
    }
    
    let cartArr = [
        {
            title: 'Яичница-глазунья из трех яиц',
            price: 250,
            img: '/itemCart/friedEggs.png',
            category: [1,]
        },
        {
            title: 'Омлет из трёх яиц',
            price: 250,
            img: '/itemCart/omelette.png',
            category: [1]
        },
        {
            title: 'Домашние сырники',
            price: 490,
            img: '/itemCart/syrniki.png',
            category: [1]
        },
        {
            title: 'Блины',
            price: 190,
            img: '/itemCart/блины.png',
            category: [1]
        },
        {
            title: 'Каша c ягодами и кедровыми орехами',
            price: 450,
            img: '/itemCart/кашаСЯгодами.png',
            category: [1]
        },
        {
            title: 'Скрэмбл',
            price: 290,
            img: '/itemCart/Скрембл.png',
            category: [1, 9]
        },
        {
            title: 'Яйцо Бенедикт с лососем',
            price: 850,
            img: '/itemCart/Яицослососем.png',
            category: [1, 9]
        },
        {
            title: 'Яйцо Бенедикт с беконом',
            price: 650,
            img: '/itemCart/ЯицаБенедикт.png',
            category: [1, 8]
        },
        {
            title: 'Гречневая каша с авокадо, яйцом пашот и пармезаном',
            price: 490,
            img: '/itemCart/греневаякаша.png',
            category: [1]
        },
        {
            title: 'Кобб – салат с лососем',
            price: 890,
            img: '/itemCart/КоббСалатСКреветкавми.png',
            category: [9, 5]
        },
    ]

    const catArr = [
        {
            id: 1,
            title: 'Завтраки'
        },
        {
            id: 2,
            title: 'Холодные закуски'
        },
        {
            id: 3,
            title: 'Брускетты'
        },
        {
            id: 4,
            title: 'К вину'
        },
        {
            id: 5,
            title: 'Салаты'
        },
        {
            id: 6,
            title: 'Супы'
        },
        {
            id: 7,
            title: 'Паста и ризотто'
        },
        {
            id: 8,
            title: 'Мясо'
        },
        {
            id: 9,
            title: 'Рыба'
        },
        {
            id: 10,
            title: 'Мангал'
        },
        {
            id: 11,
            title: 'Гарниры'
        },
    ]

    const [filteredFoods, setFilteredFoods] = useState(cartArr)

    const sortFoods = (e) => {
        if (e.target.innerText === 'Все влюдо') {
            setFilteredFoods(cartArr)
        } else {
            const filtered = cartArr.filter(item => item.category.some(catId => catArr.find(category => category.id === catId && category.title === e.target.innerText)))
            setFilteredFoods(filtered)
        }
    }

    return (
        <div className={`menu-container ${openMenu ? '' : 'close'}`}>
            <div className='sidebar'>
                <Sidebar close={closeMenu} setOpenMenu={setOpenMenu} />
            </div>

            <div className='menu-content'>
                <div className='menu-header'>
                    <span className='personal'>Личный кабинет</span>
                    <img src="/menu-header/person.png" alt="Person" />
                    <img src="/menu-header/basket.png" alt="Basket" onClick={(e) => setBasketActive(prev => !prev)}/>{basketContent.length > 0 ? (<span className='countItems'></span>) : (<span className='countItems empty'></span>)}
                </div>

                <nav className='navBar' onClick={sortFoods}>
                    <span>Все влюдо</span>
                    <span>Завтраки</span>
                    <span>Холодные закуски</span>
                    <span>Брускетты</span>
                    <span>К вину</span>
                    <span>Салаты</span>
                    <span>Супы</span>
                    <span>Паста и ризотто</span>
                    <span>Мясо</span>
                    <span>Рыба</span>
                    <span>Мангал</span>
                    <span>Гарниры</span>
                </nav>

                <div className='menu-carts'>
                    {filteredFoods.length > 0 ? (filteredFoods.map((cart, index) => {
                        return (
                            <div key={index} className='cart'>
                                <img src={cart.img} alt="foto" />
                                <div className='cart-info'>
                                    <p>{cart.title}</p>
                                    <div>
                                        <span>{cart.price} ₽</span> <button onClick={(e) => setBasketContent([...basketContent, cart])}>В корзину</button>
                                    </div>
                                </div>
                            </div>
                        )
                    })) : (<div className='empty-container'>
                        <div>
                            <p>Скоро мы добавим блюда этой категории. <br />Можете оставить свое желание, возможно оно станет нашим новым блюдом!</p>
                            <form onSubmit={handleSubmit}>
                                <input value={inputValue} onChange={handleInputChangr} type="text" placeholder='Важе желание' required/>
                                <button>Отправить</button>
                            </form>
                        </div>
                        <p className='youserComment'>{inputValue ? inputValue : 'Ваш комментарии'}</p>
                    </div>)}
                </div>
            </div>
        </div>
    )
}

export default Menu