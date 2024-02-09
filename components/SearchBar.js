import { StyleSheet, TextInput, View } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';

export default function SearchBar() {

    return (
        <View style={styles.backgroundStyle}>
            <AntDesign style={styles.iconStyle} name="search1" size={30} color="black" />
            <TextInput placeholder='Ara...' autoCapitalize='none' autoCorrect={false} style={styles.inputStyle} />
        </View>
    )
}

const styles = StyleSheet.create({
    backgroundStyle: {
        backgroundColor: 'lightgray',
        flexDirection: 'row',
        margin: 10,
        height: 50,
        alignItems: 'center',
        borderRadius: 20,
    },
    iconStyle: {
        marginHorizontal: 15,
    },
    inputStyle: {
        flex: 1,
        fontSize: 18,
    },

})