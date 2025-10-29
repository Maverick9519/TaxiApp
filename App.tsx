import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import DrawerNavigator from './navigation/DrawerNavigator';
import { ProfileProvider } from './context/ProfileContext';

export default function App() {
  return (
    <ProfileProvider>
        <NavigationContainer>
          <DrawerNavigator />
        </NavigationContainer>
    </ProfileProvider>
  );
}