import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import Theme, { createStyle } from 'react-native-theming'




export default NavHeader = ({ children }) => {
    return (
        <Theme.View style={styles.container}>
            {children}
        </Theme.View>
    )
}


const styles = createStyle({
    container: {
        backgroundColor: '@headerBackground',
        width: '100%',
        height: '100%',
       // flexDirection : 'row',
       // justifyContent: 'space-between',
    },

    headerContainer :{
       width : '70%',
       height : '100%',
       flexDirection : 'row',
       alignItems : 'center',
       marginLeft : 20
    },

    headerText :{
      color : '@textColor',
      fontSize : 22,
      fontWeight : '700',
      marginLeft : 5
    },
    settingIcon: {
        justifyContent: 'center',
        marginRight : 10
    }
})