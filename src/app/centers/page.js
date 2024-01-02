import { getCentersRequest } from '@/components/requests/centers';
import './style.scss';

export const getCenters = async () => {
	const centers = await getCentersRequest();
	if (!centers.error) {
		return centers.payload;
	}
	return [];
};

const Centers = async () => {
	const centers = await getCenters();
	return (
		<div className="wrapper_text">
			<h2 className="center">Наши центры</h2>
			<div className="center_list">

			{centers.map(center => {
				return <div key={center._id} className="center_item">
					<div className="center_title">{center.title}</div>
					{center.city && <div className="center_city">Город <span>{center.city}</span></div>}
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