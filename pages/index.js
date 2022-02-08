import Link from 'next/link';
import { Center } from '../components/styles/homepage.styled';

export default function Home() {
	return (
		<>
			<Center>
				<Link href='/news'> News</Link>
			</Center>
		</>
	);
}
