import React from 'react';
import { Text, View } from 'react-native';
import styles from './styles';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { COLORS } from '../../Constants/COLORS';

const CategoryComponent = (props) => {

    let { icon, name, person } = props;

    return (
        <View style={styles.container}>
            <MaterialCommunityIcons name={icon} size={30} color={COLORS.white} style={styles.icon} />
            <View>
                <Text>{name}</Text>
                <Text>{person}</Text>
            </View>
        </View>
    );
};

export default CategoryComponent;