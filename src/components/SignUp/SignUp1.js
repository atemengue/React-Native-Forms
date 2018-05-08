import React, {Component} from 'react';
import { View, Text } from 'react-native';
import Footer from '../Footer';
import Form2 from '../Forms/Form2';

const SignUp = () => {
    return(
        <View>
            <Text style={{ marginBottom:10, fontSize: 18 , margin:20 }}>Sign Up1</Text>
            <Form2 />
            <Footer footerText={'Have an account? Login'} />
        </View>
    );
};

export default  SignUp;