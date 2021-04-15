import { Provider } from 'react-redux';
import store from './redux-saga/store';
import AppRoutes from "./routes"
import './style/App.scss';
import { ToastProvider } from 'react-toast-notifications';


function App() {
  return (
    <Provider store={store}>
      <ToastProvider placement="top-center">
      <AppRoutes />
      </ToastProvider>
    </Provider>
  );
}

export default App;
