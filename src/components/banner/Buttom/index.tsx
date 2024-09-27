import React, { useRef } from 'react';
import { Animated, Pressable, Text, StyleSheet } from 'react-native';

const AnimatedButton: React.FC = () => {
  const scaleAnim = useRef(new Animated.Value(1)).current; // Inicializa a escala da animação

  const handlePressIn = () => {
    Animated.spring(scaleAnim, {
      toValue: 1.1, // Aumenta o tamanho
      friction: 3,
      useNativeDriver: true,
    }).start();
  };

  const handlePressOut = () => {
    Animated.spring(scaleAnim, {
      toValue: 1, // Retorna ao tamanho original
      friction: 3,
      useNativeDriver: true,
    }).start();
  };

  return (
    <Animated.View style={{ transform: [{ scale: scaleAnim }] }}>
      <Pressable
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
        onPress={() => console.log("Ver Pressionado")} // Adicione sua ação aqui
        style={styles.botao}
      >
        <Text style={styles.textoBotao}>Ver</Text>
      </Pressable>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  botao: {
    backgroundColor: '#DCEAE6', // Cor de fundo do botão
    borderRadius: 10,
    paddingVertical: 4, // Reduz o espaçamento vertical
    paddingHorizontal: 20, // Reduz o espaçamento horizontal
    alignItems: 'center', // Centraliza o conteúdo horizontalmente
    width:100,
    height:30,
    top: -74,
    left: 64
  },
  textoBotao: {
    color: '#226752',
    fontSize: 14, // Tamanho da fonte reduzido
    textAlign: 'center',
    
  },
});

export default AnimatedButton;
