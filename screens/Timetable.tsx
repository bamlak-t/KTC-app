import React, { useEffect, useState }  from 'react'
import { SafeAreaView } from 'react-native';
import { Table } from '../components';
import { TimeTableData } from '../types';
import FetchInfo from '../logic/FetchInfo';

const App = ( {route}:any ) => {

  	const [tabledata, setTableData] = useState<TimeTableData>([]);

	useEffect(() => {
		
		const tableInfo = async () => {
			const yearGroup = route.params.userYear;
			if (yearGroup !== undefined) {
				console.log("setting response")
				const response = await FetchInfo("timetable", yearGroup);
				// const timetableList = response.data.listNotices.items[0]; 
				// const tarr = response.notices;
				setTableData(response);
			}
		}
		tableInfo();
  	}, []);

	return (
		<SafeAreaView>
			<Table table_data={tabledata} />
		</SafeAreaView>
	);
};

export default App;
