import React, { useState, useEffect } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    Button,
    TextInput
} from 'react-native';


function App({ route, navigation }) {

    const [mochlogiinUrt, setMochlogiinUrt] = useState(28);

    useEffect(() => {
        console.log(mochlogiinUrt);
    })

    const next = () => {
        navigation.navigate('Asuult3');
    }
    return (
        <View style={styles.container1}>

            <View style={styles.container2}>
                <Image style={{ width: 275, height: 275 }} source={require('../android/assets/calendartai.png')} />
                <Text style={styles.text}>Та сарын тэмдгийн мөчлөгийн уртаа оруулнуу.(21-40 хоног)</Text>
                <TextInput
                    style={styles.input}
                    placeholder='28'
                    keyboardType='numeric'
                    onChangeText={(value) => setMochlogiinUrt(value)}
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
        width: 100,
        height: 50,
        fontSize: 20,
        textAlign: 'center',
        borderWidth: 1,
        borderRadius: 10,
        color: '#2C478D',
        borderColor: '#2C478D',
        margin: 12,
        padding: 10,
    }
})

export default App;