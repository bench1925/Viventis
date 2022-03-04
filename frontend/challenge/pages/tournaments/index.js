import styles from '../../../styles/Home.module.css'
import React, { useEffect, useState } from 'react'
import { api } from '../../../api';
import { useRouter } from 'next/router';
import Tournament from '../../../components/Tournament';

//frontend/challonge/pages/tournaments/[id]/index.js

export default function ViewTournament() {
    const router = useRouter();
    const [tournament, setTournament] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect (() => {
        const { id = "" } = router.query;
        if(id !== "") {
            api.get(`/tournaments/${id}.json`)
                .then(({ data }) => {
                    setTournament(data);
                    setIsLoading(false);
                })
                .catch((err) => {
                    console.log(err);
                });
        }
    }, []);

    return (
        <div className={styles.container}>
            <main className={styles.main}>
                { isLoading ? <div>Loading tournament...</div> : <Tournament tournament={tournament.tournament}/> }
            </main>
        </div>
    )
}