import Footer from './footer';
import Navbar from './navbar';
import Head from 'next/head';

const Layout = ({ children }) => {
	return (
		<>
			<Head>
				<title>News website </title>
			</Head>
			<Navbar />
			{children}
			<Footer />
		</>
	);
};

export default Layout;
