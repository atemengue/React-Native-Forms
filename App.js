import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import Header from './src/components/Header';
import Login1 from './src/components/Login1';
import Login2 from './src/components/Login2';

export default class App extends Component {
    render() {
        return (
            <View style={{flex: 1 }}>
                <ScrollView>
                    <Header headerTitle={'SIGNUP LOGIN'} />
                    <Login1 />
                    <Login2 />
                </ScrollView>
            </View>
        );
    }
}

