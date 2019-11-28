import React from 'react';
import {Text, View, Image, ImageBackground, StyleSheet} from 'react-native';

const InitialLoadingScreen = () => {
    return(
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            {/* <Text>Initial screen</Text> */}
            <ImageBackground source={require('../assets/images/background.png')} style={styles.imageBackground}>
                <View style={{ flexDirection: 'row', justifyContent: 'flex-end', height: "42%", width: '52%'}}>
                    <Image
                        style={{width: 45, height: 50, marginRight: 5}}
                        source={require('../assets/images/logo.png')}
                    />
                    <Text style={{color: 'black', fontSize: 40,}}>Graph</Text> 
                </View>  
                <View style={{flexDirection: 'column', justifyContent: 'center', width: '50%', marginLeft: 12}}> 
                    <Text style={{color: 'white', fontSize: 40, fontWeight: 'bold'}}>worms</Text>
                    <Text style={{color: 'white', fontSize: 16, marginLeft: 8}}>Learn </Text>
                    <Text style={{color: 'white', fontSize: 16, marginLeft: 8}}>algebra</Text>
                    <Text style={{color: 'white', fontSize: 16, marginLeft: 8}}>the fun </Text>
                    <Text style={{color: 'white', fontSize: 18, marginLeft: 8}}>way!</Text>
                </View> 
            </ImageBackground>
        </View>

    )
}


const styles = StyleSheet.create({
    imageBackground: {
        flex: 1, 
        flexDirection: 'row',
        justifyContent: 'center', 
        alignItems: 'center', 
        width: '100%', 
        height: '100%'
    }
});

export default InitialLoadingScreen;