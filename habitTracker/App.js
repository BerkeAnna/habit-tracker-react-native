import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { KeyboardAvoidingView, StyleSheet, Text, View, TextInput, Platform, Pressable, Keyboard, FlatList } from 'react-native';
import Task from './components/Task';
import Navbar from './components/Navbar';

export default function App() {
  const [task, setTask] = useState('');
  const [taskItems, setTaskItems] = useState([]);
  const [selectedPage, setSelectedPage] = useState('Habits');

  const handleAddTask = () => {
    Keyboard.dismiss();
    if (task) {
      setTaskItems([...taskItems, { text: task, completed: false }]);
      setTask('');
    }
  };

  const completeTask = (index) => {
    let itemsCopy = [...taskItems];
    itemsCopy[index].completed = !itemsCopy[index].completed;
    setTaskItems(itemsCopy);
  };

  const deleteTask = (index) => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy);
  };

  const handleNavbarItemPress = (page) => {
    setSelectedPage(page);
  };

  return (
    <View style={styles.container}>
      <Navbar onItemPress={handleNavbarItemPress} />
      <View style={styles.main}>
        {selectedPage === 'Habits' ? (
          <View style={styles.tasksWrapper}>
            <Text style={styles.sectionTitle}>Today's tasks</Text>
            <FlatList
              data={taskItems}
              renderItem={({ item, index }) => (
                <Pressable onPress={() => deleteTask(index)}>
                  <Task text={item.text} completed={item.completed} />
                </Pressable>
              )}
              keyExtractor={(item, index) => index.toString()}
              contentContainerStyle={styles.items}
            />
          </View>
        ) : (
          <View style={styles.tasksWrapper}>
            <Text style={styles.sectionTitle}>{selectedPage}</Text>
            <FlatList
              data={taskItems}
              renderItem={({ item, index }) => (
                <Pressable onPress={() => completeTask(index)}>
                  <Task text={item.text} completed={item.completed} />
                </Pressable>
              )}
              keyExtractor={(item, index) => index.toString()}
              contentContainerStyle={styles.items}
            />
          </View>
        )}
      </View>
      {selectedPage === 'Habits' && (
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={styles.writeTaskWrapper}
        >
          <TextInput
            style={styles.input}
            placeholder={'Write a task'}
            value={task}
            onChangeText={text => setTask(text)}
          />
          <Pressable onPress={handleAddTask}>
            <View style={styles.addWrapper}>
              <Text style={styles.addText}>+</Text>
            </View>
          </Pressable>
        </KeyboardAvoidingView>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
  },
  main: {
    flex: 1,
    padding: 20,
  },
  tasksWrapper: {
    paddingTop: 80,
    flex: 1,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  items: {
    marginTop: 30,
    paddingBottom: 100,
  },
  writeTaskWrapper: {
    position: 'absolute',
    bottom: 60,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    width: 250,
    backgroundColor: '#FFF',
    borderRadius: 60,
    borderColor: '#C0C0C0',
    borderWidth: 1,
  },
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: '#FFF',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#C0C0C0',
    borderWidth: 1,
  },
  addText: {},
});
