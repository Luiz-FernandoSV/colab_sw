import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './screens/Home';
import PostProduct from './screens/ProductForm.js';
import EditProduct from './screens/EditProduct.js';
import PatchProduct from './screens/PatchProduct.js';
import Header from './components/Header/index.js';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={({ route }) => ({
          header: () => <Header />, // Usa o CustomHeader em todas as telas
        })}
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="ProductForm" component={PostProduct} />
        <Stack.Screen name="EditForm" component={EditProduct} />
        <Stack.Screen name="PatchForm" component={PatchProduct} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
