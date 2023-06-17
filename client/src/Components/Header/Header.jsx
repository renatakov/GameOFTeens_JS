import logo from "../../images/logo.svg"
import { NavLink } from 'react-router-dom'
import h from './Header.module.css'

const Header = () => {
    return (
        <header>
        <div className={h.headerNav}>
            <div class={h.logo}>
                <img className={h.logoImg} src={logo} alt=""/>
                <h2 className={h.logoText}>GoITeens Lab</h2>
            </div>
            <div className={h.overlay}>
                <input type="checkbox" name="" id="" />
                <span className={h.span}></span>
                <div className={h.navigation} >
                    <button className={h.buttonNav}>
                        <a className={h.textMenuNav} href="#">Стартапи</a>
                    </button>
                    <button className={h.buttonNav}>
                        <a className={h.textMenuNav} href="#">Події</a>
                    </button>
                    <button className={h.buttonNav}>
                        <a className={h.textMenuNav} href="#">Контакти</a>
                    </button>
                </div>
            </div>
            <div className={h.signUp}>
                <button className={h.buttonNav}><NavLink to="/signup">Реєстрація</NavLink></button>
                <button className={h.buttonNav}><a className={h.textMenuNav} href="login.html">Увійти</a></button>
            </div>

        </div>
    </header>
    )
}

export default Header