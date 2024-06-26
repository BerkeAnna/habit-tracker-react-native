import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';

const Navbar = ({ onItemPress }) => {
  const data = [
    { key: 'Habits' },
    { key: 'Habit Tracker' },
  ];

  return (
    <View style={styles.container}>
      <FlatList
        horizontal
        data={data}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => onItemPress(item.key)}>
            <View style={styles.item}>
              <Text style={styles.itemText}>{item.key}</Text>
            </View>
          </TouchableOpacity>
        )}
        keyExtractor={item => item.key}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#004363',
    justifyContent: 'center',
    alignItems: 'center',
  },
  item: {
    backgroundColor: '#0087C8',
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
    marginHorizontal: 5,
  },
  itemText: {
    color: '#FFF',
    fontWeight: 'bold',
  },
});

export default Navbar;
