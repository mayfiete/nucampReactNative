
import React, { Component } from 'react';
import { FlatList } from 'react-native';
import { ListItem } from 'react-native-elements';
import { ScrollView } from 'react-native';
import { Text } from 'react-native-elements';
import { Card } from 'react-native-elements';
import { View } from 'react-native';

class Contact extends Component {
    static navigationOptions = {
        title: 'Contact Us'
    };

    render() {
        const { navigate } = this.props.navigation;
        return (
            <ScrollView>
                <Card wrapperStyle={{ margin: 20 }} title='Contact Information'>
                    <View
                        style={{
                            borderBottomColor: 'lightgray',
                            borderBottomWidth: 1,
                            marginBottom: 10
                        }}
                    />
                    <Text style={{ marginTop: 10 }}>
                        1 Nucamp Way
                    </Text>
                    <Text>
                        Seattle, WA 98001
                    </Text>
                    <Text style={{ marginBottom: 10 }}>
                        U.S.A.
                    </Text>
                    <Text>
                        Phone: 1-206-555-1234
                    </Text>
                    <Text>
                        Email: campsites@nucamp.co
                    </Text>

                </Card>

            </ScrollView >
        );
    }
}


export default Contact;

