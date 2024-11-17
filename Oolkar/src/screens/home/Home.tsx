import React, { useState, useRef, useEffect } from 'react';
import { Text, View, ScrollView, Image, Dimensions } from 'react-native';
import { styles } from './styles';
import { Switch, Divider } from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ServicePoster from '../../components/service_poster/ServicePoster';

const Home: React.FC = () => {
    const [isFemale, setIsFemale] = useState<boolean>(false);
    const scrollRef = useRef<ScrollView>(null);
    const screenWidth = Dimensions.get('window').width;

    // Dummy images for the scroll view
    const images = [
        {
            poster: require('../../assets/ads/1.png'),
            service: 'Haircut',
        },
        {
            poster: require('../../assets/ads/2.png'),
            service: 'Hair Color',
        },
        {
            poster: require('../../assets/ads/3.png'),
            service: 'Shave',
        },

    ];

    const servicesMale = [
        {
            icon: require('../../assets/service/hair-cut-male.png'),
            service: 'Haircut',
        },
        {
            icon: require('../../assets/service/hair-color-male.png'),
            service: 'Hair Color',
        },
        {
            icon: require('../../assets/service/skin-care-male.png'),
            service: 'Skin Care',
        },
        {
            icon: require('../../assets/service/makeup-male.png'),
            service: 'Makeup',
        },
        {
            icon: require('../../assets/service/manicure-male.png'),
            service: 'Mani and Pedi',
        },
        {
            icon: require('../../assets/service/spa-male.png'),
            service: 'Spa & Massage',
        },
    ];

    const servicesFemale = [
        {
            icon: require('../../assets/service/hair-cut-female.png'),
            service: 'Haircut',
        },
        {
            icon: require('../../assets/service/hair-color-female.png'),
            service: 'Hair Color',
        },
        {
            icon: require('../../assets/service/skin-care-female.png'),
            service: 'Skin Care',
        },
        {
            icon: require('../../assets/service/makeup-female.png'),
            service: 'Makeup',
        },
        {
            icon: require('../../assets/service/manicure-female.png'),
            service: 'Mani and Pedi',
        },
        {
            icon: require('../../assets/service/spa-female.png'),
            service: 'Spa & Massage',
        },
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
                        <Image source={image.poster} style={styles.image} />
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
                        value={isFemale}
                        onValueChange={() => setIsFemale(!isFemale)}
                        trackColor={{ false: 'lightgray', true: 'lightgray' }} // Switch background for Male
                        thumbColor={isFemale ? "purple" : "skyblue"} // Thumb color for Male

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

                {
                    isFemale ?
                        servicesFemale.map((elem, index) => (
                            <ServicePoster service={elem.service} index={index} key={index} poster={elem.icon} />
                        )) :
                        servicesMale.map((elem, index) => (
                            <ServicePoster service={elem.service} index={index} key={index} poster={elem.icon} />
                        ))

                }

            </View>


        </ScrollView >
    );
};

export default Home;
