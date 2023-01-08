// import { View, Text, Button, TextInput } from 'react-native'
// import React, { useState } from 'react'
// import { useSelector, useDispatch } from 'react-redux'
// import { decrement, increment, reset, plusfv, incrementByAmount, add, dele } from '../slice/CounterSlice'


// export default function Detail() {
//     const [text, setText] = useState()
//     // const [ary, setAry] = useState([count])

//     // console.log(ary);
//     const count = useSelector((state) => state.counter.newProduct)

//     console.log(count);
//     const dispatch = useDispatch()


//     const handleClck = (text) => {
//         dispatch(add(text))
//         setText("")
//     }



//     return (
//         <View>
//             {/* <Text>gggggg{count}</Text>
//             <Button title='Add' onPress={() => dispatch(increment())} />


//             <Button title='Remove' onPress={() => dispatch(decrement())} />
//             <Button title='Remove' onPress={() => dispatch(reset())} />

//             <Button title='plusfv' onPress={() => dispatch(plusfv())} /> */}

//             <TextInput


//                 value={text}
//                 onChangeText={(text) => setText(text)}
//                 placeholder="useless placeholder"
//                 keyboardType="numeric"
//             />
//             <Button title='Add' onPress={() => handleClck(text)} />

//             <Text>
//                 {
//                     count.map((item, index) => <View key={index}>


//                         <Text>{item}</Text>
//                         <Text>{"\n"}</Text>

//                         <Button title='Delete' onPress={() => dispatch(dele(index))} />
//                     </View>)
//                 }
//             </Text>

//         </View>
//     )
// }
import { View, Text } from 'react-native'
import React from 'react'

export default function Detail() {
  return (
    <View>
      <Text>Detail</Text>
    </View>
  )
}