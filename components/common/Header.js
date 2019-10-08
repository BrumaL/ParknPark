// Import libraries for making a component
import React from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';

// Make a component
const Header = (props) => {
    const { textStyle, viewStyle } = styles;

    return (
        <View style={viewStyle}>
          {/* <View>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('')}>
              <Image source={require('../../assets/images/menu-button.png')} />
            </TouchableOpacity>
          </View> */}
          <View>
          <Text style={textStyle}>{props.headerText}</Text>
          </View>
        </View>
    );
};

const styles = {
    viewStyle: {
        backgroundColor: '#980C85',
        // justifyContent: 'center',
        // alignItems: 'center',
        height: 60,
        paddingTop: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        elevation: 2,
        position: 'relative'
    },
    textStyle: {
        fontSize: 20
    }
};

// Make the component available to other parts of the app
export { Header };
