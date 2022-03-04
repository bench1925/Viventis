import styles from '../../../styles/Home.module.css'
import Link from 'next/link'

export default function Participants() {
    return (
        <div className={styles.container}>
            <main className={styles.main}>
                <h1>Participants</h1>
                <p className={styles.description}>
                    <Link href="/">
                        <a>&larr; Go Back</a>
                    </Link>
                </p>
            </main>
        </div>
    )
}