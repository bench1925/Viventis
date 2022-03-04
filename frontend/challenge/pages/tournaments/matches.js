import styles from '../../../styles/Home.module.css'
import Link from 'next/link'


//frontend/challonge/pages/tournaments/[id]/matches.js
//
export default function Matches() {
    return (
        <div className={styles.container}>
            <main className={styles.main}>
                <h1>Matches</h1>
                <p className={styles.description}>
                    <Link href="/">
                        <a>&larr; Go Back</a>
                    </Link>
                </p>
            </main>
        </div>
    )
}