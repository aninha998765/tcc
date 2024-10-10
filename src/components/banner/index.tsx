import React from 'react';
import { View, Pressable, Image, Text, StyleSheet } from 'react-native';
import PagerView from 'react-native-pager-view';
import AnimatedButton from '../Banner/Buttom';

export function Banner() {
  return (
    <View style={styles.container}>
      <PagerView style={styles.pager} initialPage={0} pageMargin={14}>
        <Pressable
          key="1"
          onPress={() => console.log("CLICOU NO BANNER 1")}
          style={styles.pressable}
        >
          <View style={styles.banner}>
            {/* Texto com quebra de linha */}
            <Text style={styles.text}>
              Encontre hospitais{'\n'}perto de você!
            </Text>

            {/* Imagem com sombra */}
            <Image
              source={require('../../assets/maps.webp')}
              style={styles.image}
            />
          </View>
        </Pressable>
      </PagerView>
      <AnimatedButton/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 200,
    borderRadius: 20,
    marginTop: 20,
    marginBottom: 16,
  },
  pager: {
    flex: 1,
  },
  pressable: {
    flex: 1,
  },
  banner: {
    width: '95%',
    height: '88%',
    backgroundColor: '#619C95',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
    position: 'relative',
    left: 10,
    top: 10,
    // Sombra aplicada no quadrado (View)
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5, // Sombra para Android
  },
  text: {
    color: '#fff',
    fontSize: 17,
    fontWeight: 'normal',
    textAlign: 'center',
    marginBottom: 10,
    right: 87,
    top: 60,
  },
  image: {
    width: '50%',
    height: '102%', // Ajusta a altura proporcionalmente
    borderRadius: 20,
    marginBottom: 10,
    left: 105,
    top: -25,
        // Sombra aplicada na imagem
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
});
7
