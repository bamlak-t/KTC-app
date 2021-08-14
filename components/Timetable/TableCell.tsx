import React, { FC } from 'react'
import {Dimensions, Text, View, StyleSheet} from 'react-native'
import type {TableCellData, TimeTableData} from '../../types'
const {height, width} = Dimensions.get('screen')

interface Props {
    cell_data: TableCellData,
}

const TableCell : FC<Props> = (props) => {
    return (
        <View style={styles.tableContainer}>
            <Text style={styles.title}> {props.cell_data.cellID} </Text>
            <Text style={styles.title}> {props.cell_data.name} </Text>
            <Text style={styles.title}> {props.cell_data.time} </Text>
            <Text style={styles.title}> {props.cell_data.data} </Text>

        </View>
    )
}

export default TableCell;

const styles = StyleSheet.create({
    tableContainer: {
        width: width*0.8,
        height: 200,
        justifyContent: 'center',
        alignSelf: 'center',
        flexDirection: 'column',
        backgroundColor: 'red',
        borderRadius: 7,
        marginVertical: 15,
        // shadowColor: '#000',
        // shadowOffset: { width: 1, height: 4},
        // shadowOpacity: 0.5,
        // shadowRadius: 1,
        // elevation: 4,
    },
    title: {
        fontSize: 20,
        alignSelf: 'center',
        color: '#eee'
    }
})