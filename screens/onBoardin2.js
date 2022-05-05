import React, { useState, useEffect } from 'react';
import Onboarding from 'react-native-onboarding-swiper';
import {
    StyleSheet,
    View,
    Text,
    Image,
    Button,
    TextInput,
    TouchableOpacity
} from 'react-native';


function App({ route, navigation }) {

    const next = () => {
        navigation.navigate('MainActivity')
    }
    return (

        <Onboarding
            onDone={next}
            onSkip={next}
            titleStyles={styles.text}
            subTitleStyles={styles.text2}
            pages={[
                {
                    backgroundColor: '#ffffff',
                    image: <Image style={styles.image} source={require('../assets/screenshot.jpg')} />,
                    title: 'Бүсгүйн хуанли',
                    subtitle: 'Хуанли байнга хөтөлснөөр та бие сэтгэл болон ариун цэврийн хувьд зөв дадал хэвшилтэй болно.',
                },
                {
                    backgroundColor: '#ffffff',
                    image: <Image style={styles.image} source={require('../assets/baby.png')} />,
                    title: 'Төлөвлөлт ба хамгаалалт',
                    subtitle: 'Та хүүхэдтэй болохоор төлөвлөж байгаа эсвэл хүсээгүй жирэмслэлтээс сэргийлж байгаа бол хуанлиг ашиглан "хэзээ" гэдгээ мэдэж аваарай.',
                },
                {
                    backgroundColor: '#ffffff',
                    image: <Image style={styles.image} source={require('../assets/doctors.jpg')} />,
                    title: 'Эрүүл мэнд',
                    subtitle: 'Бүсгүйн зөвлөгөө хэсгээс та өөр хэрэгтэй эрүүл мэндийн зөвлөгөөнүүдээ аваарай.',
                },

            ]}
        />

    )
}

const styles = StyleSheet.create({
    image: {
        marginTop: -100,
        height: 300,
        width: 300,
        marginBottom: 0,
    },
    text: {
        
        color: '#0F88F2',
        //fontWeight: 'bold',
        //fontSize: 20,
        fontFamily: 'Lobster-Regular',
        fontSize: 25,
        
    },
    text2: {
        
        color: '#0F88F2',
        //fontWeight: 'bold',
        //fontSize: 20,
        fontFamily: 'Lobster-Regular',
        fontSize: 15,
        marginHorizontal: 0
    },
    text3: {
        
        color: '#0F88F2',
        //fontWeight: 'bold',
        //fontSize: 20,
        fontFamily: 'Lobster-Regular',
        fontSize: 15,
        marginHorizontal: 0
    },
})

export default App;