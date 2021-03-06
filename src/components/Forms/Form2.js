import React, { Component } from 'react';
import { View, Text, TextInput, Button} from 'react-native';

class Form2 extends Component {

    onPressLearnMore() {
        return 0;
    }

    render(){
        const { viewStyle, verticalStyle, textInputStyle, viewRow, } = styles;
        
        return(
            <View style={viewStyle}>
                <View style={verticalStyle} >
                    <View style={{flex: 1, marginLeft: 5}}>
                        <Text>First Name</Text>               
                        <TextInput style={textInputStyle} underlineColorAndroid='transparent' />                   
                    </View>
                    <View style={{flex: 1 , marginLeft: 5}}>
                        <Text>Last Name</Text>               
                        <TextInput style={textInputStyle} underlineColorAndroid='transparent'/>                   
                    </View>
                </View>
                <View>
                    <View>
                        <Text>Username</Text>               
                        <TextInput style={textInputStyle} underlineColorAndroid='transparent'/>  
                    </View>
                    <View>
                        <Text>Email</Text>               
                        <TextInput style={textInputStyle} underlineColorAndroid='transparent'/>  
                    </View>
                    <View>
                        <Text>Password</Text>               
                        <TextInput style={textInputStyle} underlineColorAndroid='transparent'/>  
                    </View>
                </View>
                <View style={viewRow}>
                    <Text style={{flex:1}}>By signing up, you agree to our termes of service and privacy policy </Text>
                    <View style={{flex:1}}>
                        <Button
                            onPress={this.onPressLearnMore}
                            title="Sign UP"
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
    textStyle: {
        fontSize:18,
        marginBottom: 10
    },

    verticalStyle: {
        flexDirection:'row',
        alignItems: 'center',
        
    },

    buttonStyle: {
        marginBottom :10,
        marginTop:10
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

export default Form2;