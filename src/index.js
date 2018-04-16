import React, { Component } from "react";
import { View, StyleSheet, Text,} from "react-native";
import { Button } from "native-base";
import Modal from "react-native-modal";
import Icon from 'react-native-vector-icons/MaterialIcons';

export default class ButtonModal extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View>
        { //buttonStyle == 'rectangle'
          (this.props.buttonType=='rectangle') ?
            <Button
              block
              bordered
              dark={this.props.allowClick}
              light={!this.props.allowClick}
              style={styles.nonNativeBaseformElement}
              success={this.props.success}
              onPress={this.props.allowClick ? this.props.showModal : null}
            >
              <Text style={{fontSize: this.props.initialTextSize}}>
                {this.props.buttonMessage}
              </Text>
            </Button>
          : //buttonStyle == 'add'
          (this.props.buttonType=='icon') ?
            <Button transparent onPress={this.props.showModal}>
              <Icon name={this.props.iconName} style={{fontSize: this.props.iconSize}}/>
            </Button>
          : //buttonStyle != 'add' or 'rectangle'
            <Text>ERROR: Please specify a correct buttonType</Text>
        }

        <Modal
          isVisible={this.props.isVisible}
          style={styles.bottomModal}
          backdropOpacity={0.7}
          onBackdropPress={this.props.allowClose ? this.props.hideModal : null}
          onSwipe={this.props.allowClose ? this.props.hideModal : null}
          swipeDirection="down"
        >
          {this.props.content}
          <Button block primary={this.props.allowClose} light={!this.props.allowClose} disabled={!this.props.allowClose} onPress={this.props.hideModal}>
            <Text style={{fontSize: this.props.confirmTextSize}}> Confirm </Text>
          </Button>
        </Modal>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  bottomModal: {
    justifyContent: "flex-end",
    margin: 0
  },
  modalContent: {
    backgroundColor: "white",
    padding: 22,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
    borderColor: "black",
    backgroundColor: "white"
  },
  formElement: {
    flex: 1,
    marginLeft: 15,
    marginRight: 15,
    marginTop: 4
  },
  nonNativeBaseformElement: {
    margin: 2,
  }
});

ButtonModal.defaultProps = {
  buttonType: 'rectangle',
  iconSize: 27,
  confirmTextSize: 15,
  buttonTextSize: 15,
  iconName: 'add',
  allowClose: true,
  allowClick: true,
  buttonMessage: 'Click here',
}
