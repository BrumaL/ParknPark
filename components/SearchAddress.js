import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

class SearchAddress extends Component {
  render() {
    return (
      <View style={styles.searchSection}>
        <TextInput
          style={styles.input}
          icon={{ type: 'font-awesome', name: 'search' }}
          placeholder={'Sök adress'}
          underlineColorAndroid='rgba(0,0,0,0)'
          selectionColor='#424242'
        />
        <View
          style = {{
            height: 24,
            width: 1,
            backgroundColor: '#424242'
          }} />
        
        <TouchableOpacity
          onPress={() => console.log('pressed')}>
          <Icon
            reverse
            style={styles.searchIcon}
            name='search'
            type='font-awesome'
            size={18}
          />
        </TouchableOpacity>
          
      </View>
    );
  }
}

const styles = {
  searchSection: {
    paddingLeft: 10,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 1,
    elevation: 1,
  },
  searchIcon: {
      padding: 15,
  },
  input: {
      flex: 1,
      paddingTop: 10,
      paddingRight: 10,
      paddingBottom: 10,
      paddingLeft: 0,
      backgroundColor: '#fff',
      color: '#424242',
  },
}
export default SearchAddress;
