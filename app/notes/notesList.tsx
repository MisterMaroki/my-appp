import Link from 'next/link';
import PocketBase from 'pocketbase';
import DeleteButton from './DeleteButton';
import PageButtons from './PageButtons';
import TickBox from './TickBox';

// const client = new PocketBase('http://127.0.0.1:8090');
const client = new PocketBase('https://rough-haze-8495.fly.dev');

export default async function NotesList(props: any) {
	const { page } = props;

	const { items, totalPages } = await client.records.getList('notes', page, 5);

	return (
		<div>
			<ul>
				{items.map((note) => (
					<li
						key={note.id}
						style={{
							border: '1px solid black',
							padding: '1rem',
							margin: '1rem',
							display: 'flex',
							flexDirection: 'row',
							justifyContent: 'flex-start',
							gap: '1rem',
						}}
					>
						<Link href="/notes/[id]" as={`/notes/${note.id}`}>
							<p>{note.title}</p>
						</Link>

						<TickBox id={note.id} page={page} value={note.success} />

						<DeleteButton id={note.id} page={page} />
					</li>
				))}
			</ul>

			<PageButtons page={props.page || 1} totalPages={totalPages} />
		</div>
	);
}

// async function getNotes(page: number) {
// 	// const res = await client.records.getList('notes', 1, 50, {
// 	// 	filter: 'created >= "2022-01-01 00:00:00"',
// 	//
// 	//
// 	//
// 	// });
// 	// return res.items;
// 	const res = await fetch(
// 		`http://127.0.0.1:8090/api/collections/notes/records`,
// 		{ cache: 'no-cache' }
// 		// { next: { revalidate: 5 } }
// 	);
// 	const data: RootObject = await res.json();
// 	// console.log('🚀 ~ file: notesList.tsx ~ line 51 ~ getNotes ~ res', data);
// 	return data.items;
// }
interface RootObject {
	page: number;
	perPage: number;
	totalItems: number;
	totalPages: number;
	items: Note[];
}

interface Note {
	'@collectionId': string;
	'@collectionName': string;
	content: string;
	created: string;
	id: string;
	success: boolean;
	title: string;
	updated: string;
}
