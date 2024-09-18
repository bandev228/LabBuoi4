import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import FontAwesome from '@expo/vector-icons/FontAwesome';
import MenuItem from './MenuItem';

const FoodItem = ({ item }) => {
    const data = [item];
    return (
        <View>
            {data?.map((item, index) => (
                <View>
                    <Pressable style={{ margin: 10, flexDirection: "row", alignItems: "center", justifyContent: "space-between" }} key={index}>
                        <Text style={{fontSize:19, fontWeight:"bold"}}>{item?.name} ({item?.items?.length})</Text>
                        <FontAwesome name="angle-down" size={20} color="black" />
                    </Pressable>
                    {item?.items?.map((item, index) => (
                        <MenuItem key={index} item={item} />
                    ))}
                </View>
            ))}
        </View>
    )
}

export default FoodItem

const styles = StyleSheet.create({})