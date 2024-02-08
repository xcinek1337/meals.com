import { useRouter } from 'next/navigation';

const Navbar = () => {
    const router = useRouter();
	return (
		<header className='text-3xl flex justify-around py-6'>
			<div>logo</div>
			<h1>Meals . com</h1>
			<div></div>
		</header>
	);
};
export default Navbar