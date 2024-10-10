import { Text, View, ScrollView} from "react-native";
import Constants from 'expo-constants'

import { Header } from "../components/header";
import { Categorias } from "../components/Categorias";
import { Search } from "../components/search";
import { Banner } from "../components/Banner";
import Especialistas from "../components/Especialistas";


const statusBarHeight = Constants.statusBarHeight;

export default function Indexn() {
  return (
    <ScrollView 
      style={{ flex: 1 }} 
      className="bg-slate-200" 
      showsVerticalScrollIndicator={false}
    >
      <View className="w-full px-4" style={{ marginTop: statusBarHeight + 8 }}>
        <Header/>

       

      </View>
     <Categorias/>
      <Search/>
     <Banner/>
     <Especialistas/>
    </ScrollView>
  );
}