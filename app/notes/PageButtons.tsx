import Link from 'next/link';

export default function PageButtons({ page }: any) {
	const pageNumber = Number(page);
	return (
		<div>
			<Link
				href={`/notes?page=${pageNumber - 1 || 1}`}
				// as={`/notes/${useNotesStore.getState().page - 1}`}
			>
				<button>Previous</button>
			</Link>
			<Link
				href={`/notes?page=${pageNumber + 1}`}
				// as={`/notes/${useNotesStore.getState().page + 1}`}
			>
				<button>Next</button>
			</Link>
		</div>
	);
}
