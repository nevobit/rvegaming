import styles from '../styles/Layout.module.css'

export default function StreamCard({image, name, age, level, city, distance, games, friends, tournaments, followers, views, points}) {
    return (
        <div className={styles.stream}>
            <div className={styles.streamheader}>
                <span><i className='bx bx-heart'></i></span>
                <span><i className='bx bx-dots-horizontal-rounded' ></i></span>
            </div>
            <div>
                <div className={styles.streampicture}>
                    <img src={image} alt="" />
                    <span>N{level}</span>
                </div>
                <h2>{name}</h2>
                <div className={styles.dots}>
                    <span>{city}</span>
                    <span className="dot"></span>
                    <span>{age} Años</span>
                    <span className="dot"></span>
                    <span>{distance}km Away</span>
                </div>
                <div className={styles.streamdata}>
                    <span>
                        <h4>{games}</h4>
                        <p>JUEGOS</p>
                    </span>
                    <span>
                        <h4>{followers}</h4>
                        <p>SEGUIDORES</p>
                    </span>
                    <span>
                        <h4>{tournaments}</h4>
                        <p>TORNEOS</p>
                    </span>
                    <span>
                        <h4>{points}</h4>
                        <p>PUNTOS</p>
                    </span>
                </div>
            </div>
            <div className={styles.streamfooter}>
                <button>Leer más</button>
                <button>Conectarse</button>
            </div>
        </div>
    )
}
