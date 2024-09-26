import React from 'react';
import { View, Image, StyleSheet, Text } from 'react-native';

export function Categorias() {
  return (
    <View style={styles.wrapper}>
      {/* Texto "Todos os serviços para sua saúde" */}
      <Text style={styles.titulo}>Todos os serviços para{'\n'}sua saúde</Text>

      <View style={styles.container}>
        {/* Ícone 1: Doutor */}
        <View style={styles.item}>
          <View style={styles.quadrado}>
            <Image
              source={require('../../assets/icone1.png')} // Substitua pela imagem correta
              style={styles.imagem}
            />
          </View>
          <Text style={styles.textoIcone}>Doutor</Text>
        </View>

        {/* Ícone 2: Doenças */}
        <View style={styles.item}>
          <View style={styles.quadrado}>
            <Image
              source={require('../../assets/icone2.png')} // Substitua pela imagem correta
              style={styles.imagem}
            />
          </View>
          <Text style={styles.textoIcone}>Doenças</Text>
        </View>

        {/* Ícone 3: Hospital */}
        <View style={styles.item}>
          <View style={styles.quadrado}>
            <Image
              source={require('../../assets/icone3.png')} // Substitua pela imagem correta
              style={styles.imagem}
            />
          </View>
          <Text style={styles.textoIcone}>Hospital</Text>
        </View>

        {/* Ícone 4: Emergência */}
        <View style={styles.item}>
          <View style={styles.quadrado}>
            <Image
              source={require('../../assets/icone4.png')} // Substitua pela imagem correta
              style={styles.imagem}
            />
          </View>
          <Text style={styles.textoIcone}>Emergência</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    padding: 10, // Ajuste de espaçamento ao redor de todo o conteúdo
    alignItems: 'center', // Centraliza o conteúdo horizontalmente
  },
  titulo: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#226752', // Cor do texto
    right: 70,
  },
  container: {
    flexDirection: 'row', // Coloca os itens lado a lado
    justifyContent: 'center', // Centraliza o conjunto de itens
    padding: 25, // Espaçamento ao redor
  },
  item: {
    alignItems: 'center', // Centraliza cada ícone e texto
    marginHorizontal: 13, // Espaçamento entre os itens
    width: 80,  // Aumenta a largura para comportar textos longos como "Emergência"
  },
  quadrado: {
    width: 62,  // Largura dos quadrados
    height: 62, // Altura dos quadrados
    backgroundColor: '#ffffff', // Cor de fundo do quadrado
    justifyContent: 'center', // Centraliza o conteúdo verticalmente
    alignItems: 'center', // Centraliza o conteúdo horizontalmente
    borderRadius: 10, // Arredonda os cantos
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5, // Sombra para Android
    left: 25
    
  },
  
  imagem: {
    width: '80%',
    height: '80%',
    borderRadius: 10, // Arredonda a imagem também
  },
  textoIcone: {
    marginTop: 8, // Espaçamento entre o quadrado e o texto
    fontSize: 14,
    color: '#333',
    textAlign: 'center',
    left: 20,
    flexWrap: 'wrap', // Permite que o texto quebre em múltiplas linhas, se necessário
  },
});
