import React from 'react';
import {
  SafeAreaView,
  StatusBar,
} from 'react-native';
import NavigationMain from './src/Navigation';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from './src/Store/store';

function App(): JSX.Element {

  // const [show, Setshow] = useState(true);
  // useEffect(() => {
  //   Setshow(true)
  //   setTimeout(() => {
  //     Setshow(false)
  //   }, 2000);
  // }, []);

  return (
    <Provider store={store}>
      <PersistGate
        loading={null}
        persistor={persistor}
      // onBeforeLift={() => new Promise(resolve => setTimeout(resolve, 3000))}
      >
        <SafeAreaView style={{ flex: 1 }}>
          <StatusBar backgroundColor={"transparent"} barStyle={'dark-content'} />
          <NavigationMain />
        </SafeAreaView>
      </PersistGate>
    </Provider>
  );
};

export default App;