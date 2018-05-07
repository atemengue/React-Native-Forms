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

        const { viewStyle, textStyle , textInputStyle, viewRow, buttonStyle , ortherView } = styles;
        return(
            <View>
                <View style={viewStyle}>
                    <Text style={textStyle}>Log In 2</Text>
                  
                    <View>
                        
                        <View style={buttonStyle}>
                            <Button 
                                onPress={this.onPressLearnMore}
                                title="Log In with Google"
                                color="#f73859"
                                accessibilityLabel="Learn more about this purple button"
                            />
                        </View>
                        <View style={buttonStyle}>
                            <Button 
                                onPress={this.onPressLearnMore}
                                title="Log In with Facebook"
                                color="#3379e4"
                                accessibilityLabel="Learn more about this purple button"
                            />
                        </View>  
                        <View style={buttonStyle}>
                            <Button 
                                onPress={this.onPressLearnMore}
                                title="Log In with Twitter"
                                color="#00bbf0"
                                accessibilityLabel="Learn more about this purple button"
                            />
                        </View>

                    </View>
                    <View style={ buttonStyle, ortherView}>
                        <Text style={{borderBottomWidth:2 , width:80 }}></Text>
                        <Text style={{paddingLeft: 15 , paddingRight: 15}}>OR</Text>
                        <Text style={{borderBottomWidth:2 , width:80 }}></Text>
                    </View>
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
                            <Button style={buttonStyle}
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

    buttonStyle: {
        marginBottom :10,
        marginTop:10
    },

    ortherView: {
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        marginBottom:10,
        marginTop:10,
    }
};

export default Login1;