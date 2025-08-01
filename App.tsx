import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import CalculateExercises from './Components/CalculateExercises';



export default function App() {
  return (
    <View style={styles.container}>
      <Text>Tarea Semana 1- Calculadora!</Text>
      <CalculateExercises></CalculateExercises>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
