import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

// Importar imagens
import pessoa1 from '../../assets/pessoa1.jpg';
import pessoa2 from '../../assets/pessoa2.jpg';
import pessoa3 from '../../assets/pessoa3.jpg';

export default function Especialistas() {
  const especialistas = [
    { image: pessoa1, name: 'Mariana Carvalho', profession: 'Geneticista' },
    { image: pessoa2, name: 'Matheus Castro', profession: 'Geneticista' },
    { image: pessoa3, name: ' Caio Graco', profession: 'Geneticista' },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Top especialistas</Text>
        <TouchableOpacity>
          <Text style={styles.link}>Ver mais</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.boxContainer}>
        {especialistas.map((especialista, index) => (
          <View key={index} style={styles.box}>
            <Image
              source={especialista.image}
              style={styles.image}
            />
            <Text style={styles.name}>{especialista.name}</Text>
            <Text style={styles.profession}>{especialista.profession}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    color: '#226752',
    fontSize: 18,
    fontWeight: 'bold',
    top:-30,

  },
  link: {
    color: '#52A6FF',
    fontSize: 16,
    top:-30,

  },
  boxContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 16,
  },
  box: {
    backgroundColor: 'transparent',
    borderColor: '#226752',
    borderWidth: 1,
    borderRadius: 13,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    padding: 16,
    alignItems: 'center',
    justifyContent: 'center',
    width: '32%',
    height: 181,
    marginHorizontal: 8,
    top:-30,
    right: 18,

  },
  image: {
    width: 63,
    height: 63,
    borderRadius: 50,
    top:-24,
  },
  name: {
    color: '#226752',
    fontSize: 13,
    fontWeight: 'normal', // Fonte mais fina
    top:-10,  
    alignItems: 'center',
    textAlign: 'center', // Centraliza o texto

    

  },
  profession: {
    color: 'black',
    fontSize: 13,
   alignItems: 'center',
   top: -10
   
  },
});
