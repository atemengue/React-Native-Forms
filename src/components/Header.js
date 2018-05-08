import React from 'react';
import { View, Text } from 'react-native';

const Header = (props) => {

    const { textStyle, viewStyle } = styles;

    return (
        <View style={viewStyle}>
            <Text style={textStyle}>{props.headerTitle}</Text>
        </View>
    );
};



const styles = {
    textStyle: {
        fontSize: 20,
        fontWeight: 'bold'
    },

    viewStyle: {
        backgroundColor: '#ddd',
        alignItems: 'center',
        justifyContent: 'center',
        height: 40,
        paddingTop: 5,
        paddingBottom: 5,
        elevation: 1,
        marginBottom: 10,
    }
};

export default Header;
