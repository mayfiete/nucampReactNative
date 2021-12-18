
import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import { Text } from 'react-native-elements';
import { FlatList } from 'react-native';
import { ListItem } from 'react-native-elements';


class About extends Component {
    static navigationOptions = {
        title: 'About Us'
    };

    render() {
        const { navigate } = this.props.navigation;
        return (
            <ScrollView>

            </ScrollView>
        );
    }
}


export default About;

