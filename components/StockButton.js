import React, {Component} from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types'

export default class StockButton extends Component{
    
    constructor(props){
        super(props);
    }
    
    render(){
        return(
            <TouchableOpacity style={styles.button} onPress={()=>{
                this.props.onPress(
                    this.props.name,
                    this.props.code
                )
            }}>
                <Text style={styles.text}>{this.props.name}</Text>
            </TouchableOpacity>
        );
    }
}

var styles = StyleSheet.create({
    button:{
        margin: 5,
        width: 110,
        height: 50,
        borderWidth: 2,
        borderColor: 'black',
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FFFABD'
    },
    text:{
        color: 'black',
        fontSize: 15
    }
});
