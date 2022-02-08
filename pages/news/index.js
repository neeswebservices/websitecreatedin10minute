import { NewsDiv } from '../../components/styles/news.styled';

export const getStaticProps = async () => {
	var api =
		'https://newsapi.org/v2/everything?q=Technology&from=2022-02-06&sortBy=popularity&apiKey=2e9194c62ab74d688a4341b674140c7d';

	var res = await fetch(api);
	var data = await res.json();

	return {
		props: {
			data: data,
		},
	};
};

const News = ({ data }) => {
	return (
		<NewsDiv>
			{' '}
			{data['articles'].map((item, index) => (
				<div key={index} className='news-item'>
					<h3 className='title'>{item.title}</h3>
					<div className='imgdiv'>
						<img src={item.urlToImage} alt='image' />
					</div>
					<p className='description'>
						{item.description}
						<a href={item.url}>show more ..</a>
					</p>
					<p className='content'>{item.content}</p>
					<span>
						{item.author} {item.source[0]}
					</span>
					<span>{item.publishedAt}</span>
				</div>
			))}
		</NewsDiv>
	);
};

export default News;
