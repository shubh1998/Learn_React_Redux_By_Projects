import './styles/App.scss';
import AppRoutes from './Routes'
import { ThemeProvider } from '@material-ui/styles';
import LightTheme from './theme/lighttheme';
import DarkTheme from './theme/darktheme';
import { Provider } from 'react-redux';
import store from "./redux-saga/store"
import { useState } from 'react';
import ThemeProviderContext from './context/ThemeProviderContext';

function App() {
  const [defaultTheme, setDefaultTheme] = useState(true)
  // console.log(defaultTheme ? LightTheme : DarkTheme)

  return (
    <Provider store={ store }>
      <ThemeProviderContext.Provider value={{defaultTheme, setDefaultTheme}} >
        <ThemeProvider theme={ defaultTheme ? LightTheme : DarkTheme }>
              <AppRoutes />
        </ThemeProvider>
      </ThemeProviderContext.Provider>
    </Provider>
  );
}

export default App;
