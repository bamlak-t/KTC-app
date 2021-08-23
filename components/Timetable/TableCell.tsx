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
            <View style={styles.metaContainer}>
                <View style={styles.metaTitle}>
                    <Text style={styles.metaTitleText}> {props.cell_data.name} </Text>
                    {/* <Text style={styles.metaTitleText}> {props.cell_data.cellID} </Text> */}
                </View>
                {/* <View style={styles.metaTime}>
                    <Text style={styles.metaTimeText}> {props.cell_data.time} </Text>
                </View> */}
            </View>
            <View style={styles.cellContent}>
                <Text style={styles.metaTimeText}> {props.cell_data.time} </Text>
                {/* <br /> */}
                <Text style={styles.contentText}> {props.cell_data.data} </Text>

            </View>

        </View>
    )
}

export default TableCell;

const styles = StyleSheet.create({
    tableContainer: {
        width: width*0.9,
        height: 200,
        // justifyContent: 'center',
        alignSelf: 'center',
        flexDirection: 'column',
        backgroundColor: '#B0EACD',
        borderRadius: 10,
        marginVertical: 10,
        overflow: 'hidden',
        //IOS
        shadowColor: '#000',
        shadowOffset: { width: 1, height: 4},
        shadowOpacity: 0.5,
        shadowRadius: 1,

        //ANDROID
        elevation: 5,
    },
    metaContainer: {
        width: '100%',
        height: 50,
        backgroundColor: '#EFFCEF',
        flexDirection: 'row',
        borderBottomWidth: 1,
    },
    metaTitle: {
        width: '60%',
        flexDirection: 'row',
    },
    metaTitleText: {
        fontSize: 20,
        alignSelf: 'center',
        color: '#555',
        paddingLeft: 5,
    },
    metaTime: {
        width: '40%',
        fontSize: 15,
        alignSelf: 'center',
    },
    metaTimeText: {
        fontSize: 15,
        alignSelf: 'stretch',
        padding: 5,
        color: '#555'
    },
    cellContent: {

    },
    contentText: {
        fontSize: 20,
        padding: 5,
        color: '#555'
    }
})