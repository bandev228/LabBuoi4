import React, { useState, useRef } from 'react';
import { View, Image, FlatList, Dimensions, StyleSheet } from 'react-native';

const { width } = Dimensions.get('window');

const Carousel = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const flatListRef = useRef(null);

    const images = [
        "https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=600",
    ];

    const renderItem = ({ item }) => (
        <View style={styles.slideContainer}>
            <Image source={{ uri: item }} style={styles.image} />
        </View>
    );

    const onViewableItemsChanged = useRef(({ viewableItems }) => {
        if (viewableItems.length > 0) {
            setActiveIndex(viewableItems[0].index);
        }
    }).current;

    return (
        <View style={styles.container}>
            <FlatList
                ref={flatListRef}
                data={images}
                renderItem={renderItem}
                horizontal
                pagingEnabled
                showsHorizontalScrollIndicator={false}
                onViewableItemsChanged={onViewableItemsChanged}
                viewabilityConfig={{ itemVisiblePercentThreshold: 50 }}
                keyExtractor={(item, index) => index.toString()}
            />
            <View style={styles.pagination}>
                {images.map((_, index) => (
                    <View
                        key={index}
                        style={[
                            styles.dot,
                            index === activeIndex ? styles.activeDot : null
                        ]}
                    />
                ))}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    slideContainer: {
        width: width,
        alignItems: 'center',
    },
    image: {
        width: '94%',
        height: 200,
        borderRadius: 6,
        marginTop: 10,
    },
    pagination: {
        flexDirection: 'row',
        position: 'absolute',
        bottom: 10,
        alignSelf: 'center',
    },
    dot: {
        height: 10,
        width: 10,
        borderRadius: 5,
        backgroundColor: '#90A4AE',
        margin: 8,
    },
    activeDot: {
        backgroundColor: '#13274F',
    },
});

export default Carousel;