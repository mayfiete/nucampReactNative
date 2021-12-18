
import React, { Component } from 'react';
import { FlatList } from 'react-native';
import { ListItem } from 'react-native-elements';
import { ScrollView } from 'react-native';
import { Text } from 'react-native-elements';

class Contact extends Component {
    static navigationOptions = {
        title: 'Contact Us'
    };

    render() {
        const { navigate } = this.props.navigation;
        return (
            <ScrollView>

            </ScrollView>
        );
    }
}


export default Contact;

