import React, { useState, useEffect } from 'react';
import { withNavigation } from 'react-navigation';
import { View, StyleSheet, Text, FlatList, Image, TouchableOpacity } from 'react-native';


function Salutation(){
    return(
       
        <View style={styles.container}>
            <Text styles={styles.nome}>Gustavo Braz</Text>
        </View>
            
    )
};

const styles = StyleSheet.create({
    nome: {
        color: '#FFF',
        fontSize: 20
        
    },
    container: {
        width: '60%'
    }
})

export default Salutation;