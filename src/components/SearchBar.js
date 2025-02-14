import React from 'react';
import { TextInput } from 'react-native';
import styles from '../styles';

const SearchBar = ({ value, onChangeText }) => {
    return (
        <TextInput
            style={styles.searchBar}
            placeholder="Search Art Form"
            value={value}
            onChangeText={onChangeText}
        />
    );
};

export default SearchBar;
