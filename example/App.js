import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Button, Content, Container, Header, Left, Right, Icon, Body, Title} from 'native-base';
import ButtonModal from 'react-native-button-modal';
import ModalContent from './components/ModalContent.js';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalVisible: false,
      success: false,
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <ButtonModal
          success={this.state.success}
          content={
            <ModalContent
              closeModal={() => this.setState({isModalVisible: false})}
              changeSuccess={() => this.setState({success: !this.state.success})}
            />
          }
          buttonMessage={'Open Modal'}
          buttonType={'rectangle'}
          isVisible={this.state.isModalVisible}
          showModal={() => this.setState({isModalVisible: true})}
          hideModal={() => this.setState({isModalVisible: false})}
        />
      </View>
    );
  }
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
      padding: 5,
      justifyContent: 'center',
    },
  });
