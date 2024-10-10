import { View, TextInput } from 'react-native';
import { Feather } from '@expo/vector-icons'

export function Search() {
 return (
  <View style={{ width: '95%', flexDirection: 'row', borderWidth: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    top:-11,
  borderColor: '#64748b', height: 40, borderRadius: 20, alignItems: 'center', paddingHorizontal: 10, backgroundColor: 'transparent', left:13}}>
  <Feather name='search' size={24} color="#64748b" />


    <TextInput
      placeholder="Procure por um doutor, medicamento..."
      className='w-full h-full flex-1 bg-transparent'
    />
   </View>
  );
}