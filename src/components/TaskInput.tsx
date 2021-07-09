import React, {useState} from 'react'
import { View, TextInput, Button, StyleSheet } from 'react-native'


const TaskInput = props => {

    const [enteredTask, setEnteredTask] = useState('')

    const taskInputHandler = (enteredText) => {
        setEnteredTask(enteredText)
    }

    const addTaskHandler = () => {
        props.onAddTask(enteredTask)
    }

    return (
        <View style={styles.inputContainer}>
          <TextInput 
            style={styles.input}
            placeholder="What do we add?"
            onChangeText={taskInputHandler}
            clearButtonMode= 'always'
            blurOnSubmit
            autoCorrect={false}
          />
          <Button
            onPress={addTaskHandler}
            title="ADD"
          />
        </View>
    )
}

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: "row",
        alignItems: "center",
        margin: 10,
        justifyContent: 'space-between'
    },
    input: {
        fontSize: 18,
        fontWeight: '200',
        flex: 0.8,
        borderWidth: 1,
        height: 40,
        paddingHorizontal: 10
    },
})

export default TaskInput