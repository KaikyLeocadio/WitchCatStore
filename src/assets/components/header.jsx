import Styles from './header.module.css'
import Logo from '../LACRE 3,5X10CM witch cat 3.png'
import Search from '../search.png'

function Header(){
    return(
        <header className={Styles.header}>
            <img src={Logo} alt="Logo" />

        <nav className={Styles.navtop}>
        <input type="text" placeholder="Busque aqui:"/>

        <button>
            <img src={Search} alt="Lupa" />
        </button>
        </nav>

        <ul>
            <li>
                <a href="">Conheça nossos produtos!</a>
                <hr />
                <a href="https://wa.me/5511985471100" target="_blank">Converse conosco</a>
            </li>
        </ul>
        </header>

    )
}

export default Header