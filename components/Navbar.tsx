import Link from "next/link"
import style from "../styles/Navbar.module.scss"

const Navbar: React.FC = () => {
    return (
        <nav className={`${style.nav} container`}>
            <img src="/bl.svg" alt="Logo"/>
            <a className={style.menu} role="button">Menu</a>
            <LinkList />
        </nav>
    )
}

export default Navbar

const LinkList: React.FC = () => {
    return (
        <ul className={style.navLinks}>
            <li><Link href="/"><a>Home</a></Link></li>
            <li><Link href="/"><a>Projects</a></Link></li>
            <li><Link href="/"><a>About</a></Link></li>
            <li><Link href="/"><a>Contact</a></Link></li>
        </ul>
    )
}