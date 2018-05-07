import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import Header from './src/components/Header';
import Login1 from './src/components/Login1';
import Login2 from './src/components/Login2';
import SignUp1 from './src/components/SignUp1';
import SignUp2 from './src/components/SignUp2';

export default class App extends Component {
    render() {
        return (
            <View style={{flex: 1 }}>
                <ScrollView>
                    <Header headerTitle={'SIGNUP LOGIN'} />
                    <Login1 />
                    <Login2 />
                    <SignUp1 />
                    <SignUp2/>
                </ScrollView>
            </View>
        );
    }
}

