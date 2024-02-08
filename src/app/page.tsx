'use client';
import { useRouter } from 'next/navigation';

export default function Home() {
	const router = useRouter();

	return (
		<main className='min-h-screen flex justify-center items-center flex-col text-center mx-auto '>
			<h1 className='text-4xl pb-10'>You dont know what to cook?</h1>
			<span className='pb-4'>dont waste time about thining, click below and LETS COOK</span>
			<button
				onClick={() => router.push('/home')}
				className='py-4 px-8 border-2 rounded-2xl text-lg  text-black bg-lime-400 transition hover:bg-lime-500'
			>
				Let's explore whole world meals
			</button>
		</main>
	);
}
