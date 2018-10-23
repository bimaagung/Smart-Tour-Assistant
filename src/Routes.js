import { createStackNavigator } from 'react-navigation';
import Splash from './components/Splash';
import Home from './components/Home';
import DetailWisata from './components/DetailWisata/detailWisata';


const Routes = createStackNavigator({
        
        DetailWisata: {
            screen: DetailWisata,
            navigationOptions: { 
                header: null 
            }
            // navigationOptions : {
            //     title: 'Home',
            //     headerStyle: {
            //       backgroundColor: 'green',
            //     },
            //     headerTintColor: '#fff',
            //     headerTitleStyle: {
            //       fontWeight: 'bold',
            //     },
            //   }
        },
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