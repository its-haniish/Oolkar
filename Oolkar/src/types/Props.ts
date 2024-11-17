export interface HistoryCardProps {
    id: number;
    shopName: string;
    services: Service[];
    bookedAt: number; // Timestamp in milliseconds
    status: 'Completed' | 'Pending' | 'Cancelled'; // You can expand this with other statuses if needed
    avatarSource: any; // Assuming `require()` import for images
    totalPrice: Number

}
interface Service {
    serviceName: string;
    price: number;
}
