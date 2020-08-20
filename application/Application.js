import React from 'react'
import { View, TouchableOpacity, StatusBar } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Theme, { createStyle } from 'react-native-theming'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { MaterialIcons } from '@expo/vector-icons'

import HomeScreen from './screens/home-screen/HomeScreen'
import SettingsScreen from './screens/settings-screen/SettingsScreen'
import CurrencyScreen from './screens/currency-screen/CurrencyScreen'
import NavHeader from './components/NavHeader'


//custom header for the home screen to render as a child with custom built header container
const HomeNavHeader = ({ navigation }) => {
    return (
        <Theme.View style={styles.homeHeader}>
            <View style={styles.headerContainer}>
                <MaterialCommunityIcons name="home-currency-usd" size={40} color="#e85d04" />
                <Theme.Text style={styles.headerText}>Currency Changer</Theme.Text>
            </View>

            <TouchableOpacity style={styles.settingIcon} onPress={() => navigation.navigate('Settings')}>
                <MaterialIcons name="settings" size={30} color="orange" />
            </TouchableOpacity>
        </Theme.View>
    )
}


//custom header for the currencies and settings screen to render as a child with custom built header container
const BackNavHeader = ({ navigation, text }) => {
    return (
        <Theme.View style={styles.homeHeader}>
            <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backIcon}>
                <MaterialIcons name="arrow-back" size={40} color="orange" />
            </TouchableOpacity>

            <Theme.Text style={styles.backHeaderText} >{text}</Theme.Text>
        </Theme.View>
    )
}



export default Application = () => {
    const Stack = createStackNavigator()
    return (
        <NavigationContainer>
            <Stack.Navigator>

                <Stack.Screen
                    name="Home"
                    component={HomeScreen}
                    options={({ navigation }) => ({
                        headerTitle: () => <NavHeader><HomeNavHeader navigation={navigation} /></NavHeader>,
                        headerTitleContainerStyle: {
                            width: '100%',
                            height: '100%',
                            left: 0,
                        }
                    })}
                />

                <Stack.Screen 
                    name="Settings" 
                    component={SettingsScreen} 
                    options={({ navigation }) => ({
                        headerTitle: () => <NavHeader><BackNavHeader navigation={navigation} text={'Settings'} /></NavHeader>,
                        headerTitleContainerStyle: {
                            width: '100%',
                            height: '100%',
                            left: 0,
                        }
                    })}
                />

                <Stack.Screen 
                    name="Currencies" 
                    component={CurrencyScreen} 
                    options={({ navigation }) => ({
                        headerTitle: () => <NavHeader><BackNavHeader navigation={navigation} text={'Currencies'} /></NavHeader>,
                        headerTitleContainerStyle: {
                            width: '100%',
                            height: '100%',
                            left: 0,
                        }
                    })}
                />

            </Stack.Navigator>
            <StatusBar translucent={true} />
        </NavigationContainer>

    )
}

const styles = createStyle({
    header: {
        flexDirection: 'row',
        alignItems: 'center',
    },

    homeHeader: {
        flexDirection: 'row',
        alignItems : 'center',
        justifyContent: 'space-between',
        width: '100%',
        height: '100%',
    },

    headerContainer: {
        width: '70%',
        height: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 20
    },

    headerText: {
        color: '@textColor',
        fontSize: 22,
        fontWeight: '700',
        marginLeft: 5
    },

    settingIcon: {
        justifyContent: 'center',
        marginRight: 10
    },

    backHeaderText : {
        color: '@textColor',
        fontSize: 22,
        fontWeight: '700',
        alignSelf : 'center',
        marginRight : '40%'
    },

    backIcon : {
        marginLeft : 15,
    }

})