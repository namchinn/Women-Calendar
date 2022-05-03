import React, { useEffect, useState } from 'react';
import { Calendar } from 'react-native-calendars';
import { LocaleConfig } from 'react-native-calendars';
import Moment from 'react-moment';
import 'moment-timezone';
import moment from 'moment';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {
    StyleSheet,
    View,
    Text,
    ImageBackground,
    TouchableOpacity,
    FlatList,
    Dimensions,
    Image,
    Alert,
    Modal,

} from 'react-native';
import zovolgoonuud from './advice';






LocaleConfig.locales['fr'] = {
    monthNames: [
        '1 / ',
        '2 / ',
        '3 / ',
        '4 / ',
        '5 / ',
        '6 / ',
        '7 / ',
        '8 / ',
        '9 / ',
        '10 / ',
        '11 / ',
        '12 / '
    ],
    monthNamesShort: ['Janv.', 'Févr.', 'Mars', 'Avril', 'Mai', 'Juin', 'Juil.', 'Août', 'Sept.', 'Oct.', 'Nov.', 'Déc.'],
    dayNames: ['Ням', 'Даваа', 'Мягмар', 'Лхагва', 'Пүрэв', 'Баасан', 'Бямба'],
    dayNamesShort: ['Ням.', 'Дав.', 'Мяг.', 'Лха.', 'Пүр.', 'Баа.', 'Бям.'],
    today: "Өнөөдөр"
};
LocaleConfig.defaultLocale = 'fr';

