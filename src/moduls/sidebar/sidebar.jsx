import './style.scss'

function Sidebar({openMenu, setOpenMenu}) {

    return (
        <div className="sidebar-outer">
            <div className='sidebar-container'>
                <div className='logos-menu'>
                    <img src="/Sidebar/Logo.png" alt="" />
                    <img className='sidebar-menu-button' src="/Sidebar/menuBar.png" alt="Back" onClick={(e) => {setOpenMenu(prev => !prev)}}/>
                </div>
                <div className='sidebar-social'>
                    <img className='social' src="/Sidebar/youtubeLogo.png" alt="" />
                    <img className='social' src="/Sidebar/vklogo.png" alt="" />
                    <img className='social' src="/Sidebar/telegrammLogo.png" alt="" />
                </div>
            </div>
        </div>
    )
}


export default Sidebar