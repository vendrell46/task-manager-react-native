import React, {useState} from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import TaskDetails from './TaskDetails'


const TaskItem = props => {
    const [isModalVisible, setModalVisible] = useState(false)
    const [isTaskCompleted, setTaskCompleted] = useState(false)

    const markTaskAsCompleted = () => {
        props.onComplete(props.itemData.item)
        setTaskCompleted(true)
    }

    const deleteTaskDetails = () => {
        props.onDelete(props.itemData.item.id)
        closeTaskDetails()
    }

    const saveTaskDescription = () => {
        props.onSaveDescription(props.itemData.item)
        closeTaskDetails()
    }

    const saveTaskTitle = () => {
        props.onEditTaskTitle(props.itemData.item)
        closeTaskDetails()
    }

    const closeTaskDetails = () => {
        setModalVisible(false)
    }

    return (
        <View style={styles.listItem}>
            <TouchableOpacity onPress={() => setModalVisible(true)} >
                <Text style={styles.labelItem}>{props.itemData.item.value}</Text>
            </TouchableOpacity>
            <TouchableOpacity 
                onPress={() => markTaskAsCompleted()} 
                style={[styles.doneContainer, isTaskCompleted && styles.doneCompletedContainer]}
                disabled={isTaskCompleted}
            >
                <Text style={styles.doneItem}>Done</Text>
            </TouchableOpacity>
            <TaskDetails 
                visible={isModalVisible} 
                onDelete={deleteTaskDetails}
                onClose={closeTaskDetails}
                onSaveDescription={saveTaskDescription}
                onEditTaskTitle={saveTaskTitle}
                itemData={props.itemData}
            />
        </View> 
    )
}

const styles = StyleSheet.create({
    listItem: {
        padding: 10,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: 'space-between'
    },
    labelItem: {
        fontSize: 18,
        fontWeight: '400',
        marginBottom: 8
    },
    doneContainer: {
        backgroundColor: '#87CEFA'
    },
    doneCompletedContainer: {
        backgroundColor: '#7EC850'
    },
    doneItem: {
        fontSize: 16,
        padding: 6,
    },
})

export default TaskItem