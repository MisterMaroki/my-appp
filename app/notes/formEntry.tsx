'use client';

import { useRouter } from 'next/navigation';
import PocketBase from 'pocketbase';

// const client = new PocketBase('http://127.0.0.1:8090');
const client = new PocketBase('https://rough-haze-8495.fly.dev');

export default function FormEntry() {
	const router = useRouter();
	return (
		<form
			onSubmit={async (e) => {
				e.preventDefault();
				const formData = new FormData(e.target as HTMLFormElement);
				const title = formData.get('title');
				const content = formData.get('content');
				const newNote = await createNote(title as string, content as string);

				router.refresh();
			}}
		>
			<input type="text" name="title" />
			<textarea name="content" />
			<button type="submit">Create</button>
		</form>
	);
}

async function createNote(title: string, message: string) {
	const res = await client.records.create('notes', {
		title: title,
		content: message,
	});
	return res;
}
