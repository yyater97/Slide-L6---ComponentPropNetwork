/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import StockButton from './components/StockButton.js';
import API from './api.js';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  
  constructor(props){
    super(props);
    this.changeIndex = this.changeIndex.bind(this);
    this.state={
      stockName: 'SET',
      stockCode: 'ABC',
      stockIndex: '0.00',
      stockChangeRaw: '+0.00',
      stockChangePercent: '0.00'
    }
  }

  changeIndex(stockName, stockCode){
    API(stockCode).then((data)=>{
      console.log(data);
      this.setState({stockName, stockCode, 
        stockIndex: data.stockIndex, 
        stockChangeRaw: data.stockChangeRaw, 
        stockChangePercent: Math.round(data.stockChangePercent*10000)/100});
    });
  }
  
  render() {
    let colorStockChange = (this.state.stockChangeRaw<0) ? styles.red : styles.green;
    return (
      <View style={styles.container}>
        <View style={styles.stockContent}>
          <Text style={styles.companyName}>{this.state.stockName}</Text>
          <Text style={styles.stockValue}>{this.state.stockIndex}</Text>
          <Text style={[styles.stockStatus, colorStockChange]}>{this.state.stockChangeRaw} ({this.state.stockChangePercent}%)</Text>
        </View>
        <View style={styles.groupButton}>
          <View style={styles.row}>
            <StockButton style={styles.button} name="TOYOTA" code="tm" onPress={this.changeIndex}></StockButton>
            <StockButton style={styles.button} name="APPLE" code="aapl" onPress={this.changeIndex}></StockButton>
            <StockButton style={styles.button} name="ALPHABET" code="googl" onPress={this.changeIndex}></StockButton>
          </View>
          <View style={styles.row}>
            <StockButton style={styles.button} name="MICROSOFT" code="msft" onPress={this.changeIndex}></StockButton>
            <StockButton style={styles.button} name="FACEBOOK" code="fb" onPress={this.changeIndex}></StockButton>
            <StockButton style={styles.button} name="ALIBABA" code="baba" onPress={this.changeIndex}></StockButton>
          </View>
          <View style={styles.row}>
            <StockButton style={styles.button} name="AMAZON" code="amzn" onPress={this.changeIndex}></StockButton>
            <StockButton style={styles.button} name="TESLA" code="tsla" onPress={this.changeIndex}></StockButton>
            <StockButton style={styles.button} name="STARBUCKS" code="sbux" onPress={this.changeIndex}></StockButton>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  red: {
    color: 'red'
  },
  green: {
    color: 'green'
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  stockContent: {
    flex: 3,
    alignItems: 'center',
    justifyContent: 'center'
  },
  companyName: {
    fontSize: 30
  },
  stockValue: {
    fontSize: 70
  },
  stockStatus: {
    fontSize: 35
  },
  groupButton: {
    flex: 2,
    flexDirection: 'column',
    backgroundColor: '#660CE8'
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  },
  button: {
    flex: 1
  }
});
