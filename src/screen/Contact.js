import { View, Text, Button, TextInput } from 'react-native'
import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, reset, plusfv, incrementByAmount, add, dele } from '../slice/ProductSlice'
import { FetchData } from '../slice/ProductSlice'

export default function Home({ navigation }) {

    useEffect(() => {

        FetchData()

    }, [])


    const count = useSelector((state) => state.product.value)
    console.log(count);
    const dispatch = useDispatch()
    return (
        <View>
            {/* <Text>gggggg{count}</Text>
            <Button title='Add' onPress={() => dispatch(increment())} />


            <Button title='Remove' onPress={() => dispatch(decrement())} />
            <Button title='Remove' onPress={() => dispatch(reset())} />

            <Button title='plusfv' onPress={() => dispatch(plusfv())} /> */}
            <Text>{count}</Text>
            {/* <Text>
                {
                    count.map((item, index) => <View key={index}>


                        <Text>{item}</Text>
                        <Text>{"\n"}</Text>

                        <Button title='Delete' onPress={() => dispatch(dele(index))} />
                    </View>)
                }
            </Text> */}

        </View>
    )
}