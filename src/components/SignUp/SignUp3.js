import React, {Component} from 'react';
import { View, Text, TextInput, Button} from 'react-native';
import Footer from '../Footer';
import Form3 from '../Forms/Form3';


const SignUp3 =  () => {
    return(
        <View>
            <Text style={{ marginBottom:10, fontSize: 18 , margin:20 }}>Sign Up 3</Text>                
            <Form3 />
            <Footer footerText={'Have an account? Login'} />
        </View>
    );
};

export default  SignUp3;