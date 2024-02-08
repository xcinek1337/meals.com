'use client';
import { useState, useEffect } from 'react';
import Navbar from '@/ui/Navbar';

export default function Random() {
	const [meal, setMeal] = useState(null);

	useEffect(() => {
		const getRandomMeal = fetch('https://www.themealdb.com/api/json/v1/1/random.php')
			.then((res) => res.json())
			.then((randomMeal) => randomMeal.meals[0]);

		getRandomMeal.then(setMeal);
	}, []);

	if (!meal) {
		return <div>Loading...</div>;
	}

	return (
		<>
			<Navbar />
			<div>
				<h1>{meal.strCategory}</h1>
				<p>{meal.strArea}</p>
				<p>{meal.strMeal}</p>
				<img src={meal.strMealThumb}></img>
				<p>{meal.strInstructions}</p>
				<p>{meal.strSource}</p>
				<a
					className='underline'
					href={meal.strYoutube}
				>
					Link do instrukcji na YouTube
				</a>
			</div>
		</>
	);
}
