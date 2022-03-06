import styles from '../styles/Layout.module.css'

export default function TournamentCard() {
    return (
        <div className={styles.tournamentcard}>
            <div className={styles.picture}>
                <img src="./farcry.jpg" alt="" />
                <div className={styles.typecard}>
                        <span>Entrada Gratis</span>
                        <span>Liga Ferox Gratis</span>
                        <span>PC</span>
                    </div>
            </div>
            <div className={styles.cardcontent}>
                <div className={styles.cardlogo}>
                    <img src="./farcryicon.jpg" alt="" />
                </div>
                <div>
                    <h2>FAR CRY 6</h2>
                    <p><i className='bx bxs-flag-alt' ></i> Termina en 4D 3H 43M</p>
                </div>
            </div>
            <div className={styles.cardfooter}>
                <div>
                    <span>12</span><span>/32</span>
                    <p>REGISTRADOS</p>
                </div>
                <button>Leer más</button>
            </div>
        </div>
    )
}
