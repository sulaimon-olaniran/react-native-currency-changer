import React from 'react'
import { TouchableOpacity, TextInput } from 'react-native'
import Theme, { createStyle, createThemedComponent } from 'react-native-theming'
import { GlobalStyles } from '../styles/GlobalStyle'

const ThemeTextInput = createThemedComponent(TextInput)
export default CustomInput = ({ navigation, editable, text, from, abbr, setAmountToConvert, value, placeholder }) => {

    const handleOnpress = () => {
        navigation.navigate('Currencies', {
            id: from,
            abbr: abbr
        })
    }

    const handleOnChangeText = (text) => {
        setAmountToConvert(text)
    }

    return (
        <Theme.View style={styles.container} >
            <TouchableOpacity style={styles.currencyContainer} onPress={handleOnpress}>
                <Theme.View style={styles.currency}>
                    <Theme.Text style={GlobalStyles.headerText}>{text}</Theme.Text>
                </Theme.View>
            </TouchableOpacity>

            <Theme.View style={styles.textInputContainer}>
                <ThemeTextInput
                    style={styles.textInput}
                    keyboardType='numeric'
                    editable={editable}
                    value={ value === 0 ? '' : String(value)}
                    onChangeText={handleOnChangeText}
                    placeholder={placeholder}
                />
            </Theme.View>

        </Theme.View>
    )
}



const styles = createStyle({
    container: {
        width: '90%',
        height: '42%',
        borderWidth: 2,
        borderColor: '@borderColor',
        flexDirection: 'row',
    },

    currencyContainer: {
        flex: 1,
    },

    currency: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },

    textInputContainer: {
        flex: 3,
        height: '100%',
        borderLeftWidth: 2,
        borderColor: '@borderColor'
    },

    textInput: {
        flex: 1,
        padding: 8,
        color: '@textColor',
        fontSize: 20,
        fontWeight: '600',
        letterSpacing: 0.5,
    },
})