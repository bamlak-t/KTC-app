import React from 'react'
import {SafeAreaView, StyleSheet, } from 'react-native';

import { Table } from '../components';

import { API, graphqlOperation } from 'aws-amplify';
import { listTimetables } from '../src/graphql/queries';
import { useEffect, useState } from 'react';
import { TimeTableData } from '../types';
import { createNotice } from '../src/graphql/mutations';
import { ListTimetablesQuery } from '../src/API';

const App = () => {

  const [tabledata, setTableData] = useState<TimeTableData>([]);

	useEffect(() => {
		timetable();
	}, []);

	const timetable = async() => {
		try {
      const response:any = (await API.graphql(graphqlOperation(listTimetables, {
        filter: {
          year_group: {
                eq: 5
            }
        }
      }))) as {
        data: ListTimetablesQuery;
      };

      const timetableList = response.data.listTimetables.items[0]; 
      const tarr = timetableList.tables;
      // console.log("narr",narr);
      // console.log(notiiceList);
      setTableData(tarr);

      // if (response.data.listNotices != undefined) {
      //   if (response.data.listNotices.items != undefined) {
      //     if (response.data.listNotices.items.length > 0) {
      //       const notiiceList = response.data.listNotices.items[0]; 
      //       if (notiiceList) {
      //         const narr = notiiceList.notices;
      //         console.log("narr",narr);
      //         console.log(notiiceList);
      //         setTableData(narr);
      //       }
      //     }
      //   }
      // }

		} catch(e) {
			console.log("error fetching data: ",e);
		}

	}

  return (
    <SafeAreaView>
      <Table table_data={tabledata} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  scrollCointainer: {
    height: '100%',
    backgroundColor: '#EEEEEE'
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
