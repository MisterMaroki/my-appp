import Image from 'next/image';
import Link from 'next/link';
import styles from './page.module.css';

export default function Home() {
	return (
		<div className={styles.container}>
			<main className={styles.main}>
				<h1 className={styles.title}>
					Welcome to <a href="https://nextjs.org">Next.js 13!</a>
				</h1>
				<Link href="/notes?page=1">
					<p>notes</p>
				</Link>
			</main>
		</div>
	);
}
