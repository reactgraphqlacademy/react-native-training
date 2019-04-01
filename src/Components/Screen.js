import React from 'react'
import { View, SafeAreaView } from 'react-native'
import { Colors } from '../config/utils'

export const Screen = ({ style = {}, children, ...rest }) => (
  <React.Fragment>
    <SafeAreaView
      style={[style, { flex: 0, backgroundColor: Colors.brand.primary }]}
    />
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
      <View style={{ flex: 1, backgroundColor: '#fff' }}>
        {children}
      </View>
    </SafeAreaView>
  </React.Fragment>
);
