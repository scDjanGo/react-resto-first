import MainHeader from "./moduls/mainHeader/mainHeader"
import MainText from "./moduls/mainText/mainText"
import TwoPhoto from "./moduls/twoPhoto/twoPhoto"
import Delivery from "./moduls/delivery/delivery"
import Contact from './moduls/contact/contact'
import Footer from './moduls/footer/footer'

import Media from './moduls/media/media'

import Booking from './moduls/booking/booking'

import Menu from './moduls/menu/menu'
import Basket from './moduls/basket/basket'

import FoodDelivery from './moduls/foodDelivery/foodDelivery'
import { useState } from "react"

function App() {
  const [modalBooking, setModalBooking] = useState(false)
  const [openMenu, setOpenMenu] = useState(false)
  const [basketActive, setBasketActive] = useState(false)
  const [openDelivery, setOpenDelivery] = useState(false)

  const [basketContent, setBasketContent] = useState([])

  return (
    <div>
      <Booking open={modalBooking} setClose={setModalBooking} />

      <div className={`container-parent ${openMenu ? 'openMenu' : ''}`} >
        <MainHeader open={modalBooking} setClose={setModalBooking}
          openMenu={openMenu} setOpenMenu={setOpenMenu}
          basketActive={basketActive} setBasketActive={setBasketActive}
          openDelivery={openDelivery} setOpenDelivery={setOpenDelivery}
        />
        <MainText />
        <TwoPhoto />
        <Delivery />
        <Contact open={modalBooking} setClose={setModalBooking} />
        <Footer />
      </div>

      <div className={`container-parent__media ${openMenu ? 'openMenu' : ''}`}>
        <Media CloseModal={modalBooking} setCloseModal={setModalBooking}
          openMenu={openMenu} setOpenMenu={setOpenMenu}
          basketActive={basketActive} setBasketActive={setBasketActive}
          openDelivery={openDelivery} setOpenDelivery={setOpenDelivery}
        />
      </div>

      <div className="container-menu">
        <Menu openMenu={openMenu} setOpenMenu={setOpenMenu}
          basketActive={basketActive} setBasketActive={setBasketActive}
          basketContent={basketContent} setBasketContent={setBasketContent}
        />
      </div>

      <div className="container-basket">
        <Basket basketActive={basketActive} setBasketActive={setBasketActive}
          basketContent={basketContent} setBasketContent={setBasketContent} />
      </div>

      <div className="container-foodDelivey">
        <FoodDelivery openDelivery={openDelivery} setOpenDelivery={setOpenDelivery}/>
      </div>

    </div>
  )
}

export default App
