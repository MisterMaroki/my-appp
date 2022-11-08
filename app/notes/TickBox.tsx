'use client';

import { useRouter } from 'next/navigation';
import PocketBase from 'pocketbase';
import { useState } from 'react';

const client = new PocketBase('http://127.0.0.1:8090/');

export default function TickBox({ id, page, value }: any) {
	const router = useRouter();

	const toggleNote = async () => {
		const data = { success: false, title: 'de' };

		const record = await client.records
			.update('notes', id, {
				success: !value,
			})
			.finally(() => {
				router.refresh();
			});
	};

	return (
		<input
			type={'checkbox'}
			checked={value}
			onChange={() => {
				toggleNote();
			}}
		/>
	);
}
