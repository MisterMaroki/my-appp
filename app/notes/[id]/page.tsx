import PocketBase from 'pocketbase';

// const client = new PocketBase('http://127.0.0.1:8090');
const client = new PocketBase('https://rough-haze-8495.fly.dev');

export default async function NotePage({ params, searchParams }: any) {
	const record = await client.records.getOne('notes', params.id, {});
	return (
		<div>
			<h1>{JSON.stringify(record)}</h1>
		</div>
	);
}
