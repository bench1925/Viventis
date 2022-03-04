import { Table } from "react-bootstrap"

export function DisplayMatchesList ({ matches }) {
    return (matches.length > 0) ? <MatchesTable matches={matches} /> : <div data-testid="tournament-matches-no-data">No matches found in this tournament.</div>
}

export function MatchesTable ({ matches }) {
    return <Table data-testid="tournament-matches-table">
        <thead>
        <tr>
            <th>Identifier</th>
            <th>Round</th>
            <th>Winner</th>
            <th>Loser</th>
            <th>Status</th>
        </tr>
        </thead>
        <tbody>
        {
            matches.map(({ match }, index) => (<tr key={index} data-testid={`tournament-matches-row-${index}`}>
                <td>{match.identifier}</td>
                <td>{match.round}</td>
                <td>{match.winner_id}</td>
                <td>{match.loser_id}</td>
                <td>{match.state}</td>
            </tr>))
        }
        </tbody>
    </Table>
}