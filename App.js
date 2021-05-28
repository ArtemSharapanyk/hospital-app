import 'react-native-gesture-handler';
import React from 'react';
import {StatusBar} from 'react-native';
import { Provider } from 'react-redux';
import { store } from './src/redux/store';
import { Receptions } from './src/Screen/Receptions';
import { ReceptionState } from './src/States/ReceptionState/ReceptionState';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import { accent, ligthGreyDecoratedColor } from './src/styles/colorsApp';
import { PacientCard } from './src/Screen/PacientCard';
import { Btn as NavigationBackButton } from './src/components/UI/Btn/Btn';
import { navigationBtnBack } from './src/components/UI/Btn/BtnsTypes';

const Navigation = createStackNavigator();

export const navigationRoutes = {
  receptions: {
    title: 'Пациенты',
    route: 'ReceptionFromPacient'
  },
  cardOfPacient: {
    title: 'Карта пациента',
    route: 'CardOfPacient'
  }
};

const AllScreenOptionsConfig = ({navigation}) => ({
  headerStyle: {
    elevation: 0,
    borderBottomColor: ligthGreyDecoratedColor,
    borderBottomWidth: 1,
  },
  headerTitleStyle: {
    fontWeight: 'bold',
    color: accent,
    fontSize: 25,
    paddingTop: StatusBar.currentHeight + 10,
    paddingBottom: StatusBar.currentHeight + 10 
  },
  headerLeft: () => (
    <NavigationBackButton onTouch={navigation.goBack} type={navigationBtnBack} />
  ),
  ...TransitionPresets.SlideFromRightIOS
});


export default () => {
  return (
      <Provider store={store}>
        <StatusBar />
        <ReceptionState>
          <NavigationContainer>
              <Navigation.Navigator 
                initialRouteName={navigationRoutes.receptions.route} 
                screenOptions={AllScreenOptionsConfig}
              >
                  <Navigation.Screen name={navigationRoutes.receptions.route} options={{
                    title: navigationRoutes.receptions.title,
                    headerLeft: ({}) => null
                  }} component={Receptions} />
                  <Navigation.Screen name={navigationRoutes.cardOfPacient.route} options={{
                    title: navigationRoutes.cardOfPacient.title
                  }} component={PacientCard} />
              </Navigation.Navigator>
          </NavigationContainer>
        </ReceptionState>
      </Provider>
  );
};





