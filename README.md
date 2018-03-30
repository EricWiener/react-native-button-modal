ButtonModal
======

Installation
------
If [react-native-vector-icons](https://github.com/oblador/react-native-vector-icons) and [native-base](https://nativebase.io) haven't been installed already, use the following:
```
$ npm install native-base --save
$ npm install react-native-vector-icons --save
$ npm install react-native-button-modal --save
```
If both have been installed, use the following:
```
$ npm install react-native-button-modal --save
```

Usage
------
Import the ModalButton
```javascript
import ModalButton from 'react-native-modal-button';
```

Initialize the state variables (inside the constructor of the parent component)
```javascript
constructor(props) {
    super(props);
    this.state = {
      displayPopup: false,
    };
 }
```

Create the ModalButton
```javascript
<ButtonModal
    success={false}
    reference='popup'
    content={
        <Popup/>
    }
    buttonMessage={'Click here to display popup'}
    buttonType={'rectangle'}
    isVisible={this.state.displayPopup}
    showModal={() => this.setState({displayPopUp: true})}
    hideModal={() => this.setState({displayPopup: false})}
/>
```

Full Example
------
Initialize the state variables and the handler
```javascript
import React, {Component} from 'react';
import {Button} from 'react-native';
import ModalButton from 'react-native-modal-button';

export default class ParentExample extends Component{
    constructor(props) {
        super(props);
        this.state = {
          counter: 0,
          modalSuccess: false,
          isModalVisible: false,
        };
        this.updateCounter = this.updateCounter.bind(this)
    }

    updateCounter(){
    if(this.state.counter < 10){
      this.setState({
        counter: this.state.counter + 1,
      })
    }else{
      this.setState({
        counter: 10,
        modalSuccess: true, //the button will turn green after ten clicks
      })
    }
  }

    render(){
        return(
            <ButtonModal
                success={false}
                reference='popup'
                content={
                    <Button onPress={this.updateCounter}></Button>
                }
                buttonMessage={'Click here to display popup'}
                buttonType={'rectangle'}
                isVisible={this.state.displayPopup}
                showModal={() => this.setState({displayPopUp: true})}
                hideModal={() => this.setState({displayPopup: false})}
            />
        );
    }
}
```


| Prop            | Type    | Default Value | Description                                                                                                                          |
|-----------------|---------|---------------|-------------------------------------------------------------------------------------------|
| isModalVisible  | boolean | FALSE         | Decides if the modal will display                                                                                                |
| buttonType      | String  | rectangle     | Decides the type of initial button to display (either 'rectangle' or 'icon')                                                         |
| iconName        | String  | rectangle     | React Native Vector Icon name (can only be used if buttonType == 'icon')                                                             |
| buttonMessage   | String  | Click here    | The message inside the initial button (can only be used if buttonType=='rectangle')                                                  |
| content         | node    | null          | The content to be displayed inside the modal                                                                                         |
| iconSize        | int     | 27            | Specifies the size of the icon                                                                                                       |
| buttonTextSize  | int     | 15            | Font size of the text inside the initial button                                                                                      |
| confirmTextSize | int     | 15            | Font size of the text inside the confirm button                                                                                      |
| allowClick      | int     | TRUE          | Allow the modal to be opened. If set to false, the initial button will grey out. If true,                   the initial button will be darker.         |
| allowClose      | int     | TRUE          | Allow the modal to be closed. If set to false, the confirm button will grey out. If true, the initial button will display dark blue. |
| success         | boolean | FALSE         | Changes the color of the initial button to green.       
