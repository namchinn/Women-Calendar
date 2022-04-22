
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

    const [urgeljlehHugatsaa, setUrgeljlehHugatsaa] = useState(5);

    useEffect(() => {
        console.log(urgeljlehHugatsaa);
    })

    const next = () => {
        navigation.navigate('Asuult2');
    }
    return (
        <View style={styles.container1}>

            <View style={styles.container2}>
                <Image style={{ width: 275, height: 275 }} source={require('../android/assets/tsagtai.png')} />
                <Text style={styles.text}>Таны сарын тэмдэг хэд хоног үргэлжилдэг вэ?(4-7 хоног)</Text>
                <TextInput
                    style={styles.input}
                    placeholder='5'
                    keyboardType='numeric'
                    onChangeText={(value) => setUrgeljlehHugatsaa(value)}
                />
                <Button
                    title='Next'
                    onPress={next}
                />
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