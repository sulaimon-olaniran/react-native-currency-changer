import React, { useEffect, useState, useRef } from 'react'
import { FlatList } from 'react-native'
import axios from 'axios'
import Theme, { createStyle } from 'react-native-theming'

import EachCurrency from './EachCurrency'

const API_KEY = 'f15b33255aa24f8518c89cb2e3bdc444'

export default CurrencyScreen = ({ route, navigation }) => {
    const { id, abbr } = route.params
    const [currenciesData, setCurrenciesData] = useState([])
    const mountedRef = useRef(true)

    useEffect(() => {
        axios.get(`http://data.fixer.io/api/symbols?access_key=${API_KEY}`)
            .then(res => {
                if (!mountedRef.current) return null
                const dataObject = res.data.symbols
                //converting data objects into an array of objects to work with flatlist
                const arrayOfObj = Object.entries(dataObject).map(e => ({ 'abbr': e[0], 'name': e[1] }))
                setCurrenciesData(arrayOfObj)
            })
            .catch(err => console.log(err))
        return () => {
            mountedRef.current = false
        }
    }, [])
    return (
        <Theme.View style={styles.container}>
            {
                currenciesData &&
                <FlatList
                    data={currenciesData}
                    renderItem={({ item }) => (
                        <EachCurrency item={item} id={id} abbr={abbr} navigation={navigation} />
                    )}

                    keyExtractor={item => item.abbr}
                />}
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
})