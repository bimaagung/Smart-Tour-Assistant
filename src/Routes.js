import { createStackNavigator } from 'react-navigation';
import Splash from './components/Splash';
import Home from './components/Home';


const Routes = createStackNavigator({
         
        Splash: {
            screen: Splash,
            navigationOptions: { 
                header: null 
            }
        },
        Home: {
            screen: Home,
            navigationOptions: { 
                header: null 
            }
        }, 
        
});

export default Routes;