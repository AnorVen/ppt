const EducationType = ({ params }) => {
	console.log('EducationType', params);
	return (
		<div className="wrapper_text">{params.type}</div>
	);
};
export default EducationType;
