import React from 'react'
import HeaderTournament from './HeaderTournament'
import LeftAside from './LeftAside'
import Head from 'next/head';
import styles from '../styles/Layout.module.css'

export default function LayoutTournament({title, description, children}) {
    return (
        <>
              <Head>
                <title>{title ? `${title} - Real Vision Gaming` : 'Real Vision Gaming : PC Gaming Y Torneos Internacionales'}</title>
                {description && <meta name="description" content={description}></meta>}
                <link rel="icon" href="/favicon.ico" />
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='true'/>
                <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet"></link>
                <link href='https://unpkg.com/boxicons@2.0.9/css/boxicons.min.css' rel='stylesheet'/>

            </Head>
            <HeaderTournament />
            <LeftAside />
            <main className={styles.main}>
            {children}
            </main>
        </>
    )
}