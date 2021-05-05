import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import {List, ListItem} from 'material-ui/List';
import RaisedButton from 'material-ui/RaisedButton';

export class FormUserDetails extends Component {
    continue = e => {
        e.preventDefault();
        //PROCESS FORM

        this.props.nextStep();
    }

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }

    render() {
        const { values: {firstName, lastName, email, occupation, city, bio} } = this.props;
        return (
            <MuiThemeProvider >
              <React.Fragment>
                  <AppBar title="Confirm user data"/>
                <List>
                    <ListItem
                        primaryText = "First Name"
                        secondaryText={ firstName }
                    />
                    <ListItem
                        primaryText = "Last Name"
                        secondaryText={ lastName }
                    />
                    <ListItem
                        primaryText = "Email"
                        secondaryText={ email }
                    />
                    <ListItem
                        primaryText = "Occupation"
                        secondaryText={ occupation }
                    />
                    <ListItem
                        primaryText = "City"
                        secondaryText={ city }
                    />
                    <ListItem
                        primaryText = "Bio"
                        secondaryText={ bio }
                    />
                </List>
                  <br />
                  <RaisedButton
                    label = " Confirm & Continue"
                    style = {{"margin" : "15px"}}
                    primary = {true}
                    onClick = {this.continue}/>

                 <RaisedButton
                    label = "Back"
                    style = {{"margin" : "15px"}}
                    primary = {false}
                    onClick = {this.back}/>
              </React.Fragment>
            </MuiThemeProvider>
        )
    }
}

export default FormUserDetails