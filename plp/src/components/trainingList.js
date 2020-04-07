import React, { useState, useEffect } from 'react';
import { withNavigation } from 'react-navigation';
import { View, StyleSheet, Text, FlatList, Image, TouchableOpacity } from 'react-native';
import users from '../user'
import avatar from '../../assets/avatar.png';
import gustavo from '../../assets/gustavo.png';
import Icon from 'react-native-vector-icons/FontAwesome';

function TrainingList(){
    return(
        <FlatList
            
            style={styles.list}
            data={users}
            keyExtractor={user => user.id}
            renderItem={({ item }) => (
                <View style={styles.container}>
                    <View style={styles.listItem}>
                        <Image style={styles.avatar} source={avatar}></Image>
                        <Text style={styles.name}>{item.Nome}</Text>
                    
                    </View>
                    <View style={styles.iconContainer}> 
                        <Icon style={styles.icon} name='circle' size={15} color={item.Presenca ? 'green' : '#c4c6c8'}/>
                    </View>
                </View>
            )}
        />
    )
};

const styles = StyleSheet.create({
    list: {
        paddingHorizontal: 30,
        
    },
    container: {
        flexDirection: 'row',
    },
    listItem: {
        flexDirection: 'row',
        marginBottom: 15,
        alignItems: 'center',
        width: "90%",

    },
    avatar: {
        width:40,
        height: 40,
        resizeMode: 'contain',
        borderRadius: 50
    },
    name: {
        marginLeft: 15,
        fontSize: 20,
        fontWeight: 'bold',
        color: '#333'
    },
    iconContainer: {
        width: '10%',

    },
    icon: {
        marginTop: 15,
        marginLeft: 10
    }
})

export default TrainingList;