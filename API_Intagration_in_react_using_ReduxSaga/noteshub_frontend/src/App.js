import { Provider } from 'react-redux';
import store from './redux-saga/store';
import AppRoutes from "./routes"
import './style/App.scss';

function App() {
  return (
    <Provider store={store}>
      <AppRoutes />
    </Provider>
  );
}

export default App;
