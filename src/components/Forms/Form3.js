import React,{ Component } from 'react';
import { View, Text, TextInput, Button} from 'react-native';

class Form3 extends Component {
    
    onPressLearnMore(){
        return 0;
    }

    render(){
        const { viewStyle , verticalStyle, textInputStyle, viewRow } = styles;
        return(
            <View style={viewStyle}>
                <View style={verticalStyle} >
                    <View style={{flex: 1}}>
                        <TextInput style={textInputStyle} underlineColorAndroid='transparent' placeholder="First Name" />                   
                    </View>
                    <View style={{flex: 1}}>
                        <TextInput style={textInputStyle} underlineColorAndroid='transparent' placeholder="Last Name"/>                   
                    </View>
                </View>
                <View>
                    <View>
                        <TextInput style={textInputStyle} underlineColorAndroid='transparent' placeholder="Username"/>  
                    </View>
                    <View>
                        <TextInput style={textInputStyle} underlineColorAndroid='transparent' placeholder="Email" />  
                    </View>
                    <View>
                        <TextInput style={textInputStyle} underlineColorAndroid='transparent' placeholder="Password"/>  
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
    verticalStyle: {
        flexDirection:'row',
        alignItems: 'center',
        
    },

    textInputStyle: {
        borderTopWidth: 1 ,
        borderLeftWidth: 1 , 
        borderRightWidth: 1 ,
        borderBottomWidth: 1,
        paddingLeft: 10,
        height:55
    },
    viewRow: {
        flexDirection:'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 5,
    },
};


export default Form3;