import React from 'react';
import {Text,View,Image} from 'react-native';

export default class FbScreen extends React.Component{
    render(){
        return(
            
            <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
            <View>
                <Text style={{marginLeft:60}}>Face Book</Text>

                <Image source={require("../assets/proc68.png")}
                style={{width:200,height:200}}/>
            </View>

            </View>
        )
    }
}
 