import React from 'react';
import { View, Text, Image, ImageSourcePropType } from 'react-native';
import { styles } from './styles';

// Define the props type for ServicePoster component
interface ServicePosterProps {
    index: number; // index should be a number
    poster: ImageSourcePropType; // poster should be a valid image source type
    service: string; // service should be a string
}

const ServicePoster: React.FC<ServicePosterProps> = ({ index, poster, service }) => {
    return (
        <View key={index} style={styles.posterContainer}>
            <Image source={poster} style={styles.poster} />
            <Text style={styles.serviceText} >{service}</Text>
        </View>
    );
};

export default ServicePoster;
