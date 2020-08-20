import React, { useContext } from 'react'
import { TouchableOpacity, Alert } from 'react-native'
import Theme, { createStyle } from 'react-native-theming'
import { FontAwesome5 } from '@expo/vector-icons';

import { GlobalStyles } from '../../styles/GlobalStyle'
import { AppContext } from '../../context/AppContext';


export default EachCurrencty = ({ item, id, abbr, navigation }) => {
    const { setBaseFrom, setRateTo, baseFrom, rateTo } = useContext(AppContext)
    const setFunction = id === 'base' ? setBaseFrom : setRateTo //determining if base or rate is to be set depending on which input was clicked
    const currentAbbr = id === 'base' ? rateTo : baseFrom //getting the exact currency abbr from the current input clicked 

    const handleOnpress = () =>{
        if(item.abbr === currentAbbr){
            Alert.alert('Error !!!', 'Currency already selected, choose another currency to get rates...')
        }
        else{
            setFunction(item.abbr)
            navigation.goBack()
        }
       
    }

    return (
        <TouchableOpacity onPress={handleOnpress}>
            <Theme.View style={styles.container}>
                <Theme.Text style={GlobalStyles.text}>{item.abbr} - {item.name}</Theme.Text>
                { abbr === item.abbr && <FontAwesome5 name="check" size={25} color="orange" />}
            </Theme.View>
        </TouchableOpacity>
    )
}


const styles = createStyle({
    container: {
        width: '100%',
        height: 40,
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: '@borderColor',
        marginBottom: 20,
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
    },

    text: {

    }
})