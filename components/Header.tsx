import React, { FC } from 'react'
import {Dimensions, Text, View, StyleSheet} from 'react-native'

const {height, width} = Dimensions.get('screen')

interface Props {
    title: string,
}

const Header : FC<Props> = (props) => {
    return (
        <View style={styles.headeContainer}>
            <Text style={styles.title}> {props.title} </Text>
        </View>
    )
}

export default Header;

const styles = StyleSheet.create({
    headeContainer: {
        width: width,
        height: '100%',
        justifyContent: 'center',
        flexDirection: 'row',
        backgroundColor: '#21BF73',
        borderRadius: 7,
        // shadowColor: '#000',
        // shadowOffset: { width: 1, height: 4},
        // shadowOpacity: 0.5,
        // shadowRadius: 1,
        // elevation: 4,
    },
    title: {
        fontSize: 30,
        alignSelf: 'center',
        color: '#eee'
    }
})