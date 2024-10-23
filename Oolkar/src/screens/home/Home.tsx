import React, { useState, useRef, useEffect } from 'react';
import { Text, View, ScrollView, Image, Dimensions } from 'react-native';
import { styles } from './styles';
import { Switch, Divider } from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';


const Home: React.FC = () => {
    const [isMale, setIsMale] = useState<boolean>(true);
    const scrollRef = useRef<ScrollView>(null);
    const screenWidth = Dimensions.get('window').width;

    // Dummy images for the scroll view
    const images = [
        require('../../assets/1.jpg'),
        require('../../assets/2.jpg'),
        require('../../assets/3.jpg'),
    ];

    useEffect(() => {
        let currentIndex = 0;

        const interval = setInterval(() => {
            currentIndex = (currentIndex + 1) % images.length;

            if (scrollRef.current) {
                scrollRef.current.scrollTo({
                    x: currentIndex * screenWidth, // Scroll to the next image
                    animated: true,
                });
            }
        }, 5000); // Change image every 10 seconds

        // Clear interval on component unmount
        return () => clearInterval(interval);
    }, [images.length, screenWidth]);

    return (
        <ScrollView style={styles.container}>
            {/* Horizontal scroll with snapping to center */}
            <ScrollView
                ref={scrollRef}
                horizontal
                pagingEnabled // Ensures only one image is shown per scroll
                snapToAlignment="center" // Snaps the image to center
                showsHorizontalScrollIndicator={false}
                style={styles.horizontalScroll}
            >
                {images.map((image, index) => (
                    <View key={index} style={styles.imageContainer}>
                        <Image source={image} style={styles.image} />
                    </View>
                ))}
            </ScrollView>

            {/* category section */}
            <View>
                <Text style={styles.categoryTitle}>
                    Select Category
                </Text>

                <View style={styles.categoryContainer}>
                    <View style={styles.categoryIconContainer}>

                        <Ionicons name='male' size={50} color={"skyblue"} />
                        <Text style={styles.categoryIconMaleText}>Male</Text>
                    </View>
                    <Switch
                        style={styles.switch}
                        value={isMale}
                        onValueChange={() => setIsMale(!isMale)}
                        trackColor={{ false: 'lightgray', true: 'lightgray' }} // Switch background for Male
                        thumbColor={isMale ? "purple" : "skyblue"} // Thumb color for Male
                    />
                    <View style={styles.categoryIconContainer}>

                        <Ionicons name='female' size={50} color={"purple"} />
                        <Text style={styles.categoryIconFemaleText}>Female</Text>
                    </View>

                </View>

            </View>

            <Divider style={{
                marginBottom: 10,
            }} />

            {/* Grid view of services offered */}
            <Text style={styles.categoryTitle}>
                Popular Services
            </Text>

            <View style={styles.gridContainer}>

                {images.map((poster, index) => (
                    <View key={index} style={styles.posterContainer}>
                        <Image source={poster} style={styles.poster} />
                    </View>
                ))}

                {images.map((poster, index) => (
                    <View key={index} style={styles.posterContainer}>
                        <Image source={poster} style={styles.poster} />
                    </View>
                ))}

                {images.map((poster, index) => (
                    <View key={index} style={styles.posterContainer}>
                        <Image source={poster} style={styles.poster} />
                    </View>
                ))}
            </View>


        </ScrollView >
    );
};

export default Home;
