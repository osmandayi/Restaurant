import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ResultsList({ title, results }) {
    console.log("TITLE :", title);
    console.log("RESULTS :", results);
    return (
        <View>
            <Text>{title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({})