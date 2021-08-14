import React from 'react'
import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';

import { Table } from '../components';
const cell = {
  name: "",
  time: "6:00",
  data: "A"
}
const timetable = [
  {
    cellID: 1,
    name: "monday",
    time: "6:00",
    data: "A"
  },
  {
    cellID: 2,
    name: "tuesday",
    time: "7:00",
    data: "B"
  },
  {
    cellID: 3,
    name: "wednesday",
    time: "8:00",
    data: "C"
  },
  {
    cellID: 4,
    name: "thursday",
    time: "9:00",
    data: "D"
  },
  {
    cellID: 5,
    name: "friday",
    time: "10:00",
    data: "E"
  },
  {
    cellID: 6,
    name: "saturday",
    time: "11:00",
    data: "F"
  },
  {
    cellID: 7,
    name: "sunday",
    time: "12:00",
    data: "G"
  }
]

const App = () => {
  return (
    <SafeAreaView>
      {/* <Table table_data={timetable} /> */}
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
