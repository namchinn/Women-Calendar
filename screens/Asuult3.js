import React, { useState, useEffect } from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';
import {
    StyleSheet,
    View,
    Text,
    Image,
    Button,
    TextInput
} from 'react-native';

function App({ navigation }) {

    useEffect(() => {
        //console.log(date);
    })

    const [date, setDate] = useState(new Date());
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);

    const onChange = async (event, selectedDate) => {
        const currenDate = selectedDate || date;
        setShow(Platform.OS === 'ios');
        setDate(currenDate);

        let tempDate = new Date(currenDate);
        let fDate = tempDate.getDate() + '/' + (tempDate.getMonth() + 1) + '/' + tempDate.getFullYear();
        let jil = tempDate.getFullYear();
        let sar = tempDate.getMonth() + 1;
        let odor = tempDate.getDate();
        let fTime = 'Hours: ' + tempDate.getHours() + ' | Minute: ' + tempDate.getMinutes();
        var wakeTime = tempDate.getHours();
        console.log('jil:', jil, 'sar:', sar, 'odor:', odor);
    }
    // const [date, setDate] = useState(new Date());
    // const [open, setOpen] = useState(false);

    // const [sar, setSar] = useState(6);
    // const [odor, setOdor] = useState(15);

    const next = () => {
        navigation.navigate('MainActivity');
    }

    const showMode = (currentMode) => {
        setShow(true);
        setMode(currentMode);
    }

    return (
        <View style={styles.container1}>
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
            <Button
                title='Date Picker'
                
                onPress={() => showMode('date')}
            />
            <Button
                title='Next'
                onPress={next}
            />

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
        margin: 12,
    },
    text: {
        justifyContent: 'center',
        color: '#2C478D',
        fontSize: 20,
        textAlign: 'center',
        marginTop: 10,
        marginHorizontal: 10,
    },
    dropDown: {
        width: 60,
        height: 50,
        margin: 12,
        padding: 10,
    },
    textSarOdor: {
        justifyContent: 'center',
        color: '#2C478D',
        fontSize: 20,
        textAlign: 'center',
        margin: 12,

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
    },
    datePicker: {
        color: '#2C478D',
    }
})

export default App;