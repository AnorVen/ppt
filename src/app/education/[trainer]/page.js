const TrainerPage = ({ params }) => {
	console.log('trainer uuid', params);
	return (
		<div>trainers main page, params trainer - {params.trainer}</div>
	);
};
export default TrainerPage;
