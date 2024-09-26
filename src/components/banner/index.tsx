import { View, Pressable, Image, Text } from 'react-native';
import PagerView from 'react-native-pager-view';

export function Banner() {
  return (
    <View style={{ width: '100%', height: 200, borderRadius: 20, marginTop: 20, marginBottom: 16 }}>
      <PagerView style={{ flex: 1 }} initialPage={0} pageMargin={14}>
        <Pressable
          key="1"
          onPress={() => console.log("CLICOU NO BANNER 1")}
          style={{ flex: 1 }}
        >
          <View
            style={{
              width: '95%',
              height: '80%',
              backgroundColor: '#619C95',
              borderRadius: 20,
              justifyContent: 'center',
              alignItems: 'center', // Centraliza todos os itens horizontalmente
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
            }}
          >
            {/* Texto com quebra de linha */}
            <Text
              style={{
                color: '#fff',
                fontSize: 19,
                fontWeight: 'normal', // Fonte mais fina
                textAlign: 'center', // Centraliza o texto
                marginBottom: 10, // Espaçamento entre o texto e a imagem
                right: 84,
                top: 80,
              }}
            >
              Encontre hospitais{'\n'}perto de você!
            </Text>

            {/* Imagem com sombra */}
            <Image
              source={require('../../assets/image.png')}
              style={{
                width: '50%',
                height: '102%', // Ajusta a altura proporcionalmente
                borderRadius: 20,
                marginBottom: 10, // Espaçamento entre a imagem e o botão
                left: 100,
                top: -9,
                // Sombra aplicada na imagem
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.25,
                shadowRadius: 3.84,
              }}
            />

            {/* Botão "Ver" */}
            <Pressable
              style={{
                backgroundColor: '#DCEAE6', // Cor de fundo do botão
                borderRadius: 10,
                paddingVertical: 6, // Espaçamento vertical
                paddingHorizontal: 35, // Espaçamento horizontal
                right: 90,
                position:"relative",
                top:-80
              }}
              onPress={() => console.log("CLICOU NO BOTÃO VER")}
            >
              <Text
                style={{
                  color: '#619C95', // Cor da fonte
                  fontSize: 16, // Tamanho da fonte do botão
                  fontWeight: 'bold', // Peso da fonte do botão
                }}
              >
                Ver
              </Text>
            </Pressable>
          </View>
        </Pressable>
      </PagerView>
    </View>
  );
}
