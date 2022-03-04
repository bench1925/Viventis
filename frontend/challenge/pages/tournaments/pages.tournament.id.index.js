import styles from '../../../styles/Home.module.css'
import React, { useEffect, useState } from 'react'
import { api } from '../../../api';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { Button, Card } from 'react-bootstrap';
import TournamentForm from '../../../forms/TournamentForm';
import { DisplayMatchesList } from '../../../components/MatchesList';
import { DisplayParticipantsList } from '../../../components/ParticipantsList';

export default function ViewTournament() {
    const router = useRouter();
    const [tournament, setTournament] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [tournamentName, setTournamentName] = useState("");
    const [matches, setMatches] = useState([]);
    const [participants, setParticipants] = useState([]);
    const [isMatchesLoading, setIsMatchesLoading] = useState(true);
    const [isParticipantsLoading, setIsParticipantsLoading] = useState(true);

    useEffect (() => {
        const { id = "" } = router.query;
        if(id !== "") {
            api.get(`/tournaments/${id}.json`)
                .then(({ data }) => {
                    setTournamentName(data.tournament.name);
                    setTournament(data);
                    setIsLoading(false);
                    getMatches(id);
                    getParticipants(id);
                })
                .catch((err) => {
                    console.log(err);
                });
        }
    }, []);

    function sendToApi (values, afterUpdateApi) {
        api.put(`/tournaments/${tournament.tournament.url}.json`, values)
            .then(({ data }) => {
                setTournamentName(data.tournament.name);
                afterUpdateApi();
            })
            .catch((err) => {
                afterUpdateApi(err);
            });
    }

    function getMatches (id) {
        if(id !== "") {
            api.get(`/tournaments/${id}/matches.json`)
                .then(({ data }) => {
                    setIsMatchesLoading(false);
                    setMatches(data);
                })
                .catch((err) => {
                    console.log(err);
                });
        }
    }

    function getParticipants (id) {
        if(id !== "") {
            api.get(`/tournaments/${id}/participants.json`)
                .then(({ data }) => {
                    setParticipants(data);
                    setIsParticipantsLoading(false);
                })
                .catch((err) => {
                    console.log(err);
                });
        }
    }

    return (
        <div className={styles.container}>
            <main className={styles.main}>
                {
                    isLoading
                        ? <div>Loading tournament...</div>
                        : <>
                            <div data-testid="tournament">
                                <h1 data-testid="tournament-name" className='mb-5'>{tournamentName}</h1>
                                <Card className="mb-3" data-testid="tournament-info-card">
                                    <Card.Header>
                                        <Card.Title>Tournament Information</Card.Title>
                                    </Card.Header>
                                    <Card.Body>
                                        <TournamentForm
                                            tournament={tournament.tournament}
                                            mode="update"
                                            onSubmit={sendToApi}
                                        />
                                    </Card.Body>
                                </Card>
                                <Card className="mb-3" data-testid="tournament-matches-card">
                                    <Card.Header>
                                        <Card.Title>Matches</Card.Title>
                                    </Card.Header>
                                    <Card.Body>
                                        { isMatchesLoading ? <div>Loading matches...</div> : <DisplayMatchesList matches={matches}/> }
                                    </Card.Body>
                                </Card>

                                <Card className="mb-3" data-testid="tournament-participants-card">
                                    <Card.Header>
                                        <Card.Title>Participants</Card.Title>
                                    </Card.Header>
                                    <Card.Body>
                                        { isParticipantsLoading ? <div>Loading participants...</div> : <DisplayParticipantsList participants={participants}/> }
                                    </Card.Body>
                                </Card>
                            </div>
                            <Link href="/">
                                <Button variant="outline-primary" className='mt-5'>&larr; Go Back</Button>
                            </Link>
                        </>
                }
            </main>
        </div>
    )
}