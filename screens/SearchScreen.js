import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import SearchBar from '../components/SearchBar'
import ResultsList from '../components/ResultsList'
import useResults from '../hooks/useResults';

export default function SearchScreen() {
    const [searchApi, results, errorMessage] = useResults();
    const [term, setTerm] = useState("");

    const filterResultsByPrice = (price) => {
        return results.filter((result) => {
            return result.price === price
        })
    }


    const restaurantGroup = [
        { name: 'Ucuz Restoranlar', price: "₺", id: 1 },
        { name: 'Uygun Restoranlar', price: "₺₺", id: 2 },
        { name: 'Pahalı Restoranlar', price: "₺₺₺", id: 3 },
    ];

    return (
        <View>
            <SearchBar term={term} onTermChange={setTerm} onTermSubmit={() => searchApi(term)} />
            {/* <ResultsList title="Ucuz Restoranlar" results={filterResultsByPrice(`₺`)} />
            <ResultsList title="Uygun Restoranlar" results={filterResultsByPrice(`₺₺`)} />
            <ResultsList title="Pahalı Restoranlar" results={filterResultsByPrice(`₺₺₺`)} /> */}
            {
                !errorMessage ? (results.length > 0 ? <FlatList
                    data={restaurantGroup}
                    // horizontal={true}
                    // showsHorizontalScrollIndicator={false}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => {
                        const results = filterResultsByPrice(item.price);
                        return results.length > 0 && <ResultsList title={item.name} results={results} />;
                    }}
                /> : <Text style={styles.searchError}>Aradığınız içerik bulunamadı !</Text>) : <Text style={styles.connectionError}>{errorMessage}</Text>
            }
        </View>
    )
}

const styles = StyleSheet.create({
    searchError: {
        backgroundColor: "#d44",
        color: "white",
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 20,
        marginVertical: 5,
        fontSize: 18,
        alignSelf: "center",
    },
    connectionError: {
        backgroundColor: "#d44",
        color: "white",
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 20,
        marginVertical: 5,
        fontSize: 18,
        alignSelf: "center",
    },
})