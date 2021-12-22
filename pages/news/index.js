import Link from 'next/link';
import Hero from '../../components/Hero';
import Layout from '../../components/Layout'
import NewsItem from '../../components/NewsItem';
import { API_URL } from '../../config/index';

export default function NewsPage({ news }) {

	return (
		<div>
			<Layout>
				<div className='container mx-auto mt-10'>
					<h1 className='px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 font-bold text-4xl pt-10'>News</h1>
					{news.length === 0 && <h3>No news</h3>}
					<div className='grid grid-cols-12 gap-8 px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20'>
						{news.map((item, index) => (
							<NewsItem key={index} news={item}/>
						))}
					</div>
               <Link href='/'>
                  <a className='ml-10 py-2 px-3 rounded text-white font-bold bg-gray-400'>Go Back</a>
               </Link>
				</div>
			</Layout>
		</div>
	)
}

export async function getStaticProps (){
	const res = await fetch(`${API_URL}/sports`);
	const news = await res.json()

	return {
		props: {news},
		revalidate: 1
	}
}