function App({ route, navigation }) {

    const windowWidth = Dimensions.get("window").width;
    const windowHeight = Dimensions.get("window").height;

    const [ymIrdegOdruud, setYmirdegOdruud] = useState([])
    const [jiremsenBoldogOdruud, setJiremsenBoldogOdruud] = useState([])
    const [loww, setLoww] = useState([]);
    const [mediumm, setMediumm] = useState([]);
    const [highh, setHighh] = useState([]);
    const [showLow, setShowLow] = useState(false);
    const [showMedium, setShowMedium] = useState(false);
    const [showHigh, setShowHigh] = useState(false);
    const [showLongToday, setShowLongToday] = useState(false);
    const [fromattedDay, setFormattedDay] = useState('');
    const [helbelzliinText, setHelbelzliinText] = useState('');
    const [anhniiUtga, setAnhniiUtga] = useState(false);
    const [todayZoruu, setTodayZoruu] = useState(0);
    const [anhniiOdor, setAnhniiOdor] = useState(0);
    const [urgeljHugatsaa, setUrgeljHugatsaa] = useState(0);
    const utgaAwah = async () => {
        setAnhniiUtga(true)
        try {
            const value1 = await AsyncStorage.getItem('ymIrehOdruud');
            setYmirdegOdruud(JSON.parse(value1));

        } catch (error) {

        }
        try {
            const value2 = await AsyncStorage.getItem('jiremsenBolohOdruud');
            setJiremsenBoldogOdruud(JSON.parse(value2));
        } catch (error) {

        }

        try {
            const value3 = await AsyncStorage.getItem('low');
            setLoww(JSON.parse(value3));
        } catch (error) {

        }
        try {
            const value4 = await AsyncStorage.getItem('medium');
            setMediumm(JSON.parse(value4));
        } catch (error) {

        }
        try {
            const value5 = await AsyncStorage.getItem('high');
            setHighh(JSON.parse(value5));
        } catch (error) {

        }
        try {
            const value6 = await AsyncStorage.getItem('mochlog');
            setUrgeljHugatsaa(JSON.parse(value6));
        } catch (error) {

        }
    }
    const todayAwah = async () => {
        try {
            const value6 = await AsyncStorage.getItem('odorStump');
            setAnhniiOdor(JSON.parse(value6));
            var date = new Date();
            console.log(date)
            var dateStump = moment(date, 'YYYY-MM-DD').unix();
            console.log(dateStump)
            var dateStumpp = dateStump * 1000;
            var zoruuOdor = dateStumpp - value6
            var zoruuOdorToogoor = zoruuOdor / 86400000
            var zoruuOdorBuhel = Math.floor(zoruuOdorToogoor);
            console.log(zoruuOdorBuhel);

            console.log('zoruu:', todayZoruu);
            var a = true;
            var i = 0;
            var e = urgeljHugatsaa;
            console.log('e:', e);
            while (a) {
                if (zoruuOdorBuhel >= urgeljHugatsaa && i < 40) {
                    zoruuOdorBuhel = zoruuOdorBuhel - urgeljHugatsaa;
                    i++;
                    console.log(zoruuOdorBuhel);
                } else {
                    a = false;
                }
            }
            setTodayZoruu(urgeljHugatsaa - zoruuOdorBuhel);
        } catch (error) {

        }
    }



    useEffect(() => {
        utgaAwah();
        todayAwah();
        //HedenOdorUldsengTootsoh();
    }, []);


    let markk = {};
    ymIrdegOdruud.forEach(day => {

        markk[day] = {
            startingDay: true, color: '#D99E32', endingDay: true
        };
    });
    jiremsenBoldogOdruud.forEach(day => {

        markk[day] = {
            startingDay: true, color: '#8D00CC', endingDay: true
        };
    });
    const CourseCard = ({ course }) => {
        return <View style={{ flexDirection: 'row' }}>
            <TouchableOpacity style={{
                flexDirection: 'row', alignItems: 'center', borderColor: '#ffffff', borderWidth: 1, margin: 5, borderRadius: 25, width: 360, height: 65
                , backgroundColor: '#ffffff'
            }} activeOpacity={0.8} onPress={() => navigation.navigate('AdviceOgoh', { data: course })}>

                <Image style={{ width: 50, height: 50, borderRadius: 5, paddingTop: 10, paddingLeft: 10, margin: 10 }} source={course.image} />
                <Text style={styles.textZovlogooTitle}>{course.name}</Text>
            </TouchableOpacity>
        </View>
    }



    const dayPress2 = day => {

        var dayStamp = day.timestamp;
        var dayFormatted = moment(dayStamp).format("YYYY-MM-DD");
        var dayFormatted2 = moment(dayStamp).format("DD/MM/YYYY");

        if (loww.indexOf(dayFormatted) >= 0) {
            setShowLow(true);
            setFormattedDay(dayFormatted2.toString());

        } else if (mediumm.indexOf(dayFormatted) >= 0) {
            setShowMedium(true);
            setFormattedDay(dayFormatted2.toString());
        } else {
            setShowHigh(true);
            setFormattedDay(dayFormatted2.toString());
        };
    }

    const onDayLongPress = async day => {
        var longDayStump = day.timestamp;
        var longDayStumpFormatted = moment(longDayStump).format("YYYY-MM-DD");
        var longDayStumpFormatted2 = moment(longDayStump).format("DD/MM/YYYY");
        setShowLongToday(true);
        if (ymIrdegOdruud.indexOf(longDayStumpFormatted) >= 0) {
            for (let index = 0; index < ymIrdegOdruud.length; index++) {
                if (ymIrdegOdruud[index] == longDayStumpFormatted) {
                    ymIrdegOdruud.splice(index, 1);
                    setHelbelzliinText('Сарын тэмдэг ирээгүй гэж тэмдэглэлээ.')
                    try {
                        //await AsyncStorage.removeItem('ymIrehOdruud');
                        await AsyncStorage.setItem('ymIrehOdruud', JSON.stringify(ymIrdegOdruud));
                    } catch (error) {

                    }
                }

            }
        } else {
            ymIrdegOdruud.push(longDayStumpFormatted);
            setHelbelzliinText('Сарын тэмдэг ирсэн гэж тэмдэглэлээ.')
            try {
                //await AsyncStorage.removeItem('ymIrehOdruud');
                await AsyncStorage.setItem('ymIrehOdruud', JSON.stringify(ymIrdegOdruud));
            } catch (error) {

            }
        }
    }

    const onTiim = async => {

    }




    return (
        <View style={styles.container}>
            <ImageBackground source={require('../assets/back2.jpg')} resizeMode='cover' style={styles.image}>

                <Modal
                    visible={showLow}
                    transparent
                    onRequestClose={() => setShowLow(false)}
                    animationType='slide'
                >
                    <View style={styles.centered_view}>
                        <View style={styles.modal}>
                            <View style={styles.dayTitle}>
                                <Text style={styles.textModalTitle}>{fromattedDay}</Text>
                            </View>
                            <View style={{ height: 200, justifyContent: 'center', alignItems: 'center' }}>

                                <Text style={styles.textModal}>Жирэмсэн болох магадлал маш бага.</Text>
                            </View>
                            <TouchableOpacity style={{ backgroundColor: '#8D00CC', height: 51, justifyContent: 'center', alignItems: 'center', borderBottomRightRadius: 20, borderBottomLeftRadius: 20 }} onPress={() => setShowLow(false)}>
                                <Text style={styles.textModalButton}>За</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                </Modal>

                <Modal
                    visible={showMedium}
                    transparent
                    onRequestClose={() => setShowMedium(false)}
                    animationType='slide'
                >
                    <View style={styles.centered_view}>
                        <View style={styles.modal}>
                            <View style={styles.dayTitle}>
                                <Text style={styles.textModalTitle}>{fromattedDay}</Text>
                            </View>
                            <View style={{ height: 200, justifyContent: 'center', alignItems: 'center' }}>

                                <Text style={styles.textModal}>Жирэмсэн болох магадлал дунд зэрэг.</Text>
                            </View>
                            <TouchableOpacity style={{ backgroundColor: '#8D00CC', height: 51, justifyContent: 'center', alignItems: 'center', borderBottomRightRadius: 20, borderBottomLeftRadius: 20 }} onPress={() => setShowMedium(false)}>
                                <Text style={styles.textModalButton}>За</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                </Modal>

                <Modal
                    visible={showHigh}
                    transparent
                    onRequestClose={() => setShowHigh(false)}
                    animationType='slide'
                >
                    <View style={styles.centered_view}>
                        <View style={styles.modal}>
                            <View style={styles.dayTitle}>
                                <Text style={styles.textModalTitle}>{fromattedDay}</Text>
                            </View>
                            <View style={{ height: 200, justifyContent: 'center', alignItems: 'center' }}>

                                <Text style={styles.textModal}>Жирэмсэн болох магадлал маш өндөр.</Text>
                            </View>
                            <TouchableOpacity style={{ backgroundColor: '#8D00CC', height: 51, justifyContent: 'center', alignItems: 'center', borderBottomRightRadius: 20, borderBottomLeftRadius: 20 }} onPress={() => setShowHigh(false)}>
                                <Text style={styles.textModalButton}>За</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                </Modal>

                <Modal
                    visible={showLongToday}
                    transparent
                    onRequestClose={() => setShowLongToday(false)}
                    animationType='slide'

                >
                    <View style={styles.centered_view}>
                        <View style={styles.modal}>
                            <View style={styles.dayTitle}>
                                <Text style={styles.textModalTitle2}>Сарын тэмдгийн хэлбэлзэл</Text>
                            </View>
                            <View style={{ height: 200, justifyContent: 'center', alignItems: 'center' }}>
                                <Text style={styles.textModal2}>{helbelzliinText}</Text>
                                {/* <Text style={styles.textModal2}>Хэрэв таны сарын тэмдэгт хэлбэлзэл орсон бол хуанли дээрээ тэмдэглэл хийгээрэй.</Text> */}
                            </View>
                            <TouchableOpacity style={{ backgroundColor: '#8D00CC', height: 51, justifyContent: 'center', alignItems: 'center', borderBottomRightRadius: 20, borderBottomLeftRadius: 20 }} onPress={() => setShowLongToday(false)}>
                                <Text style={styles.textModalButton}>За</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                </Modal>

                <View style={styles.container1}>
                    <View style={styles.container3}>
                        <Text style={styles.textTitle1}>{todayZoruu}</Text>
                        <Text style={styles.textTitle}>Бүсгүйн хуанли</Text>
                        <TouchableOpacity style={{}} onPress={() => navigation.navigate('Settings')}>
                            <Image style={{ width: 25, height: 25, marginLeft: 60, marginTop: 15, tintColor: '#fff', }} source={require('../assets/setting.png')} />
                        </TouchableOpacity>
                    </View>
                    <Calendar
                        onDayLongPress={onDayLongPress}
                        onDayPress={dayPress2
                        }
                        enableSwipeMonths={true}
                        hideExtraDays={true}
                        style={{
                            borderRadius: 25,
                            //borderBottomLeftRadius: 25,
                            //borderBottomRightRadius: 25,
                            height: 400,
                            shadowColor: '#000',
                            shadowOffset: { width: 1, height: 3 },
                            elevation: 4,
                            margin: 10,
                        }}
                        theme={{
                            backgroundColor: '#0F88F2',
                            calendarBackground: '#0F88F2',
                            textSectionTitleColor: '#ffffff',
                            dayTextColor: '#ffffff',
                            textMonthFontSize: 18,
                            monthTextColor: '#ffffff',
                            //textMonthFontWeight: 'bold',
                            arrowColor: '#ffffff',
                            //textDayHeaderFontWeight: 'bold',
                            textMonthFontFamily: 'Lobster-Regular',
                            textDayFontFamily: 'Lobster-Regular',
                            textDayHeaderFontFamily: 'Lobster-Regular',
                            todayTextColor: '#0FF2B2',
                        }}
                        firstDay={1}
                        markingType='period'
                        markedDates={markk}
                    />
                </View>
                <View style={styles.container2}>
                    <View style={styles.container4}>
                        <Text style={styles.text}>Зөвөлгөөнүүд</Text>
                        <View style={{ width: 26, height: 26, borderRadius: 13, marginLeft: 80, backgroundColor: '#8D00CC', marginTop: 7 }} />
                        <View style={{ marginHorizontal: 5, marginTop: 18, backgroundColor: '#ffffff', width: 10, height: 2 }} />
                        <Image style={{ width: 26, height: 26, borderRadius: 10, marginTop: 7 }} source={require('../assets/baby.png')} />

                        <View style={{ width: 26, height: 26, borderRadius: 13, marginLeft: 30, backgroundColor: '#D99E32', marginTop: 7 }} />
                        <View style={{ marginHorizontal: 5, marginTop: 18, backgroundColor: '#ffffff', width: 10, height: 2 }} />
                        <Image style={{ width: 26, height: 26, borderRadius: 10, marginTop: 7 }} source={require('../assets/heregleltei.png')} />
                    </View>
                    <FlatList

                        showsVerticalScrollIndicator={false}
                        numColumns={1}
                        data={zovolgoonuud}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={({ item }) => <CourseCard course={item} />}
                    />
                </View>
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        //backgroundColor: '#937EBF',
        flex: 5,
    },
    image: {
        flex: 1,
        justifyContent: "center"
    },
    container1: {
        flex: 3,
        marginBottom: 70
    },
    container2: {
        backgroundColor: '#076DF2',
        flex: 2,
        marginBottom: 0,
        marginHorizontal: 10,
        marginTop: -10,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        padding: 10,
    },
    container3: {
        marginTop: 10,
        marginHorizontal: 10,
        backgroundColor: '#0F88F2',
        justifyContent: 'center',
        alignContent: 'center',
        textAlign: 'center',
        flexDirection: 'row',
        borderRadius: 25
    },
    container4: {
        flexDirection: 'row',
        borderBottomColor: '#ffffff',
        borderBottomWidth: 1,
        marginBottom: 5
    },
    text: {
        justifyContent: 'center',
        color: '#ffffff',
        //fontWeight: 'bold',
        //fontSize: 20,
        fontFamily: 'Lobster-Regular',
        fontSize: 15,
        paddingLeft: 10,
        paddingTop: 10,
    },
    textTitle: {
        margin: 15,
        marginLeft: 80,
        justifyContent: 'center',
        color: '#ffffff',
        //fontWeight: 'bold',
        marginTop: 10,
        //fontSize: 20,
        fontFamily: 'Lobster-Regular',
        fontSize: 20,

    },
    textTitle1: {
        margin: 0,
        justifyContent: 'center',
        color: '#ffffff',
        //fontWeight: 'bold',
        marginTop: 10,
        //paddingTop: 10,
        //fontSize: 20,
        fontFamily: 'Lobster-Regular',
        fontSize: 20,

    },
    textZovlogooTitle: {
        justifyContent: 'center',
        color: '#0F88F2',
        //fontWeight: 'bold',
        margin: 5,
        //fontSize: 20,
        fontFamily: 'Lobster-Regular',
        fontSize: 15,
        textAlign: 'center',
        marginLeft: 3,
        padding: 5
    },
    centered_view: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#00000099',
    },
    modal: {
        width: 300,
        height: 300,
        backgroundColor: '#0F88F2',
        borderRadius: 20,
    },
    dayTitle: {
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#D99E32',
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
    },
    textModal: {
        justifyContent: 'center',
        color: '#ffffff',
        //fontWeight: 'bold',
        //fontSize: 20,
        fontFamily: 'Lobster-Regular',
        fontSize: 15,
        textAlign: 'center',

    },
    textModalTitle: {
        justifyContent: 'center',
        color: '#ffffff',
        //fontWeight: 'bold',
        //fontSize: 20,
        fontFamily: 'Lobster-Regular',
        fontSize: 20,
        textAlign: 'center',
    },
    textModalButton: {

        justifyContent: 'center',
        color: '#ffffff',
        //fontWeight: 'bold',
        //fontSize: 20,
        fontFamily: 'Lobster-Regular',
        fontSize: 15,
        textAlign: 'center',
        paddingVertical: 5,

    },
    dayTitle2: {
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#D99E32',
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
    },
    textModal2: {
        justifyContent: 'center',
        color: '#ffffff',
        //fontWeight: 'bold',
        //fontSize: 20,
        fontFamily: 'Lobster-Regular',
        fontSize: 16,
        textAlign: 'center',

    },
    textModalTitle2: {
        justifyContent: 'center',
        color: '#ffffff',
        //fontWeight: 'bold',
        //fontSize: 20,
        fontFamily: 'Lobster-Regular',
        fontSize: 17,
        textAlign: 'center',
        padding: 5
    },
    textModalButton2: {

        justifyContent: 'center',
        color: '#ffffff',
        //fontWeight: 'bold',
        //fontSize: 20,
        fontFamily: 'Lobster-Regular',
        fontSize: 15,
        textAlign: 'center',
        paddingVertical: 5,

    }
})

export default App;