import Link from 'next/link';

export default function PageButtons({ page, totalPages }: any) {
	const pageNumber = Number(page);
	return (
		<div>
			<Link href={`/notes?page=${pageNumber - 1 || 1}`}>
				<button>Previous</button>
			</Link>
			<Link
				href={`/notes?page=${
					pageNumber + 1 > totalPages ? totalPages : pageNumber + 1 || 2
				}`}
			>
				<button>Next</button>
			</Link>
		</div>
	);
}
