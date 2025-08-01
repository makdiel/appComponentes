import React from 'react'
import { View, Text } from 'react-native'
import { Parametros } from '../Modelos/Parametros'


export default function ListaDiasEjercicio() {
    let listaDias: Parametros[]=[
        {L:2,M:3,MM:0,J:1,V:0,S:2,D:2 }
    ]
  return (
    <View>
        <Text>Dias de Entrenamiento</Text>    
    </View>
  )
}
