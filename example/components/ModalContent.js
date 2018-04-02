import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Button, Content, Container, Header, Left, Right, Icon, Body, Title} from 'native-base';

export default class ModalContent extends React.Component {
  render() {
    return (
      <Container style={styles.container}>
        <Header>
          <Left>
            <Button transparent onPress={this.props.closeModal}>
              <Icon name='arrow-back' style={{fontSize: 27}}/>
            </Button>
          </Left>
          <Body>
            <Title>Modal</Title>
          </Body>
          <Right/>
        </Header>
        <Content style={styles.content}>
          <Button style={{justifyContent: 'center', alignSelf: 'center', marginTop: 50, padding: 5,}} onPress={this.props.changeSuccess}><Text>Change the success value</Text></Button>
        </Content>
      </Container>
    );
  }
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
      padding: 5,
    },
    content: {
      flex: 1,
    },
  });
