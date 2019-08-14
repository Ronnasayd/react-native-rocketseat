/* eslint-disable prettier/prettier */
import { createStackNavigator, createAppContainer } from 'react-navigation';

import Main from './pages/main';
import Product from './pages/product';


const Routes = createAppContainer(
    createStackNavigator({
        Main,
        Product,
    }, {
            headerLayoutPreset: 'center',
        }));

export default Routes;