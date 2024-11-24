import './style.scss'
import { useState } from 'react'


function Basket({ basketActive, setBasketActive, basketContent, setBasketContent }) {
    let price = 0
    let discount = 0
    let total = 0

    return (
        <div className={`basket-container ${basketActive ? 'active' : ''}`} onClick={(e) => setBasketActive(prev => !prev)}>
            <div className='basket-content' onClick={(e) => e.stopPropagation()}>
                <header><p>Ваша корзина</p> <button onClick={(e) => setBasketActive(prev => !prev)}>x</button></header>
                <main>
                    {basketContent.length > 0 ? (
                        basketContent.map((elem, index) => (
                            <div key={index} className='cart'>
                                <img src={elem.img} alt={elem.title} />
                                <div className='none'>{discount += elem.price / 20}</div>
                                <p>{elem.title}</p>
                                <div>
                                    <p>{price +=elem.price} ₽</p>
                                    <button onClick={() => setBasketContent(prev => prev.filter((item, i) => i !== index))}>Убрать</button>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className='emptyContent'>
                            <p>Ваша корзина пуста</p>
                        </div>
                    )}
                </main>
                <footer>
                    <div className='total'><p>Общая сумма</p><div className='dashshed'></div><p>{price} ₽</p></div>
                    <div className='discount'><p>Скидка - 5%</p><div className='dashshed'></div><p>{discount} ₽</p></div>
                </footer>
                <section>
                    <button className='buttonTotal'>К оплате: {total = price - discount} ₽</button>
                </section>
            </div>
        </div>
    )
}


export default Basket