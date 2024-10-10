import { View, Pressable, Text } from 'react-native';
import { Ionicons, Feather } from '@expo/vector-icons';

export function Header() {
  return (
    <View>
      <View className="w-full flex flex-row items-center justify-between">
        <Pressable className="w-10 h-10 bg-white rounded-full flex justify-center items-center">
          {/* Ícone de usuário */}
          <Feather name="user" size={20} color="#121212" />
        </Pressable>

        <View className="flex flex-row items-center justify-center">
          <Text className="text-lg font-bold" style={{ color: '#226752' }}>Care </Text>
          <Text className="text-lg font-bold" style={{ color: '#121212' }}>Map</Text>
        </View>

        <Pressable className="w-10 h-10 bg-white rounded-full flex justify-center items-center">
          <Feather name="bell" size={20} color="#121212" />
        </Pressable>
      </View>

      {/* Linha separadora */}
    </View>
  );
}
