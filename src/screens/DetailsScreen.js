import React from 'react';
import { View, Text, FlatList } from 'react-native';
import styles from '../styles';

const DetailsScreen = ({ route }) => {
    const { item } = route.params;

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Art Form: {item.artform}</Text>
            <FlatList
                data={item.years}
                keyExtractor={(yearData) => yearData.year}
                renderItem={({ item: yearData }) => (
                    <View style={styles.itemContainer}>
                        <Text style={styles.details}>Year: {yearData.year}</Text>
                        <Text style={styles.details}>Number of Companies: {yearData.companies}</Text>
                    </View>
                )}
            />
        </View>
    );
};

export default DetailsScreen;
