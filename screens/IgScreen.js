import React from 'react';
import {Text,View,Image} from 'react-native';

export default class IgScreen extends React.Component{
    render(){
        return(
            <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                <Text>Instagram</Text>
                <View>
                    <Image source={require("../assets/img.jpg")}
                    style={{width:200,height:200}}/>
                </View>

            </View>
        )
    }
}
 