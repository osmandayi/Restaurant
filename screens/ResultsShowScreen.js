import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import React, { useEffect, useState } from "react";
import yelp from "../api/yelp";

export default function ResultsShowScreen({ route }) {
    const [result, setResult] = useState(null);
    const id = route.params.id;

    const getResult = async (id) => {
        const response = await yelp.get(`/${id}`);
        setResult(response.data);
    };

    useEffect(() => {
        getResult(id);
    }, []);

    if (!result) {
        return null;
    }
    return (
        <View>
            <Text style={styles.title}>{result.name}</Text>
            <Text style={styles.phone}>{result.phone}</Text>
            <View style={styles.icons}>
                {result.is_closed ? (
                    <AntDesign name="closecircleo" size={30} color="red" />
                ) : (
                    <MaterialIcons name="delivery-dining" size={30} color="green" />
                )}
            </View>

            <FlatList
                data={result.photos}
                renderItem={({ item }) => (
                    <Image source={{ uri: item }} style={styles.image} />
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    image: {
        height: 180,
        borderRadius: 20,
        margin: 10,
    },
    title: {
        alignSelf: "center",
        fontSize: 25,
        marginVertical: 10,
    },
    phone: {
        alignSelf: "center",
        fontSize: 20,
    },
    icons: {
        alignSelf: 'center',
        marginTop: 10,
    },
});
