import { useRouter } from 'next/router';
import Link from 'next/link';
import { useContext, useEffect } from 'react';
import { Store } from '../Store';
import styles from '../styles/HeaderTournament.module.css'
export default function HeaderTournament() {


    const router = useRouter();
    const { state, dispatch } = useContext(Store);
    const { redirect } = router.query;

    const { userInfo } = state;

    

    useEffect(() => {
        if (!userInfo) {
            return router.push("/register")
        }
    }, [])

    return (
        <header className={styles.header}>
            <div></div>
            <input type="text" className={styles.searchbar} placeholder="Escribe algo para buscar" />
            <div className={styles.profile} title="Puntos"><i className='bx bxs-coin-stack'></i>  {userInfo? userInfo.points : 0}  <Link href="/profile"><a><img src={userInfo? userInfo.photo : ""} alt="" /></a></Link> </div>
        </header>
    )
}