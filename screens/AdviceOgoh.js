import React, { useState, useEffect } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    Button,
    TextInput,
    ImageBackground,
    Alert,
    ScrollView,
    Dimensions
} from 'react-native';

const windowWidth = Dimensions.get('window').width;

function App({ route }) {





    const { data } = route.params;

    return (
        <ScrollView>
            <View style={{elevation:4}}>
                <Image style={{  borderRadius: 5, height: 350, width: windowWidth, marginTop: -25 }} source={require('../assets/doctors.jpg')} />
            </View>
            <View style={styles.container2}>
                <Image style={{ width: 26, height: 26, borderRadius: 10, marginLeft: 5 , marginTop: 4,}} source={data.image} />
                <Text style={styles.textAsuult}>{data.name}</Text>
            </View>
            {/* <ScrollView style={styles.scrollView}>
                <Text style={styles.textMedeelel}>{data.answer}</Text>
            </ScrollView> */}
            <View style={styles.container3}>
                <Text style={styles.textMedeelel}>{data.answer}</Text>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container2: {
        paddingLeft: 25,
        marginTop: 10,
        marginHorizontal: 10,
        backgroundColor: '#ffffff',
        justifyContent: 'flex-start',
        // alignContent: 'center',
        // textAlign: 'center',
        flexDirection: 'row',
        borderTopRightRadius: 25,
        borderTopLeftRadius: 25,
        borderBottomColor: '#076DF2',
        borderBottomWidth: 1,
    },
    container3: {
        //marginTop: 10,
        marginHorizontal: 10,
        backgroundColor: '#ffffff',
        justifyContent: 'flex-start',
        // alignContent: 'center',
        // textAlign: 'center',
        flexDirection: 'row',
        borderBottomLeftRadius: 25,
        borderBottomRightRadius: 25,
    },
    textAsuult: {
        justifyContent: 'center',
        color: '#076DF2',
        //fontWeight: 'bold',
        //fontSize: 20,
        fontFamily: 'Lobster-Regular',
        fontSize: 18,
        padding: 5,
        paddingBottom: -5,
        marginLeft: 5
        // borderBottomColor: '#076DF2',
        // borderBottomWidth: 1,
    },
    textMedeelel: {
        justifyContent: 'center',
        color: '#0F88F2',
        //fontWeight: 'bold',
        //fontSize: 20,
        fontFamily: 'Lobster-Regular',
        fontSize: 14,
        paddingHorizontal: 12,
        paddingBottom: 12,
        paddingTop: 5,
    },
    scrollView: {
        marginHorizontal: 20,
    },
})

export default App;