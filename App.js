import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Alert } from 'react-native';
import * as Location from 'expo-location';
import axios from 'axios';
import Loading from './Loading';
import Weather from './Weather';
const API_KEY = 'dd141032e6c24141dc55129a97b995ec';

export default class App extends React.Component {

  state = {
    isLoading: false,
  }

  componentDidMount () {
    this.getWeather();
  }

  requestPermission = async () => {
    return await Location.requestPermissionsAsync();
  }

  getLocation = async () => {
    return await Location.getCurrentPositionAsync();
  }

  getWeather = async () => {
    await this.requestPermission();
    const { coords: { latitude, longitude } } = await this.getLocation();
    this.setState({isLoading: true});
    const { data } = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&APPID=${API_KEY}`);
    this.setState({isLoading: false, temp: data.main.temp})
  }
  
  render () {
    const { isLoading, temp } = this.state;
    return isLoading ? <Loading/> : <Weather temp={temp}/>
  }
}

