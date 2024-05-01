import { getCentersRequest } from '@/components/requests/centers';
import './style.scss';
import { getCitiesRequest } from '@/components/requests/cities';

export const getCenters = async () => {
	const centers = await getCentersRequest();
	console.log(centers);
	if (!centers.error) {
		return centers.payload;
	}
	return [];
};
export const getCities = async () => {
	const cities = await getCitiesRequest();
	if (!cities.error) {
		return cities.payload.reduce((acc,val)=>{
			acc[val._id] = val
			return acc
		},{});
	}
	return {};
};

const Centers = async () => {
	const centers = await getCenters();
	const cities = await getCities();
	console.log(cities);
	return (
		<div className="wrapper_text">
			<h2 className="center">Наши центры</h2>
			<div className="center_list">

			{centers.map(center => {
				return <div key={center._id} className="center_item">
					<div className="center_title">{center.title}</div>
					{center.city  && cities[center.city] && <div className="center_city">Город <span>{cities[center.city].name}</span></div>}
					{center.city  && !cities[center.city] && <div className="center_city">Город <span>{center.city}</span></div>}
					{center.address && <div className="center_address">Адрес <span>{center.address}</span></div>}
					{(center.website || center.phone)
						&& <div className="center_contacts">Контакты:{
							center.website && <a target="_blank" href={`https://${center.website}`}> {center.website}</a>
						} {center.phone && <a href={`tell:${center.phone}`}>{center.phone}</a>}
						</div>}
				</div>;
			})}</div>
		</div>
	);
};

export default Centers;