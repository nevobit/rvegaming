import Link from "next/link";
import styles from '../../styles/Header.module.css'
export default function Header() {
    return (
        <header className={styles.header}>
            <nav>
                <Link href=""><a><img src="./1rveg.svg" alt="" /></a></Link>
                <Link href=""><a>Inicio</a></Link>
                <Link href=""><a>Premium</a></Link>
                <Link href=""><a>Torneos</a></Link>
                <Link href=""><a>Blog</a></Link>
            </nav>
            <div>
                <Link href=""><a className={styles.btn}>Registrarse</a></Link>
                <Link href=""><a className={styles.btnNone}>Iniciar Sesion</a></Link>
            </div>
        </header>
    )
}
