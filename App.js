import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput,Button } from 'react-native';

export default function App() {
  
  const [a, setA] = useState();
  const [n, setN] = useState();

  const [min, setMin] = useState(0);
  const [max, setMax] = useState(0);

  function fillArr() {
      
      var arr = [];

      var Min = 100;
      var Max = 0;
      for (let i=0; i<n; i++) {
        arr.push(Math.round(Math.random() * 100));
      }

      for(let i = 0; i <= n; i++){
        if(arr[i] > Max){
          Max = arr[i];
          setMax(Max);
          continue;
        }
        
        if(arr[i] < Min){
          Min = arr[i];
          setMin(Min);
        }
      }

      const listItems = arr.map(( num, index ) =>
        <li key={ index.toString() } >                      
        { num }
        </li>
      );

      setA(listItems);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Введите размер массива: </Text>
      <TextInput style={styles.input} 
      onChangeText={text => setN(text)}/>
      <Button title="Вывести" onPress={fillArr}/>
      <View>
      <Text>Минимальное значение: {min}</Text>
      <Text>Максимальное значение: {max}</Text>
      </View>
      <Text> <ol> { a } </ol></Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  text: {
    textAlign: "center",
  },
  input: {
    borderLeftWidth: 1,
    borderBottomWidth: 1,
    borderRightWidth: 1,
    borderTopWidth: 1,
    fontSize: 23,
  },
});
