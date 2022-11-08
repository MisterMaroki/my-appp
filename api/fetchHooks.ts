import { useInfiniteQuery } from '@tanstack/react-query';
// Fetch function
import { fetchNotes } from './fetchFunctions';
// Types
export const useFetchNotes = (pageParam: number = 1) => {
	return useInfiniteQuery(
		['movies'],
		({ pageParam = 1 }) => fetchNotes(pageParam),
		{
			getNextPageParam: (lastPage: any) => {
				if (lastPage.page < lastPage.total_pages) {
					return lastPage.page + 1;
				}

				return undefined;
			},
			refetchOnWindowFocus: false,
		}
	);
};
