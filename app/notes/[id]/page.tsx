import PocketBase from 'pocketbase';

const client = new PocketBase('http://127.0.0.1:8090');
export default async function NotePage({ params, searchParams }: any) {
	console.log(
		'🚀 ~ file: page.tsx ~ line 5 ~ NotePage ~ searchParams',
		searchParams
	);
	console.log('🚀 ~ file: page.tsx ~ line 5 ~ NotePage ~ params', params);
	const record = await client.records.getOne('notes', params.id, {});
	return (
		<div>
			<h1>{JSON.stringify(record)}</h1>
		</div>
	);
}
