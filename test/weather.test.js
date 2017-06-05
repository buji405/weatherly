import React from 'react'
import Weather from '../lib/components/Weather/Weather'
import testData from './test-data.json'
import { shallow, mount } from 'enzyme'

describe('weather tdd', () => {

  it('should change state on button click', () => {
    const weatherObj = {
      weatherData: testData,
      loggedIn: true,
      dailyAppear: true,
      inputError: false,
    }

    console.log(testData.fore);
  })
})
