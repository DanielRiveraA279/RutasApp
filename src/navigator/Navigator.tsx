import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { MapaScreen } from '../pages/MapaScreen';
import { PermissionsScreen } from '../pages/PermissionsScreen';

const Stack = createStackNavigator();

export const Navigator = () => {
    return (
        <Stack.Navigator
        
        screenOptions={{
            headerShown: false,
            cardStyle: {
                backgroundColor: 'white'
            }
        }}
        >
            <Stack.Screen name="Home" component={MapaScreen} />
            <Stack.Screen name="Notifications" component={PermissionsScreen} />
        </Stack.Navigator>
    );
}