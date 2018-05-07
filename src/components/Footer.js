import React from 'react';
import { View, Text } from 'react-native';

const Footer = () => {

    const {footerStyle } = styles;

    return (
        <View style={footerStyle}>
            <Text>Don't have an account? Sign UP</Text>
        </View>
    );
};

const styles = {
    footerStyle: {
        height:80,
        alignItems: 'center',
        justifyContent: 'center',
        borderTopWidth: 1,
        borderBottomWidth: 1,
        padding: 10,
    }
};

export default Footer;