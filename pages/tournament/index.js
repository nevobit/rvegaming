import LayoutTournament from "../../components/LayoutTournament";
import styles from '../../styles/Layout.module.css'
import Link from 'next/link';
import TournamentCard from "../../components/TournamentCard";
import GameCard from "../../components/GameCard";
import StreamCard from "../../components/StreamCard";
import { useRouter } from "next/dist/client/router";
import { useContext, useEffect } from "react";
import { Store } from "../../Store";
import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

export default function Tournament({users}) {

    const router = useRouter();
    const {state, dispatch} = useContext(Store);
    const {redirect} = router.query;

    const { userInfo } = state;

    useEffect(() => {
        if (!userInfo) {
            return router.push("/register")
        }
    }, [])
    return (
        <LayoutTournament>
            <div className={styles.banner}>
                <img src="./freefire.jpg" alt="" />
                <div className={styles.data}>
                    <div className={styles.type}>
                        <span>Entrada Gratis</span>
                        <span>Liga RVE Gratis</span>
                        <span>Mobile/PC</span>
                    </div>
                    <h2>Free Fire tournament</h2>
                    <p>Empeiza en 5 Dias</p>
                    <button>Leer más</button>
                </div>
            </div>
            <section className={styles.section}>
                <div className={styles.sectionheader}>
                    <h2>Torneos en tendencia</h2>
                    <Link href={`/post`}>Ver todo</Link>
                </div>
                <div className={styles.flex}>
                    <h2>AUN NO HAY TORNEOS</h2>
                    {/* <TournamentCard />
                    <TournamentCard />
                    <TournamentCard />
                    <TournamentCard />
                    <TournamentCard />
                    <TournamentCard /> */}
                </div>
            </section>
            <section className={styles.section}>
                <div className={styles.sectionheader}>
                    <h2>Explorar Juegos</h2>
                    <Link href={`/post`}>Ver todo</Link>
                </div>
                <div className={styles.flex}>
                    <GameCard image="./img/games-cover/pcg-gta.webp"/>
                    <GameCard image="./img/games-cover/pcg-ark.webp" />
                    <GameCard image ="./img/games-cover/pcg-fortnite2.webp"/>
                    <GameCard image="./img/games-cover/pcg-lol.webp" />
                    <GameCard image="./img/games-cover/pcg-warzone2.webp" />
                    <GameCard image="./img/games-cover/pcg-minecraf2.webp" />
                </div>
            </section>
            <section className={styles.extrasection}>
                <div className={styles.extrapicture}>
                    <img src="./cod.webp" alt="" />
                </div>
                
                <div>

                <h2>Entrenamiento Esport</h2>
                <p>Lleva tu juego al siguiente nivel con entrenamiento profesional de Esports u ofrece tus propios servicios de entrenamiento a través del marketplace.</p>
                <button>Leer más</button>
                </div>

            </section>
            <section className={styles.section}>
                <div className={styles.sectionheader}>
                    <h2>Streamers Destacados</h2>
                    <Link href={`/post`}>Ver todo</Link>
                </div>
                <div className={styles.flex}>
                    {users.map((user, index) => (
                        <StreamCard key={user.id} image={user.photo} level={user.level} name={user.firstname + " " + user.lastname} games={user.games} followers={user.followers} tournaments={user.tournaments} points={user.points} />
                    ))}
                    {/* <StreamCard image="./img/cto.png" name="Luis Mosquera" /> */}
                    {/* <StreamCard image="./img/cio.png" name="Juan Chaverra" /> */}
                    {/* <StreamCard image="./img/cmo.png" name="Jhonier Pizarro" /> */}
                </div>
            </section>
            
        </LayoutTournament>
    )
}


export async function getServerSideProps(){

    const client = new ApolloClient({
        uri: "https://rveapiql.herokuapp.com",
        cache: new InMemoryCache()
    })

    const {data} = await client.query({
        query: gql`
        query {
          users{
            id
            firstname
            lastname
            points
            games
            tournaments
            followers
            level
            photo
          }
        }
      `
    })

    return {
        props: {
            users: data.users
        }
    }
}