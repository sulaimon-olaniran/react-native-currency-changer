import { createTheme } from 'react-native-theming'
import { createStyle } from 'react-native-theming'

//themes for the application
export const themes = [
    createTheme({
      backgroundColor : '#0096c7',
      headerBackground : '#0077b6',
      textColor : '#caf0f8',
      borderColor : '#caf0f8',
      buttonColor : '#caf0f8',
      buttonText : '#023e8a'
    }, 'blue'),

    createTheme({
        backgroundColor : '#6A1410',
        headerBackground : '#350A08',
        textColor : '#F4BBB8',
        borderColor : '#F7CCCA',
        buttonColor : '#F7CCCA',
        buttonText : '#350A08'  
    }, 'red'),

    createTheme({
        backgroundColor : '#212529',
        headerBackground : '#0B0500',
        textColor : '#adb5bd',
        borderColor : '#adb5bd',
        buttonColor : '#adb5bd',
        buttonText : '#0B0500'
    }, 'black'),

    createTheme({
        backgroundColor : '#4c956c',
        headerBackground : '#2c6e49',
        textColor : '#cad2c5',
        borderColor : '#a7c957',
        buttonColor : '#fffcf2',
        buttonText : '#252422'
    }, 'green'),
    
    createTheme({
        backgroundColor : '#d9d9d9',
        headerBackground : '#f4f3ee',
        textColor : '#252422',
        borderColor : '#ccc5b9',
        buttonColor : '#a7c957',
        buttonText : '#cad2c5'
    }, 'white'),

]


export const GlobalStyles = createStyle({
    container : {
        flex : 1,
        width : '100%',
        alignItems : 'center',
        justifyContent : 'space-around',
        backgroundColor : '@backgroundColor',
    },

    text : {
        color : '@textColor'
    },

    headerText :{
        color : '@textColor',
        fontSize : 20,
        fontWeight : "700"
    },

    button : {
        backgroundColor : '@buttonColor',
        color : '@buttonText'
    },
})


