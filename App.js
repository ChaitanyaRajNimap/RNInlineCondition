import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const App = () => {
  let greeting = false;
  const helloMsg = <Text style={styles.heading}>Hello World!</Text>;
  const goodByMsg = <Text style={styles.heading}>Goodbye World!</Text>;

  let msg;
  if (greeting) msg = helloMsg;
  else msg = goodByMsg;

  const displayMsg = greeting => {
    if (greeting) {
      return <Text style={styles.heading}>Hello World!</Text>;
    } else {
      return <Text style={styles.heading}>Goodbye World!</Text>;
    }
  };

  return (
    <View style={styles.rootContainer}>
      {/*Approach 1: use ternary expression (inline solution)*/}
      <View>{greeting ? helloMsg : goodByMsg}</View>

      {/*Approach 2: assign the view to a value and return it*/}
      <View>{msg}</View>

      {/*Approach 3: create separate function and delegate the logic to that function*/}
      <View>{displayMsg(greeting)}</View>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    margin: 20,
  },
  heading: {
    color: '#000',
    fontSize: 25,
    fontWeight: 'bold',
  },
});
