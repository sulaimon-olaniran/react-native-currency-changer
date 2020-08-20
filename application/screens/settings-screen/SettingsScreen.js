import React, { useState } from 'react'
import { TouchableOpacity, Modal, TouchableWithoutFeedback } from 'react-native'
import Theme, { createStyle, createThemedComponent } from 'react-native-theming'
import { Ionicons } from '@expo/vector-icons'
import { themes } from '../../styles/GlobalStyle'
import { FontAwesome } from '@expo/vector-icons'

const MyFontAwesome = createThemedComponent(FontAwesome)

export default SettingsScreen = () => {
    const [modalVisible, setModalVisible] = useState(false)
    const [currentTheme, setCurrentTheme] = useState('blue')

    const handleModalVisibilty = () => {
        setModalVisible(prev => !prev)
    }

    const handleThemeOnpress = (theme) => {
        theme.apply()
        setCurrentTheme(theme.name)
    }
    return (

        <Theme.View style={styles.container}>
            <Modal
                transparent={true}
                animationType='slide'
                visible={modalVisible}
            >
                <TouchableWithoutFeedback onPress={handleModalVisibilty}>
                    <Theme.View style={styles.modalContainer}>
                    </Theme.View>
                </TouchableWithoutFeedback>

                <Theme.View style={styles.modalContent}>
                    {themes.map(theme => (
                        <TouchableOpacity key={theme.name} onPress={() => handleThemeOnpress(theme)} style={styles.selectioncontainer}>
                            <Theme.View style={styles.themeSelection}>
                                <Theme.Text style={styles.settingsText}>
                                    {theme.name}
                                </Theme.Text>
                                {
                                    currentTheme === theme.name ? <MyFontAwesome name="check-circle" size={35} color={theme.name} />
                                        : <MyFontAwesome name="circle" size={35} color={theme.name} />
                                }

                            </Theme.View>
                        </TouchableOpacity>
                    ))}
                </Theme.View>

            </Modal>

            <TouchableOpacity onPress={handleModalVisibilty}>
                <Theme.View style={styles.options}>
                    <Ionicons name="md-color-palette" size={35} color="orange" />
                    <Theme.Text style={styles.settingsText}>Themes</Theme.Text>
                </Theme.View>
            </TouchableOpacity>
        </Theme.View>

    )
}



const styles = createStyle({
    container: {
        flex: 1,
        width: '100%',
        backgroundColor: '@backgroundColor',
        padding: 20,
    },

    options: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 50,
        width: '100%',
        borderBottomWidth: 1,
        borderColor: '@borderColor'
    },

    settingsText: {
        fontSize: 25,
        color: '@textColor',
        marginLeft: 10,
        textTransform: 'capitalize',
    },

    modalContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)'
    },

    modalContent: {
        position: 'absolute',
        alignSelf: 'center',
        top: '20%',
        width: '80%',
        height: '60%',
        backgroundColor: "@backgroundColor",
        borderRadius: 20,
        padding: 15,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
    },

    selectioncontainer : {
       width : '100%',
    },

    themeSelection: {
        width: '100%',
        height: 45,
        borderWidth: 1,
        borderColor: '@borderColor',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 20,
        paddingHorizontal: 10,
    }
})