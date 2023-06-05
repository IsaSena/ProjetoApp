import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Register } from '../screens/Register';
import { Dashboard } from '../screens/Dashboard';
import { Details } from '../screens/Details';

const { Navigator, Screen } = createBottomTabNavigator();

export function AppRoutes(){
    return (
        <Navigator
            screenOptions={{
                headerShown: false
            }}
        >

            <Screen 
            name="Eventos"
            component={ Dashboard }
            />

            <Screen 
            name="Novo"
            component={ Register }
            />

            <Screen 
            name="Detalhes"
            component={ Details }
            />

        </Navigator>
    )
}