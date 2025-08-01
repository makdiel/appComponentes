import React from 'react'
import { View, Text } from 'react-native'
import { Parametros } from '../Modelos/Parametros'

export default function CalculateExercises() {

        let Dias = 0;
        let DiasObjetivos = 4;
        let HorasObjetivos = 7;
        
        let HorasDiariasObjetivos = 2;
        let HorasDiariasObjetivoCumplido = 0;

        let HorasEntrenadas = 0;
        let PromedioHorasEntrenadas = 0;
        let meta = 'falso';
         let Calificacion = 'Necesita entrenar mas seguido';
        function fnCalcularDias(L:number,M:number,MM:number,J:number,V:number,S:number,D:number){
        
        if(L > 0) 
            Dias = Dias + 1
        if(M > 0) 
            Dias = Dias + 1
        if(MM > 0) 
            Dias = Dias + 1
        if(J > 0) 
            Dias = Dias + 1
        if(V > 0) 
            Dias = Dias + 1
        if(S > 0) 
            Dias = Dias + 1
        if(D > 0) 
            Dias = Dias + 1

        if(L > HorasDiariasObjetivos) 
              HorasDiariasObjetivoCumplido = HorasDiariasObjetivoCumplido + 1
        if(M > HorasDiariasObjetivos) 
              HorasDiariasObjetivoCumplido = HorasDiariasObjetivoCumplido + 1
        if(MM > HorasDiariasObjetivos) 
              HorasDiariasObjetivoCumplido = HorasDiariasObjetivoCumplido + 1
        if(J > HorasDiariasObjetivos) 
              HorasDiariasObjetivoCumplido = HorasDiariasObjetivoCumplido + 1
        if(V > HorasDiariasObjetivos) 
              HorasDiariasObjetivoCumplido = HorasDiariasObjetivoCumplido + 1
        if(S > HorasDiariasObjetivos) 
              HorasDiariasObjetivoCumplido = HorasDiariasObjetivoCumplido + 1
        if(D > HorasDiariasObjetivos) 
              HorasDiariasObjetivoCumplido = HorasDiariasObjetivoCumplido + 1

        if (HorasDiariasObjetivoCumplido >= 3){
            HorasDiariasObjetivoCumplido=3
            Calificacion = 'Su Rutina diaria de ejercicios fue alcanzada';
        }
            

        HorasEntrenadas = L + M + MM + J + V + S + D
        PromedioHorasEntrenadas = HorasEntrenadas / Dias

        if (HorasEntrenadas >= HorasObjetivos)
            meta = 'Verdadero'

        return Dias 
    }
    
  return (
    <View>
        <Text>Dias de Entrenamientos a la semana: 7 </Text>    
        <Text>Dias de Entrenamiento Realizados: {fnCalcularDias(1,2,0,0,3,2,0)} </Text>
        <Text>Dias de Entrenamientos Objetivos: {DiasObjetivos} </Text>
        <Text>Promedio de Horas Entrenadas: {PromedioHorasEntrenadas} </Text>  
        <Text>El Objetivo de {HorasObjetivos} horas se alcanzo?: {meta} </Text>    

        <Text>Cumplio  {HorasDiariasObjetivoCumplido} dias de {HorasDiariasObjetivos}  horas diarias objetivo de los 3 dias recomendados</Text>     

        <Text>Calificacion General: {Calificacion}  </Text>   
    </View> 
  )
}
