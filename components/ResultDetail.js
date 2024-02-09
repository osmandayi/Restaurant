import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";

export default function ResultDetail({ result }) {
    return (
        <View style={styles.container}>
            <Image
                style={styles.image}
                source={result.image_url ? { uri: result.image_url } : null}
            />
            <Text style={styles.name}>{result.name}</Text>
            <Text>
                {result.rating}{" "}
                <FontAwesome name="star-half-full" size={16} color="black" /> (
                {result.review_count} değerlendirme)
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginLeft: 15,
    },
    image: {
        width: 250,
        height: 120,
        borderRadius: 8,
        marginBottom: 5,
    },
    name: {
        fontWeight: "bold",
    },
});
