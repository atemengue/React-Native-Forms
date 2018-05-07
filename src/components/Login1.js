import React, { Component } from 'react';
import { View, Text, TextInput, CheckBox, Button  } from 'react-native';
import Footer from './Footer';

class Login1 extends Component {

    onPressLearnMore (){
        return( <Text>
                 reggis atemengue
        </Text>);
    }

    render () {

        const { viewStyle, textStyle , textInputStyle, viewRow } = styles;
        return(
            <View>
                <View style={viewStyle}>
                    <Text style={textStyle}>Log In1</Text>
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
                <Footer />
            </View>
        );
    }

}

const styles = {
    viewStyle: {
        margin: 20
    },

    textStyle: {
        fontSize:18,
        marginBottom: 10
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

export default Login1;