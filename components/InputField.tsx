import React, { FC } from 'react'
import {Dimensions, View, StyleSheet} from 'react-native'
import {TextInput } from 'react-native-gesture-handler'

const {height, width} = Dimensions.get('screen')

interface Props {
    placeholder: string,
    // value: string,
    onChangeText: (text:string) => void,
    secureTextEntry?: boolean;

}

const Input : FC<Props> = (props) => {
    return (
    <View style={styles.container}> 
        <TextInput style={styles.input} placeholderTextColor='#777' placeholder={props.placeholder} onChangeText={props.onChangeText} secureTextEntry={props.secureTextEntry || false} />
    </View>
    )
}

export default Input;

const styles = StyleSheet.create({
    container: {
        width: width / 1.1,
        alignSelf: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
        borderRadius: 10,
        marginVertical: 5,

        // IOS
        shadowColor: '#000',
        shadowOffset: { width: 1, height: 4},
        shadowOpacity: 0.5,
        shadowRadius: 1,
        elevation: 3,

    },
    input: {
        height: height * 0.065,
        padding: 15,
        //fontWeight: 'bold',
 

    }
})