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
                    image: <Image style={styles.image} source={require('../assets/menstruation.png')} />,
                    title: 'Бүсгүйн хуанли',
                    subtitle: 'Бүсгүйн хуанли ашиглах гарын авлага.',
                },
                {
                    backgroundColor: '#ffffff',
                    image: <Image style={styles.image} source={require('../assets/1.png')} />,
                    title: 'Сарын тэмдэг ирэх өдрүүд',
                    subtitle: '"Цэцэг дэлбээлэх" өдрүүдийг дээрх өнгөөр тэмдэглэв.',
                },
                {
                    backgroundColor: '#ffffff',
                    image: <Image style={styles.image} source={require('../assets/2.png')} />,
                    title: 'Овуляцийн өдрүүд',
                    subtitle: 'Дээрх тэмдэглэсэн өдрүүд нь жирэмсэн болох хамгийн өндөр магадлалтай үе буюу овуляцийн өдөр ба түүний өмнөх 3 өдөр юм.',
                },
                {
                    backgroundColor: '#ffffff',
                    image: <Image style={styles.image} source={require('../assets/3.png')} />,
                    title: 'Өнөөдөр',
                    subtitle: 'Гэрэлт өдөр.',
                },
                {
                    backgroundColor: '#ffffff',
                    image: <Image style={styles.image} source={require('../assets/4.png')} />,
                    title: 'Дараагийн сарын тэмдэг',
                    subtitle: 'Дараагийн сарын тэмдэг хэд хоногийн дараа эхлэхийг энэ хэсгээс харж болно.',
                },
                {
                    backgroundColor: '#ffffff',
                    image: <Image style={styles.image} source={require('../assets/5.png')} />,
                    title: 'Ямар өдөр вэ?',
                    subtitle: 'Хүссэн өдөр дээрээ дарж жирэмсэн болох магадлалаа хараарай.',
                },
                {
                    backgroundColor: '#ffffff',
                    image: <Image style={styles.image} source={require('../assets/6.png')} />,
                    title: 'Сарын тэмдгийн хэлбэлзэл',
                    subtitle: 'Сарын тэмдэгт тань хэлбэлзэл орсон бол засах өдрөө удаан дарж тухайн өдрийн тэмдэглэлийг өөрчлөөрэй.',
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