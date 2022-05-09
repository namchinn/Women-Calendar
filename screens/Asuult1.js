import React, { useState } from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';
import Moment from 'react-moment';
import 'moment-timezone';
import moment from 'moment';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
    StyleSheet,
    View,
    Text,
    Image,
    Button,
    TextInput,
    TouchableOpacity,
    Alert,
    Modal
}
    from 'react-native';


function App({ route, navigation }) {

    const [urgeljlehHugatsaa, setUrgeljlehHugatsaa] = useState(5);
    const [mochlogiinUrt, setMochlogiinUrt] = useState(28);

    const [date, setDate] = useState(new Date());
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);
    const [jil, setJil] = useState('2022');
    const [sar, setSar] = useState('04');
    const [odor, setOdor] = useState('06');
    const [unixTimestampp, setUnixTimestampp] = useState(1645530087000);
    const YmIrehodruudd = [];
    const jiremsenBolohOdruud = [];
    const low = [];
    const medium = [];
    const high = [];

    const [modal1, setModal1] = useState(false);
    const [modal2, setModal2] = useState(false);



    const onChange = async (event, selectedDate) => {
        const currenDate = selectedDate || date;
        setShow(Platform.OS === 'ios');
        setDate(currenDate);

        let tempDate = new Date(currenDate);
        let jil = tempDate.getFullYear();
        let sar = tempDate.getMonth() + 1;
        let odor = tempDate.getDate();

        setJil(jil);
        setOdor(odor);
        setSar(sar);

        var unixTimestam = moment(currenDate, 'YYYY-MM-DD').unix();
        var unixTimestamp = unixTimestam * 1000;
        setUnixTimestampp(unixTimestamp);
        var datee = new Date(unixTimestamp);
        var a = datee.getFullYear();
        var b = datee.getMonth() + 1;
        var c = datee.getDate();



    }


    const showMode = (currentMode) => {
        setShow(true);
        setMode(currentMode);
    }

    const odorNemeh = async () => {
        let mochlog = mochlogiinUrt * 86400000 - (urgeljlehHugatsaa) * 86400000;
        let dawtalt = urgeljlehHugatsaa;
        let timeSt = unixTimestampp;
        for (let q = 0; q < 36; q++) {
            for (let i = 0; i < dawtalt; i++) {
                const date = new Date(timeSt);
                const a = moment(date).format("YYYY-MM-DD");
                YmIrehodruudd.push(a);
                timeSt += 86400000;
            }
            timeSt += mochlog;
        }
        try {
            await AsyncStorage.setItem('ymIrehOdruud', JSON.stringify(YmIrehodruudd));
        } catch (error) {

        }

        let ovaliatsiinOdor = mochlogiinUrt - 15;
        let odriinDawtamj = parseInt(mochlogiinUrt) + 3;
        let timeStt = (ovaliatsiinOdor * 86400000) + unixTimestampp;
        for (let qq = 0; qq < 36; qq++) {

            for (let ii = 0; ii < 4; ii++) {
                const daate = new Date(timeStt);
                const b = moment(daate).format("YYYY-MM-DD");
                jiremsenBolohOdruud.push(b);
                timeStt -= 86400000;
            }
            timeStt = timeStt + odriinDawtamj * 86400000 + 86400000
            //timeStt = 86400000 * odriinDawtamj + timeStt
        }
        try {
            await AsyncStorage.setItem('jiremsenBolohOdruud', JSON.stringify(jiremsenBolohOdruud));
        } catch (error) {

        }
        try {
            await AsyncStorage.setItem('odorStump', JSON.stringify(unixTimestampp));
        } catch (error) {

        }
        try {
            await AsyncStorage.setItem('mochlog', JSON.stringify(mochlogiinUrt));
        } catch (error) {

        }
        
        
        let timeSttt = unixTimestampp;
        let ehniiLow = parseInt(urgeljlehHugatsaa) + 3;
        let mochlogiinUrttt = parseInt(mochlogiinUrt);
        let lastCount = mochlogiinUrttt - ehniiLow - 9 - 3;

        for (let iii = 1; iii <= 36; iii++) {
            for (let index = 1; index <= ehniiLow; index++) {
                const dateee = new Date(timeSttt);
                const aa = moment(dateee).format("YYYY-MM-DD");
                low.push(aa);
                timeSttt += 86400000;
            }
            for (let indexxxxxx = 1; indexxxxxx <= 2; indexxxxxx++) {
                const dateee = new Date(timeSttt);
                const aa = moment(dateee).format("YYYY-MM-DD");
                medium.push(aa);
                timeSttt += 86400000;
            }
            
            for (let indexx = 1; indexx <= 7; indexx++) {
                const dateeee = new Date(timeSttt);
                const aaa = moment(dateeee).format("YYYY-MM-DD");
                high.push(aaa);
                timeSttt += 86400000;
            }
            
            for (let indexxx = 1; indexxx <= 3; indexxx++) {
                const dateeeee = new Date(timeSttt);
                const aaaa = moment(dateeeee).format("YYYY-MM-DD");
                medium.push(aaaa);
                timeSttt += 86400000;
            }
            
            for (let indexxxx = 1; indexxxx <= lastCount; indexxxx++) {
                const dateeeeee = new Date(timeSttt);
                const aa = moment(dateeeeee).format("YYYY-MM-DD");
                low.push(aa);
                timeSttt += 86400000;
            }

        }
        try {
            await AsyncStorage.setItem('low', JSON.stringify(low));
        } catch (error) {
            console.log(error)
        }
        try {
            await AsyncStorage.setItem('medium', JSON.stringify(medium));
        } catch (error) {
            console.log(error)
        }
        try {
            await AsyncStorage.setItem('high', JSON.stringify(high));
        } catch (error) {
            console.log(error)
        }
        navigation.navigate('onBoardin2', { id: YmIrehodruudd });
    }

    const alert1 = day => {
        setModal1(true)
    }
    const alert2 = day => {
        setModal2(true)
    }


    return (
        <View>
            <Modal
                    visible={modal1}
                    transparent
                    onRequestClose={() => setModal1(false)}
                    animationType= 'slide'
                >
                    <View style={styles.centered_view}>
                        <View style={styles.modal}>
                            <View style={styles.dayTitle}>
                                <Text style={styles.textModalTitle}>Сарын тэмдэг үргэлжлэх хугацаа:</Text>
                            </View>
                            <View style={{height:200, justifyContent: 'center', alignItems: 'center'}}>

                                <Text style={styles.textModal}>Сарын тэмдэг эхэлж ирсэн өдрөөс сүүлд ирсэн өдөр хүртэлх хугацаа юм. Хэвийн хугацаа 3-7 хоног байна.</Text>
                            </View>
                            <TouchableOpacity style={{ backgroundColor: '#8D00CC', height: 51, justifyContent: 'center', alignItems: 'center', borderBottomRightRadius: 20, borderBottomLeftRadius: 20}} onPress={() => setModal1(false) }>
                                <Text style={styles.textModalButton}>За</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                </Modal>


                <Modal
                    visible={modal2}
                    transparent
                    onRequestClose={() => setModal2(false)}
                    animationType= 'slide'
                >
                    <View style={styles.centered_view}>
                        <View style={styles.modal}>
                            <View style={styles.dayTitle}>
                                <Text style={styles.textModalTitle}>Сарын тэмдгийн мөчлөг гэж юу вэ?</Text>
                            </View>
                            <View style={{height:200, justifyContent: 'center', alignItems: 'center'}}>

                                <Text style={styles.textModal}>Сарын тэмдэг ирсэн эхний өдрөөс дараагийн сарын тэмдэг ирэх эхний өдөр хүртэлх хоногийг мөчлөг гэнэ. Хэвийн мөчлөг дунджаар 21-40 хоног байна.</Text>
                            </View>
                            <TouchableOpacity style={{ backgroundColor: '#8D00CC', height: 51, justifyContent: 'center', alignItems: 'center', borderBottomRightRadius: 20, borderBottomLeftRadius: 20}} onPress={() => setModal2(false) }>
                                <Text style={styles.textModalButton}>За</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                </Modal>
            <View style={styles.container1}>
                <Text style={styles.textTitle}>Бүсгүйн хуанли</Text>
            </View>
            <View style={{ marginTop: 10, marginHorizontal: 10 }}>
                <Image
                    style={{ width: 390, height: 300, marginRight: 10 }}
                    source={require('../assets/womenLearning.jpg')}
                />
            </View>
            <View style={styles.container2}>
                <Text style={styles.text}>   1. Таны сарын тэмдэг хэд хоног үргэлжилдэг вэ?(3-7 хоног)</Text>
                <View style={styles.container4}>
                    <TextInput
                        style={styles.input}
                        placeholder='5'
                        keyboardType='numeric'
                        onChangeText={(value) => setUrgeljlehHugatsaa(value)}
                    />
                    <TouchableOpacity style={{ marginBottom: 0 }} onPress={alert1}>
                        <Image style={{ width: 30, height: 30, marginTop: -10, tintColor: '#ffffff' }} source={require('../assets/question.png')} />
                    </TouchableOpacity>
                </View>

                <Text style={styles.text}>   2. Та сарын тэмдгийн мөчлөгийн уртаа оруулнуу.(21-40 хоног)</Text>
                <View style={styles.container4}>
                    <TextInput
                        style={styles.input}
                        placeholder='28'
                        keyboardType='numeric'
                        onChangeText={(value) => setMochlogiinUrt(value)}
                    />
                    <TouchableOpacity style={{ marginBottom: 0 }} onPress={alert2}>
                        <Image style={{ width: 30, height: 30, marginTop: -10, tintColor: '#ffffff' }} source={require('../assets/question.png')} />
                    </TouchableOpacity>
                </View>
                <Text style={styles.text}>   3. Таны хамгийн сүүлийн сарын тэмдэг хэдний өдөр эхэлж ирсэн бэ?</Text>
                {show && (
                    <DateTimePicker
                        testId='dateTimePicker'
                        value={date}
                        mode={mode}
                        is24Hour={true}
                        display='default'
                        onChange={onChange}
                    />
                )}
                <View style={{ flexDirection: 'row', borderBottomColor: '#ffffff', borderBottomWidth: 1, marginHorizontal: 10 }}>
                    <TouchableOpacity onPress={() => showMode('date')}>
                        <Text style={styles.textOnSar}>{jil}/{sar}/{odor}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => showMode('date')}>
                        <Image
                            style={{ width: 30, height: 30, marginLeft: 10 }}
                            source={require('../assets/calendartai.png')}
                        />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{ flexDirection: "row", justifyContent: 'flex-end', marginRight: 20 }}>
                <TouchableOpacity onPress={odorNemeh}>
                    <Image
                        style={{ width: 30, height: 30, marginLeft: 10, tintColor: '#076DF2' }}
                        source={require('../assets/right.png')}
                    />
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    container1: {
        marginTop: 10,
        marginHorizontal: 15,
        backgroundColor: '#0F88F2',
        justifyContent: 'center',
        alignContent: 'center',
        textAlign: 'center',
        flexDirection: 'row',
        borderRadius: 25,
        elevation: 4
    },
    textTitle: {
        margin: 15,
        justifyContent: 'center',
        color: '#ffffff',
        //fontWeight: 'bold',
        marginTop: 10,
        //fontSize: 20,
        fontFamily: 'Lobster-Regular',
        fontSize: 20,

    },
    container2: {
        backgroundColor: '#076DF2',
        margin: 15,
        height: 330,
        borderRadius: 25,
        paddingLeft: 10,
        paddingTop: 10

    },
    input: {
        fontSize: 15,
        textAlign: 'left',
        color: '#ffffff',
        height: 30,
        width: 340,
        marginTop: -10,
        marginBottom: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ffffff',
        padding: 3,
        paddingLeft: 10,
        marginLeft: 10,
        marginRight: -20


    },
    text: {

        color: '#ffffff',
        //fontWeight: 'bold',
        margin: 5,
        //fontSize: 20,
        fontFamily: 'Lobster-Regular',
        fontSize: 15,
        //textAlign: 'center',
        marginLeft: 3,
        padding: 5
    },
    textOnSar: {
        color: '#ffffff',
        //fontWeight: 'bold',
        //marginLeft: 5,
        //fontSize: 20,
        fontFamily: 'Lobster-Regular',
        fontSize: 15,
        //textAlign: 'center',
        marginLeft: 110,

    },
    container4: {
        flexDirection: 'row',
        // borderBottomColor: '#ffffff',
        // borderBottomWidth: 1,
        // marginBottom: 5
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
        height: 60,
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
        lineHeight: 23
        
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
        
    }
})

export default App;
