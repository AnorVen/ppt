const NewsPage = ({ params }) => {
	console.log('news uuid', params);
	return (
		<div>news uuid page - {params.uuid}</div>
	);
};
export default NewsPage;