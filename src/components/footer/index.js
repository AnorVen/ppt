import { DateTime } from "luxon";
import './footer.scss'

const Footer = ()=>{
	return (
		<div className="footer">&#169; Российская ассоциация ППТ {DateTime.now().toFormat('yyyy')}</div>
	)
}
export default Footer;
