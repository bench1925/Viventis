import { Table } from "react-bootstrap"

export function DisplayParticipantsList ({ participants }) {
    return (participants.length > 0) ? <ParticipantsTable participants={participants} /> : <div data-testid="tournament-participants-no-data">No participants found in this tournament.</div>
}

export function ParticipantsTable ({ participants }) {
    return <Table data-testid="tournament-participants-table">
        <thead>
        <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Final Rank</th>
        </tr>
        </thead>
        <tbody>
        {
            participants.map(({ participant }, index) => (<tr key={index} data-testid={`tournament-participants-row-${index}`}>
                <td>{participant.id}</td>
                <td>{participant.name}</td>
                <td>{participant.final_rank}</td>
            </tr>))
        }
        </tbody>
    </Table>
}