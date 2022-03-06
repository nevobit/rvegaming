import { useState } from 'react'
import styles from '../styles/AsideTournament.module.css'

export default function LeftAside() {

    const [active, setActive] = useState(0)

    console.log(active)
    return (
        <aside className={styles.aside}>
            <div className={styles.menu}><i className='bx bx-menu' ></i></div>
            <ul>
                <li className={active === 0? styles.active : styles.li} onClick={() => setActive(0)}><i className='bx bxs-category'></i></li>
                <li className={active === 1? styles.active : styles.li} onClick={() => setActive(1)}><i className='bx bxs-joystick' ></i></li>
                <li className={active === 2? styles.active : styles.li} onClick={() => setActive(2)}><i className='bx bxs-videos' ></i></li>
            </ul>
        </aside>
    )
}
