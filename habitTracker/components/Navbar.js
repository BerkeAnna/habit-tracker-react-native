import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const Navbar = () => {
  const data = [
    { key: 'Habits' },
    { key: 'Habit Tracker' },
    // Add more items here
  ];

  return (
    <View style={styles.container}>
      <FlatList
        horizontal
        data={data}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.itemText}>{item.key}</Text>
          </View>
        )}
        keyExtractor={item => item.key}
        showsVerticalScrollIndicator={false}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: '#000000',
  },
  item: {
    backgroundColor: '#FF5F94',
    padding: 10,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  itemText: {
    color: '#FFF',
    fontWeight: 'bold',
  },
});

export default Navbar;
