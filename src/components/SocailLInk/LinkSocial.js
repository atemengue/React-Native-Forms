import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

class LinkSocial extends Component {

    onPressLearnMore() {
        return 0;
    }

    render(){
        const  { buttonStyle , viewStyle } = styles;
        return(
            <View style={ viewStyle }>     
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
        );
    }
}

const styles = {

    buttonStyle: {
        marginBottom :10,
        marginTop:10
    },

    viewStyle: {
        margin: 20
        
    }

};

export default LinkSocial;