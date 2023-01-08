// import { View, Text, Button, TextInput } from 'react-native'
// import React, { useEffect, useState } from 'react'
// import { useSelector, useDispatch } from 'react-redux'
// import { decrement, increment, reset, plusfv, incrementByAmount, add, dele } from '../slice/CounterSlice'
// import { FetchData } from '../slice/ProductSlice'


// export default function Home({ navigation }) {


//     useEffect(() => {
//         FetchData()
//     }, [])

//     const [text, setText] = useState()
//     // const [ary, setAry] = useState([count])

//     // console.log(ary);
//     const count = useSelector((state) => state.counter.newProduct)

//     console.log(count);
//     const dispatch = useDispatch()


//     const handleClck = (text) => {
//         dispatch(add(text))
//         setText("")
//         navigation.navigate('Contact')

//     }



//     return (
//         <View>
//             {/* <Text>gggggg{count}</Text>
//             <Button title='Add' onPress={() => dispatch(increment())} />


//             <Button title='Remove' onPress={() => dispatch(decrement())} />
//             <Button title='Remove' onPress={() => dispatch(reset())} />

//             <Button title='plusfv' onPress={() => dispatch(plusfv())} /> */}

//             {/* <TextInput


//                 value={text}
//                 onChangeText={(text) => setText(text)}
//                 placeholder="useless placeholder"
//                 keyboardType="numeric"
//             /> */}
//             <Button title='Add' onPress={() => handleClck(text)} />



//             {/* <Text>
//                 {
//                     count.map((item, index) => <View key={index}>


//                         <Text>{item}</Text>
//                         <Text>{"\n"}</Text>

//                         <Button title='Delete' onPress={() => dispatch(dele(index))} />
//                     </View>)
//                 }
//             </Text> */}

//         </View>
//     )
// }

import { View, Text } from 'react-native'
import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { getPost } from '../slice/PostSlice';
import { useEffect } from 'react';

export default function Home() {


    const { posts, loading } = useSelector((state) => state.post)
    console.log("data", posts);





    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getPost())
    }, [])

    return (
        <View>
            {

                posts.map((item) => <View>

                    <Text>{item.title}</Text>
                </View>)
            }
        </View>
    )
}