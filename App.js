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
import { AddReception } from './src/Screen/AddReception';
import {ChangeReception} from './src/Screen/ChangeReception';
import {ChangePacient} from './src/Screen/ChangePacient';
import { AddPacient } from './src/Screen/AddPacient';


const Navigation = createStackNavigator();

export const navigationRoutes = {
  receptions: {
    title: 'Пациенты',
    route: 'ReceptionFromPacient'
  },
  cardOfPacient: {
    title: 'Карта пациента',
    route: 'CardOfPacient'
  },
  addPacient: {
    title: 'Добавить пациента',
    route: 'addPacient'
  },
  addReception: {
    title: 'Добавить прием',
    route: 'addReception'
  },
  changeReception: {
    title: 'Изменить прием',
    route: 'changeReception'
  },
  changePacient: {
    title: 'Изменить пациента',
    route: 'changePacient'
  }
};

const AllScreenOptionsConfig = ({navigation}) => ({
  headerTitleStyle: {
    fontWeight: 'bold',
    color: accent,
    fontSize: 25,
  },
  headerStyle: {
    elevation: 0
  },
  headerLeft: () => (
    <NavigationBackButton onTouch={navigation.goBack} type={navigationBtnBack} />
  ),
  ...TransitionPresets.SlideFromRightIOS,
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
                    headerStyle: {
                      elevation: 0,
                      borderBottomColor: ligthGreyDecoratedColor,
                      borderBottomWidth: 1,
                    },
                    headerLeft: ({}) => null
                  }} component={Receptions} />

                  <Navigation.Screen name={navigationRoutes.cardOfPacient.route} options={{
                    title: navigationRoutes.cardOfPacient.title
                  }} component={PacientCard} />

                  <Navigation.Screen name={navigationRoutes.addPacient.route} options={{
                    title: navigationRoutes.addPacient.title
                  }} component={AddPacient} />

                  <Navigation.Screen name={navigationRoutes.addReception.route} options={{
                    title: navigationRoutes.addReception.title
                  }} component={AddReception} />

                  <Navigation.Screen name={navigationRoutes.changePacient.route} options={{
                    title: navigationRoutes.changePacient.title
                  }} component={ChangePacient} />

              </Navigation.Navigator>
          </NavigationContainer>
        </ReceptionState>
      </Provider>
  );
};





