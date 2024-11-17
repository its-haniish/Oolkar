declare module 'react-native-masonry-list' {
    import { Component } from 'react';
    import { StyleProp, ViewStyle } from 'react-native';

    interface MasonryListProps {
        images: { uri: string }[];
        columns?: number;
        spacing?: number;
        style?: StyleProp<ViewStyle>;
    }

    export default class MasonryList extends Component<MasonryListProps> { }
}
