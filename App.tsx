import React, { useState, useEffect } from 'react'
import {
  SafeAreaView,
  StyleSheet,
  View,
  Button,
  FlatList,
} from 'react-native'


import TaskItem from './src/components/TaskItem'
import AppTitle from './src/components/AppTitle'
import TaskInput from './src/components/TaskInput'

import firestore, { firebase } from '@react-native-firebase/firestore'

const App = () => {
  const [listTask, setListTask] = useState([])
  const checklist = firestore().collection("checklist")

  const update = () => {
    checklist.onSnapshot((querySnapshot) => {
      let tasks = []
      querySnapshot.forEach((documentSnapshot) => {
        tasks.push(documentSnapshot.data())
        // setListTask(currentList => [
        //   ...currentList, {
        //     id: documentSnapshot.id,
        //     value: documentSnapshot.data().value,
        //     description: documentSnapshot.data().description,
        //     complete: documentSnapshot.data().complete
        //   }
        // ])
        
      });
      console.log("updated list: " + listTask);
      setListTask(tasks)
      tasks = []
    })
  }

  const addTaskHandler = (taskName) => {
    checklist.add({ complete: false, description: '', value: taskName })
      .then(docRef => {
        checklist.doc(docRef.id).set({
          id: docRef.id, 
          complete: false, 
          description: '', 
          value: taskName
        })
      })

    // setListTask(currentList => [
    //   ...currentList, {
    //     id: Math .random().toString(),
    //     value: taskName, 
    //     description: '',
    //     complete: false
    //   }
    // ])
  }

  const completedTaskHandler = (task) => {
    checklist.doc(task.id)
      .update({ complete: true }) 
  }

  const deleteTaskHandler = (taskId) => {
    checklist.doc(taskId).delete()
  }

  const saveTaskDescriptionHandler = (task) => {
    checklist.doc(task.id)
      .update({ description:  task.description })
  }

  const saveTaskTitleHandler = (task) => {
    checklist.doc(task.id)
      .update({ value:  task.value })
  }

  return (
    <SafeAreaView>
      <View style={styles.mainContainer}>
        <AppTitle/>
        <TaskInput onAddTask={addTaskHandler}/>
        <FlatList
          data={listTask} 
          renderItem={itemData =>
             <TaskItem
              itemData={itemData}
              onComplete={completedTaskHandler}
              onDelete={deleteTaskHandler}
              onSaveDescription={saveTaskDescriptionHandler}
              onEditTaskTitle={saveTaskTitleHandler}
            />
          }
          keyExtractor={(item) => item.id}
        />
        <Button
          title='Load'
          onPress={update}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    marginTop: 10,
    paddingHorizontal: 24,
  },
});

export default App;
