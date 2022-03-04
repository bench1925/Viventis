import styles from '../../styles/Home.module.css'
import Link from 'next/link'
import { Button, Card } from 'react-bootstrap'
import TournamentForm from '../../forms/TournamentForm'
import { api } from '../../api'

export default function NewTournament() {
    function sendToApi (values, afterCreateApi) {
        api.post("/tournaments.json", values)
            .then(() => {
                afterCreateApi();
            })
            .catch((err) => {
                afterCreateApi(err);
            });
    }

    return (
        <div className={styles.container}>
            <main className={styles.main}>
                <h1>New Tournament</h1>
                <div>
                    <Card className="mb-3" data-testid="tournament-info-card">
                        <Card.Header>
                            <Card.Title>
                                Tournament Information
                            </Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <TournamentForm
                                onSubmit={sendToApi}
                                mode="create"
                            />
                        </Card.Body>
                    </Card>
                </div>
                <Link href="/">
                    <Button variant="outline-primary" className='mt-5'>&larr; Go Back</Button>
                </Link>
            </main>
        </div>
    )
}