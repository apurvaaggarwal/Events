import React from 'react';

import { StackNavigator } from 'react-navigation';
import ScreenOne from './src/components/Home';
import ScreenTwo from './src/components/ScreenTwo';
import ScreenThree from './src/components/HelloScreen'
import CarouselScreen from './src/components/CarouselScreen';

const App = StackNavigator({
     ScreenOne: { screen: ScreenOne},
     ScreenTwo: {screen: ScreenTwo},
     ScreenThree: { screen: ScreenThree},
      CarouselScreen: { screen: CarouselScreen}
}, {
   mode: 'modal',
    headerMode: 'none',
}   
)

export default App;