import Link from "next/link";
import styles from '../../styles/Header.module.css'
import {useState} from 'react';

export default function Header() {
    const [openMenu, setOpenMenu] = useState(false)
    return (
        <header className={styles.header}>
            <button className={styles.openMenu} onClick={() => setOpenMenu(!openMenu)}><i className='bx bx-menu'></i></button>
            <nav className={!openMenu? styles.navActvie : ""}>
                <Link href="https://rvegaming.vercel.app"><a><img src="./2rveg.svg" alt="" /></a></Link>
                <Link href="/"><a>Inicio</a></Link>
                <Link href=""><a>Premium</a></Link>
                <Link href="/tournament"><a>Torneos</a></Link>
                <Link href=""><a>Blog</a></Link>
            </nav>
            <Link href="https://rvegaming.vercel.app"><a className={styles.logo}><img src="./2rveg.svg" alt="" /></a></Link>
            <div>
                <Link href="/register"><a className={styles.iconBtn}><i className='bx bxs-user-circle' ></i></a></Link>
                <Link href="/register"><a className={styles.btn}>Registrarse</a></Link>
                <Link href="/login"><a className={styles.btnNone}>Iniciar Sesion</a></Link>
            </div>
        </header>
    )
}
