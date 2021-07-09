import React, { useState } from 'react'
import { View, ScrollView, Text, Button, Modal, StyleSheet, TextInput } from 'react-native'

const TaskDetails = props => {

    const [editedTask, setEditedTask] = useState('')
    const [enteredDescriptionText, setDescriptionText] = useState('')

    const editTask = (editedTask) => {
        setEditedTask(editedTask)
    }

    const saveTask = () => {
        if (editedTask.trim() != '') {
            props.itemData.item.value = editedTask
            props.onEditTaskTitle(props.itemData.item.id)
        } 
        if (enteredDescriptionText.trim() != '') {
            props.itemData.item.description = enteredDescriptionText
            props.onSaveDescription(props.itemData.item.id)
        }
    }

    const addDescription = (enteredDescriptionText) => {
        setDescriptionText(enteredDescriptionText)
    }

    return (
        <Modal visible={props.visible} animationType='slide'>
            <ScrollView>
                <View style={styles.titleContainer}>
                    <Button
                        title='ᐸ'
                        color='black'
                        onPress={props.onClose}
                    />
                    <TextInput
                        style={styles.title}
                        defaultValue={props.itemData.item.value}
                        onChangeText={editTask}
                    />
                </View>
                <Text style={styles.descriptionTitle}>Description:</Text>
                <TextInput
                    style={styles.descriptionInput}
                    defaultValue={props.itemData.item.description}
                    onChangeText={addDescription}
                    multiline={true}
                    numberOfLines={5}
                    maxLength={140}
                    textAlignVertical='top'
                    autoCorrect={false}
                />
            </ScrollView>
            
            <View style={styles.buttonsContainer}>
                <Button
                    title='Delete'
                    onPress={props.onDelete}
                />
                <Button
                    title='Save'
                    onPress={saveTask}
                />
            </View>
        </Modal>
    )
    
}

const styles = StyleSheet.create({
    titleContainer: {
        flex: 1,
        marginTop: 30,
        flexDirection: "row",
        paddingHorizontal: 20,
        alignItems: "center",
        paddingTop: 20,
      },
    title: {
        fontSize: 22,
        fontWeight: '500',
        flex: 0.9,
        height: 50,
        paddingHorizontal: 10,
        marginLeft: 20
    },
    descriptionTitle: {
        fontSize: 18,
        fontWeight: '400',
        paddingHorizontal: 10,
        marginHorizontal: 30,
        marginTop: 30,
        marginBottom: 15

    },
    descriptionInput: {
        fontSize: 15,
        fontWeight: '200',
        color: 'black',
        flex: 0.8,
        borderWidth: 1,
        paddingHorizontal: 10,
        marginHorizontal: 30,
    },
    buttonsContainer: {
        flexDirection: "row",
        alignItems: "center",
        margin: 30,
        justifyContent: 'space-between'
    },
})

export default TaskDetails