import React, { useContext, useEffect, useState, useRef } from 'react'
import {
    View, TouchableOpacity, Image,
    TouchableWithoutFeedback,
    Keyboard,
    Alert,
} from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { MaterialIcons } from '@expo/vector-icons'
import axios from 'axios'
import moment from 'moment'
import Theme, { createStyle } from 'react-native-theming'



import { GlobalStyles } from '../../styles/GlobalStyle'
import CustomInput from '../../components/CustomInput'
import { AppContext } from '../../context/AppContext'

//const API_KEY = '1e2164e2-7125-4fc8-9e8e-1dc506cd368b'

export default HomeScreen = ({ navigation }) => {
    const { amountToConvert, baseFrom, rateTo, setAmountToConvert, setBaseFrom, setRateTo } = useContext(AppContext)
    const [convertedData, setConvertedData] = useState()
    const mountedRef = useRef(true)

    const switchBaseToRate = () => {
        setRateTo(baseFrom)
        setBaseFrom(rateTo)
    }


    useEffect(() => {
        if (!isNaN(amountToConvert)) {
            axios.get(`https://v1.nocodeapi.com/sulaimon/cx/wKOWOqDWbwQYGXOZ/rates/convert?amount=${amountToConvert}&from=${baseFrom}&to=${rateTo}`)
                .then(res => {
                    if (!mountedRef.current) return null
                    setConvertedData(res.data)
                })
                .catch(err => console.log(err))
        }
        else{
            Alert.alert('Error !!!', 'You entered an Invalid amount, only numbers 0-9 are allowed...')
            setAmountToConvert(0)
        }

        return () => {
            mountedRef.current = false
        }
    }, [amountToConvert, rateTo, baseFrom])

    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <Theme.View style={GlobalStyles.container}>
                <View style={styles.imageContainer}>
                    <Image
                        style={styles.image}
                        resizeMode='contain'
                        source={require('../../assets/logo.png')}
                    />
                </View>
                <View>
                    <Theme.Text style={GlobalStyles.text}>Compare Various amount and types of Currencies</Theme.Text>
                </View>

                <View style={styles.inputsContainer}>
                    <CustomInput
                        navigation={navigation}
                        editable={true}
                        setAmountToConvert={setAmountToConvert}
                        text={baseFrom}
                        from='base'
                        abbr={baseFrom}
                        value={amountToConvert}
                        placeholder='Enter an amount...'
                    />
                    <CustomInput
                        navigation={navigation}
                        editable={false}
                        text={rateTo}
                        from='rate'
                        abbr={rateTo}
                        value={convertedData && convertedData.result !== null ? Math.round(convertedData.result * 10000)/10000 : 0}
                    />
                </View>

                <View style={styles.iconsContainer}>
                    <TouchableOpacity onPress={switchBaseToRate}>
                        <MaterialIcons name="swap-vert" size={45} color="gold" />
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => setAmountToConvert(0)}>
                        <MaterialCommunityIcons name="reload" size={45} color="gold" />
                    </TouchableOpacity>
                </View>

                <View style={styles.textsContainer}>
                    {convertedData && <Theme.Text style={GlobalStyles.text}>
                        1{convertedData.query.from} = {convertedData.info.rate} {convertedData.query.to} as at {moment(convertedData.timeStamp).format('Do MMM, YYYY')}.
                            </Theme.Text>}
                </View>

            </Theme.View>
        </TouchableWithoutFeedback>



    )
}


const styles = createStyle({
    container: {
        flex: 1,
    },

    imageContainer: {
        width: 200,
        height: 200,
        alignItems: 'center',
    },

    image: {
        width: '100%',
        height: '100%'
    },

    inputsContainer: {
        width: '100%',
        height: 120,
        alignItems: 'center',
        justifyContent: 'space-between'
    },

    iconsContainer: {
        flexDirection: 'row',
        width: '60%',
        justifyContent: 'space-between',
    },

    textsContainer: {
        width: '100%',
        alignItems: 'center',
    },
})