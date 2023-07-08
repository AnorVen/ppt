import { bd } from '@/bd';
import { ClaendaeBlock } from '@/components/calendarBlock';

const StudyPage = ()=>{
	const { seminars, courses, master_thems, base_thems } = bd;
	return(
		<div  className="">

			study pages
			<ClaendaeBlock/>
		</div>
	)
}
export default StudyPage