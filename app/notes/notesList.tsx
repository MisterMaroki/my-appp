import Link from 'next/link';
import React, { useEffect } from 'react';
import useNotesStore from '../Store';
import PageButtons from './PageButtons';
import PocketBase from 'pocketbase';
import DeleteButton from './DeleteButton';
import TickBox from './TickBox';

const client = new PocketBase('http://127.0.0.1:8090');

export default async function NotesList(props: any) {
	// const { page, setPage } = useNotesStore();
	const { page } = props;

	const [{ items }, data] = await Promise.all([
		client.records.getList('notes', page, 10),
		getNotes(page),
	]);
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

						<DeleteButton id={note.id} page={page} />

						<TickBox id={note.id} page={page} value={note.success} />
					</li>
				))}
			</ul>

			<PageButtons page={props.page} />
		</div>
	);
}

async function getNotes(page: number) {
	// const res = await client.records.getList('notes', 1, 50, {
	// 	filter: 'created >= "2022-01-01 00:00:00"',
	//
	//
	//
	// });
	// return res.items;
	const res = await fetch(
		`http://127.0.0.1:8090/api/collections/notes/records`,
		{ cache: 'no-cache' }
		// { next: { revalidate: 5 } }
	);
	const data: RootObject = await res.json();
	// console.log('🚀 ~ file: notesList.tsx ~ line 51 ~ getNotes ~ res', data);
	return data.items;
}
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
