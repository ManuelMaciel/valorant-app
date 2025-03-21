import { View, Text,Image,ScrollView,TouchableOpacity } from 'react-native'
import React, {useState,useEffect} from 'react'
import LoadingScreen from './LoadingScreen';
import { getWeaponsByUuid } from '../../src/api/services/valorantServices';
import { lang } from '../../src/utils/lang';

export default function WeaponInfoScreen({route}) {
  
  const [weapon, setWeapon] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [currentSkin, setCurrentSkin] = useState('Default');
  const [currentSkinUri, setCurrentSkinUri] = useState();

  useEffect(async() => {
  const data = await getWeaponsByUuid(route.params.uuid, lang.es)
  setWeapon(data)
  setCurrentSkinUri(data.displayIcon)
  setIsLoading(false)
  }, []);
  return (
    <View style={{flex:1,width:'100%',backgroundColor:'black'}} >
      {
          isLoading?<LoadingScreen/>:
          <View>
              <View style={{width:'100%',minHeight:200,backgroundColor:'white',borderRadius:20,padding:20}} >
                <Image source={{uri:currentSkinUri}} style={{alignSelf:'center',position:'absolute',width:'100%',height:'80%',resizeMode:'contain'}} />
                <Text style={{color:'black',fontFamily:'Oswald_700Bold',letterSpacing:2,fontSize:30,marginTop:120}} >{weapon.displayName.toUpperCase()}</Text>
                <Text style={{color:'black',fontFamily:'Oswald_700Bold',letterSpacing:2,fontSize:15}} >{weapon.category.split('::')[1].toUpperCase()}</Text>
                <Text style={{color:'black',fontFamily:'Oswald_700Bold',letterSpacing:2,fontSize:15}} >{currentSkin}</Text>
                <Text style={{color:'black',fontWeight:'bold',letterSpacing:2,fontSize:15,marginTop:10}} >// SKINS</Text>
                <ScrollView horizontal style={{marginTop:20}} showsHorizontalScrollIndicator={false}>
                    {
                        weapon.skins.map((e)=>
                        <TouchableOpacity key={e.displayName} onPress={()=>{setCurrentSkinUri(e.chromas[0].fullRender),setCurrentSkin(e.displayName)}} style={{marginRight:10,padding:5,backgroundColor:'#e9ecef',borderRadius:10}} >
                            <Image source={{uri:e.chromas[0].fullRender}} style={{height:50,width:50,resizeMode:'contain'}}/>
                        </TouchableOpacity>
                        )
                    }
                </ScrollView>
              </View>
              <View style={{marginTop:20,marginHorizontal:20}} >
              </View>
          </View>
      }
    </View>
  )
}