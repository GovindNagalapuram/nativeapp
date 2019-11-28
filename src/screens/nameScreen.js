import React from 'react';
import { View, Text, Image, TextInput} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const NameScreen = () => {
    return(
        <View style={{flex: 1, flexDirection: 'column', alignItems: 'center'}}>
            <View style={{flexDirection: 'row',justifyContent: 'flex-start', alignItems: 'center', width: '80%'}}>
                <Image
                    source= {require('../assets/images/worm.png')}
                    style={{width: 90, height: 90, resizeMode: 'contain',  marginTop: '12%'}}
                />
                <View style={{margin: 15}}>
                    <Text>/</Text>
                </View>
                <View>
                    <Text style={{fontSize: 24}}>Hello there, type</Text>
                    <Text style={{fontSize: 24}}>in your name!</Text>
                </View>
            </View>
            <View style={{width: "65%", alignItems: 'flex-end', marginTop: '3%'}}>
                <TextInput
                    style={{width: "78%", height: 50,fontSize: 22, borderBottomColor: 'grey', borderBottomWidth: 3}}
                    placeholder= "Your name here"
                />
                <TouchableOpacity style={{backgroundColor: 'background-image: linear-gradient( 89.5deg,  rgba(246,114,128,1) 0.2%, rgba(248,177,149,1) 90.6% );', width: 80, padding:10, borderRadius: 10, marginTop: 10}}>
                    <Text style={{textAlign: 'center', color: '#fff'}}>GO!</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default NameScreen;