import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    Button,
} from 'react-native';



function App({ navigation }) {

    const next = () => {
        navigation.navigate('Asuult1');
    }

    return (
        <View style={styles.main}>
            <Text style={styles.text}>It will be SplashScreen</Text>
            <Button
            title='Next'
            onPress={next}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    main: {
        justifyContent:'center',
        marginTop: 100,
    },
    text: {
        
        color: '#000',
    }
})

export default App;