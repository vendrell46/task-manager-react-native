import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

import firestore from '@react-native-firebase/firestore'

const userDocument = firestore().collection("checklist").doc('4g3jT9qcoJ4GGobXx0CV').get()

export function getFirestoreData(enteredText) {
    console.log(userDocument);
    
}