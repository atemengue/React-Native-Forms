import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import Header from './src/components/Header';
import Login1 from './src/components/Login/Login1';
import Login2 from './src/components/Login/Login2';
import SignUp1 from './src/components/SignUp/SignUp1';
import SignUp2 from './src/components/SignUp/SignUp2';
import SignUp3 from './src/components/SignUp/SignUp3';
import SignUp4 from './src/components/SignUp/SignUp4';
import Password from './src/components/ForgetPass';
import CheckEmail from './src/components/CheckEmail';

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
                    <SignUp3/>
                    <SignUp4/>
                    <Password />
                    <CheckEmail />
                </ScrollView>
            </View>
        );
    }
}

