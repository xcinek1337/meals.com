'use client';
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Navbar from '@/ui/Navbar';

const Home = () => {
	const router = useRouter();
	const [search, setSearch] = useState('');
	const [meals, setMeals] = useState([]);

	useEffect(() => {
		const api = 'https://www.themealdb.com/api/json/v1/1/search.php?f=b';
		fetch(api)
			.then((res) => res.json())
			.then((data) => {
				setMeals(data.meals.slice(0, 4));
			})
			.catch((error) => {
				console.error('Error fetching data:', error);
			});
	}, []);

	return (
		<div className=''>
			<Navbar />
			<main className='mx-auto max-w-md p-12  sm:max-w-2xl sm:py-16 md:max-w-4xl lg:max-w-7xl'>
				<form action=''>
					<input
						type='text'
						value={search}
						onChange={(e) => setSearch(e.target.value)}
					/>
					<button>search</button>
				</form>
			</main>
			<section className='mx-auto max-w-md p-12  sm:max-w-2xl sm:py-16 md:max-w-4xl lg:max-w-7xl'>
				<ul
					data-testid='products-list'
					className='grid grid-cols-1 gap-8 sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'
				>
					{meals.map((meal) => {
						return (
							<li key={meal.idMeal}>
								<img
									src={meal.strMealThumb}
									alt={meal.strMeal}
								/>
								<h3>{meal.strMeal}</h3>
							</li>
						);
					})}
				</ul>
				<p className='pt-8 text-center'> 1 ... 5 ... 8</p>
			</section>
			<section className='mx-auto max-w-md p-12  sm:max-w-2xl sm:py-16 md:max-w-4xl lg:max-w-7xl'>
				<p>u dont have any ideas?</p>
				<p>lets check random meal and challange yourself</p>
				<button
					onClick={() => router.push('/random')}
					className='bg-cyan-200 hover:bg-cyan-300'
				>
					challange
				</button>
			</section>
		</div>
	);
};
export default Home;
