import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/Layout'

export default function HomePage() {
	return (
		<div>
			<Layout>
				<p className='text-3xl font-bold'>Home Page</p>
				<Link href='/about'>About</Link>
			</Layout>
		</div>
	)
}
