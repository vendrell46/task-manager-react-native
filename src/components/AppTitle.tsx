import React from 'react'
import { View, Text, StyleSheet } from 'react-native'


const AppTitle = () => {
    return (
        <View style={styles.titleView}>
            <Text style={styles.titleText}>
                Task Manager
            </Text>
        </View>
    )
    
}

const styles = StyleSheet.create({
    titleView: {
        alignItems: "center",
        marginBottom: 20,
      },
      titleText: {
        fontSize: 24,
        fontWeight: '600',
      },
})

export default AppTitle