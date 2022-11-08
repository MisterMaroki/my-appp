import create from 'zustand';
import { devtools, persist } from 'zustand/middleware';

export type Note = {
	// '@collectionId': '5ztofbykpmdc6y7',
	// '@collectionName': 'notes',
	content: string;
	created: string;
	id: string;
	title: string;
	updated: string;
};

interface NotesState {
	notes: Note[];
	addNote: (note: Note) => void;
	removeNote: (id: string) => void;
	page: number;
	setPage: (page: number) => void;
}

const useNotesStore = create<NotesState>()(
	devtools(
		persist((set) => ({
			notes: [],
			addNote: (note) => set((state) => ({ notes: [...state.notes, note] })),
			removeNote: (id) =>
				set((state) => ({ notes: state.notes.filter((x) => x.id !== id) })),
			page: 1,
			setPage: (page) => set({ page }),
		}))
	)
);

export default useNotesStore;
