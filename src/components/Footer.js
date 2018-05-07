import React from 'react';
import { View, Text } from 'react-native';

const Footer = (props) => {

    const {footerStyle } = styles;

    return (
        <View style={footerStyle}>
            <Text>{props.footerText}</Text>
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