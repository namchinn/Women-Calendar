import React, { useState, useEffect } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    Button,
    TextInput
} from 'react-native';


function App({ navigation }) {

    return (
        <View style={styles.container1}>

            <View style={styles.container2}>
                <Text style={styles.text}>Settings screen</Text>              
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container1: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        //backgroundColor: '#ffdfaf',
    },
    container2: {
        flex: 1,
        //backgroundColor: '#ff1',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: -100,
    },
    container3: {
        flex: 2,
        //backgroundColor: '#000',
        width: 300,
    },
    text: {
        justifyContent: 'center',
        color: '#2C478D',
        fontSize: 20,
        textAlign: 'center',
        marginTop: 10,
        marginHorizontal: 5,
    },
    input: {
        fontSize: 20,
        textAlign: 'center',
        color: '#2C478D',
        height: 50,
        width: 100,
        margin: 12,
        borderWidth: 1,
        borderColor: '#2C478D',
        borderRadius: 10,
        padding: 10,
    },
})

export default App;