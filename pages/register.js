import Layout from "../components/Layout";
import styles from '../styles/Login.module.css'
import Link from 'next/link';
// import gql from "graphql-tag";
import { useMutation, gql, ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { useRouter } from "next/router";
import { Store } from "../Store";
import Cookies from "js-cookie";
import { useContext, useEffect, useState } from "react";
export default function Register() {

    
    const router = useRouter();

    const {state, dispatch} = useContext(Store);
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");

    const {userInfo} = state;

    useEffect(() => {
        if(userInfo){
            router.push("/tournament")
        }
    }, [])

    

    
    const [addUser, {loading}] = useMutation(REGISTER_USER,{
        update(proxy, result){
            dispatch({type: "USER_LOGIN", payload: result.data.signup})
            Cookies.set("userInfo", JSON.stringify(result.data.signup))
            router.push("/tournament")
        },
        variables: {
            firstname, lastname, username, password, email
        }
    })

    const onSubmit = (event) => {
        event.preventDefault();
        addUser();
    }

    return (
        <Layout logo="../img/logo/logo.svg">
            
            <div className={styles.section}>
                <h2>Registrarse</h2>
                <p>Bienvenido de nuevo</p>

                <form onSubmit={onSubmit} className={styles.form}>
                <div className={styles.formgroup}>
                    <label htmlFor="">PRIMER NOMBRE</label>
                    <input type="text" value={firstname} onChange={(e) => setFirstname(e.target.value)} required />
                    </div>
                    <div className={styles.formgroup}>
                    <label htmlFor="">PRIMER APELLIDO</label>
                    <input type="text" value={lastname} onChange={(e) => setLastname(e.target.value)} required/>
                    </div>
                    <div className={styles.formgroup}>
                    <label htmlFor="">USUARIO</label>
                    <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} required />
                    </div>
                    <div className={styles.formgroup}>
                    <label htmlFor="">CORREO</label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                    </div>
                    <div className={styles.formgroup}>
                    <label htmlFor="">CONTRASEÑA</label>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required/>
                    </div>
                    <div className={styles.formgroupbtn}>
                    <input type="submit" value="Registrarse" />
                    </div>
                </form>
                <div className={styles.loginregister}>
                    ¿Ya tienes una cuenta? <Link href="/login"><a>Iniciar sesión</a></Link>
                </div>
            </div>
        </Layout>
    )
}


const REGISTER_USER = gql`

    mutation signup($firstname: String, $lastname: String, $email: String, $username: String, $password: String){
        signup(
            signupInput: {
                firstname: $firstname
                lastname: $lastname
                email: $email
                username: $username
                password: $password
            }
        ){
            id email username points, firstname, lastname, createdAt
        }   
    }
`

// export async function getServerSideProps(){

//     const client = new ApolloClient({
//         uri: "https://rveapiql.herokuapp.com",
//         cache: new InMemoryCache()
//     })

//     const {data} = await client.mutation({
//         mutation: REGISTER_USER
//     })

//     console.log(data)

//     return {
//         props: {
//             user: data.user
//         }
//     }
// }
