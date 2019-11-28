import React, { useEffect, useRef } from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { WebView } from 'react-native-webview';

const WebViewGraph = () => {

  const theCanvas = useRef(null)

  useEffect(() => {
    let c = theCanvas.current
    // let ctx = c.getContext("2d")
    console.log("ctx:", c);
}, [])

  let dummy = `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.7.2/Chart.min.js"></script>
      </head>
      <body>
        <div>
        <canvas id="chart"></canvas>
        </div>
      </body>
    </html>`

  onMessage = (data) => {
    console.log(data)
  }

    return (
      <View style={styles.full}>
        <WebView
          ref={theCanvas}
          style={{backgroundColor: 'black', marginTop: 30}}
          source={{ html: dummy, baseUrl: 'web/' }}
          javaScriptEnabled
          domStorageEnabled
          scalesPageToFit
          scrollEnabled={false}
          automaticallyAdjustContentInsets
          // onMessage={this.onMessage}
        />
        <Text>Heyy</Text>
      </View>
        // <WebView    
        //   source={{ html: str }}    
        //   style={{ marginTop: 20 }}    
        // />
    )
}

const styles = StyleSheet.create({
  full: {
    flex: 1,
    backgroundColor: '#c3c3c3'
  }
})

export default WebViewGraph