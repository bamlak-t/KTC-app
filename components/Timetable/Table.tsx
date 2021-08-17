import React, { FC } from 'react'
import {Dimensions, Text, View, StyleSheet, SafeAreaView, ScrollView, FlatList} from 'react-native'
import type {TableCellData, TimeTableData} from '../../types'
const {height, width} = Dimensions.get('screen')

import TableCell from './TableCell'

interface Props {
    table_data: TimeTableData,
}

const Table : FC<Props> = (props) => {
    // console.log("insidetable: ", props.table_data);

    return (
        <SafeAreaView  style={styles.tableContainer}>
            <ScrollView >
                { props.table_data.map((cell : TableCellData ) => (
                    <TableCell key={cell.cellID} cell_data={cell} />
                ))}
            </ScrollView>

        </SafeAreaView >
    )
}

export default Table;

const styles = StyleSheet.create({
    tableContainer: {
        width: width,
        height: '100%',
        justifyContent: 'center',
        flexDirection: 'column',
        backgroundColor: '#F9FCFB',
        borderRadius: 7,

        //IOS
        shadowColor: '#000',
        shadowOffset: { width: 1, height: 4},
        shadowOpacity: 0.5,
        shadowRadius: 1,
        //ANDROID
        elevation: 4,
    },
    title: {
        fontSize: 30,
        alignSelf: 'center',
        color: '#eee'
    }
})