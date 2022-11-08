('use client');

import FormEntry from './formEntry';
import NotesList from './notesList';

export default function NotesPage({ params, searchParams }: any) {
	return (
		<div>
			<h1>Notes</h1>
			{/* @ts-ignore */}
			<NotesList page={searchParams.page} />
			<FormEntry />
		</div>
	);
}
