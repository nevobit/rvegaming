import styles from '../styles/Layout.module.css'

export default function GameCard({image}) {
    return (
        
            <div className={styles.picturegame}>
                <img src={image} alt="" />
            </div>
    )
}
