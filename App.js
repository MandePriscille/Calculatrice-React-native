import {StyleSheet, Text, View, TextInput, Button, Alert} from 'react-native';
import { useState } from 'react';

export default  function App(){
  const [number1, setNumber1] = useState('');
  const [number2, setNumber2] = useState('');
  const [result, setResult] = useState(null);

  // function pour les calculatrice
  const add = () => {
    const num1 = parseFloat(number1);
    const num2 = parseFloat(number2);
    if(isNaN(num1) || isNaN(num2)){
      Alert.alert('Erreur', 'veuillez entrer deux nombres valides');
    } else {
      setResult(num1 + num2 );
    }
  };

  const subtract = () => {
    const num1 = parseFloat(number1);
    const num2 = parseFloat(number2);
    if(isNaN(num1) || isNaN(num2)){
      Alert.alert('Erreur', 'Veuillez entrer deux nombres valides');
    } else {
      setResult(num1 - num2 );
    }
  };

  const multiply = () =>{
    const num1 = parseFloat(number1);
    const num2 = parseFloat(number2);
    if(isNaN(num1) || isNaN(num2)){
      Alert.alert('Erreur','Veuillez entrer deux nombres valides');
    } else{
      setResult(num1 * num2);
    }
  };

  const divide = () => {
    const num1 = parseFloat(number1);
    const num2 = parseFloat(number2);
    if(isNaN(num1) || isNaN(num2)){
      Alert.alert('Erreur','Veuillez entrer deux nombres valides');
    }
    else if(num2 === 0){
      Alert.alert('Erreur', 'Division par zéro impossible');
    }else{
      setResult(num1/num2)
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>calculatrice</Text>

     <TextInput
     style={styles.input}
     placeholder="premier nombre"
     keyboardType="numeric"
     value={number1}
     onChangeText={(text) => setNumber1(text)} 
     />
     
     <TextInput
     style={styles.input}
     placeholder="Deuxieme nombre"
     keyboardType="numeric"
     value={number2}
     onChangeText={(text) => setNumber2(text)}
     />

     <View style={styles.buttonContainer}>
      <Button title="+" onPress={add} />
      <Button title="-" onPress={subtract} />
      <Button title="×" onPress={multiply} />
      <Button title="÷" onPress={divide} />
     </View>
     
     {result !== null && (
      <Text style={styles.result}>Resultat: {result}</Text>
     )}
    </View>
  );
};

const styles = StyleSheet.create({
  container:{
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 20,
    backgroundColor: '#f0f0f0'
  },
  title:{
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  input:{
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 5,
    marginBottom: 15,
    backgroundColor: '#fff',
  },
  buttonContainer:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  result:{
    fontSize: 20,
    textAlign: 'center',
    marginTop: 20,
    color: '#333',
  },
});

