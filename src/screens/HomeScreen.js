import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TextInput, TouchableOpacity } from 'react-native';
import { fetchData } from '../utils/api';
import styles from '../styles';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
    const [data, setData] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const navigation = useNavigation();

    useEffect(() => {
        const loadData = async () => {
            const groupedData = await fetchData();
            setData(groupedData);
        };
        loadData();
    }, []);

    const filteredData = data.filter(item =>
        (item.artform || '').toLowerCase().includes(searchQuery.toLowerCase())
    );

    const handleItemPress = (item) => {
        navigation.navigate('Details', { item });
    };

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.searchBar}
                placeholder="Search Art Form"
                value={searchQuery}
                onChangeText={setSearchQuery}
            />
            <FlatList
                data={filteredData}
                keyExtractor={(item) => item.artform}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        style={styles.itemContainer}
                        onPress={() => handleItemPress(item)}
                    >
                        <Text style={styles.title}>{item.artform || 'Unknown Art Form'}</Text>
                    </TouchableOpacity>
                )}
            />
        </View>
    );
};

export default HomeScreen;
