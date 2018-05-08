import React, { Component } from 'react';
import { TextInput, View, Text, Button, CheckBox } from 'react-native';

class Form1 extends Component {

    onPressLearnMore (){
        return( <Text>
                 reggis atemengue
        </Text>);
    }

    render() {

        const { viewStyle, textInputStyle, viewRow } = styles;
        return(
            <View style={viewStyle}>
                <View>
                    <TextInput style={textInputStyle} underlineColorAndroid='transparent'  placeholder="Email" inlineImageLeft="search_icon"/>
                    <TextInput style={textInputStyle}  underlineColorAndroid='transparent' placeholder="Password"/>
                </View>
                <View style={viewRow}>
                    <View style={viewRow}>
                        <CheckBox />
                        <Text style={{marginTop: 2}}>Remenber Me</Text>
                    </View>
                    <View>
                        <Button
                            onPress={this.onPressLearnMore}
                            title="LOG IN"
                            color="#841584"
                            accessibilityLabel="Learn more about this purple button"
                        />
                    </View>
                </View>
            </View>
        );
    }
}

const styles = {
    viewStyle: {
        margin: 20
    },
    textInputStyle: {
        borderTopWidth: 1 ,
        borderLeftWidth: 1 , 
        borderRightWidth: 1 ,
        borderBottomWidth: 1,
        marginTop: 5,
        marginBottom: 5 ,
        paddingLeft: 10,
        height:40
    },

    viewRow: {
        flexDirection:'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 5,
    },
};


export default Form1 ;