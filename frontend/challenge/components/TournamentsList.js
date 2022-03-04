import Link from "next/link"
import { Table } from "react-bootstrap"
import styles from '../styles/Home.module.css'

export default function DisplayTournamentsList ({ tournaments = []}) {
    return (tournaments.length > 0) ? <TournamentsTable tournaments={tournaments} /> : <div data-testid="tournament-list-no-data">No tournaments found.</div>
}

export function TournamentsTable ({ tournaments }) {
    return <Table data-testid="tournament-list-table">
        <thead>
        <tr>
            <th></th>
            <th>Name</th>
            <th>Tournament Type</th>
        </tr>
        </thead>
        <tbody>
        {
            tournaments.map(({ tournament }, index) => (<tr key={index} data-testid={`tournament-list-row-${index}`}>
                <td>{(index + 1)}</td>
                <td>
                    <Link href={`/tournaments/${tournament.url}`}>
                        <a data-testid={`tournament-list-${index}`} className={styles.link}>
                            <div data-testid="tournament-name">{tournament.name}</div>
                        </a>
                    </Link>
                </td>
                <td className="text-capitalize">{tournament.tournament_type}</td>
            </tr>))
        }
        </tbody>
    </Table>
}