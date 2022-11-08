'use client';

import { useRouter } from 'next/navigation';
import PocketBase from 'pocketbase';

// const client = new PocketBase('http://127.0.0.1:8090/api/');
// const client = new PocketBase('https://rough-haze-8495.fly.dev');

export default function DeleteButton({ id, page }: any) {
	const router = useRouter();
	const removeNote = async () => {
		// const res = await client.records.delete('notes', id);
		const res = await fetch(
			`https://rough-haze-8495.fly.dev/api/collections/notes/records/${id}`,
			{ method: 'DELETE', cache: 'no-cache' }
		).finally(() => {
			router.refresh();
		});
		console.log(
			'🚀 ~ file: DeleteButton.tsx ~ line 15 ~ removeNote ~ data',
			res
		);
	};

	return (
		<button
			onClick={async () => {
				removeNote();
			}}
		>
			Delete
		</button>
	);
}
