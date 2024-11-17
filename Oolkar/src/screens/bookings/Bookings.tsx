import React from 'react';
import { ScrollView } from 'react-native';
import { styles } from './styles';
import HistoryCard from '../../components/history_card/HistoryCard';

// Define the Bookings screen component
const Bookings: React.FC = () => {
    const dummy_data = [
        {
            id: 1,
            shopName: "The Best Shop",
            services: [
                { serviceName: "Hair", price: 50 },
                { serviceName: "Shave", price: 30 },
                { serviceName: "Hair Coloring", price: 100 },
            ],
            bookedAt: 1634567890123, // Example timestamp in milliseconds
            status: "Completed",
            avatarSource: require('../../assets/user/userdummy-blue.png'), // Avatar image
        },
        {
            id: 2,
            shopName: "Premium Barber",
            services: [
                { serviceName: "Beard Trim", price: 60 },
                { serviceName: "Haircut", price: 90 },
            ],
            bookedAt: 1634571890123,
            status: "Pending",
            avatarSource: require('../../assets/user/userdummy-blue.png'),
        },
        {
            id: 3,
            shopName: "Elite Grooming",
            services: [
                { serviceName: "Facial", price: 150 },
                { serviceName: "Haircut", price: 80 },
                { serviceName: "Shave", price: 40 },
            ],
            bookedAt: 1634587890123,
            status: "Completed",
            avatarSource: require('../../assets/user/userdummy-blue.png'),
        },
        {
            id: 4,
            shopName: "Gentlemen's Club",
            services: [
                { serviceName: "Hair Spa", price: 200 },
                { serviceName: "Beard Styling", price: 120 },
            ],
            bookedAt: 1634597890123,
            status: "Cancelled",
            avatarSource: require('../../assets/user/userdummy-blue.png'),
        },
        {
            id: 5,
            shopName: "Luxury Cuts",
            services: [
                { serviceName: "Haircut", price: 90 },
                { serviceName: "Beard Trim", price: 70 },
                { serviceName: "Hair Wash", price: 50 },
            ],
            bookedAt: 1634607890123,
            status: "Completed",
            avatarSource: require('../../assets/user/userdummy-blue.png'),
        },
    ];

    return (
        <ScrollView style={styles.mainContainer}>
            {
                dummy_data.map((elem) => (
                    <HistoryCard
                        key={elem.id}
                        shopName={elem.shopName}
                        services={elem.services}
                        bookedAt={elem.bookedAt}
                        status={elem.status}
                        avatarSource={elem.avatarSource}
                    />
                ))
            }
        </ScrollView>
    );
};

export default Bookings;
