import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ThemeProvider } from '@material-ui/styles';
import Theme from './components/theme/theme';
import {BrowserRouter} from 'react-router-dom'
import axios from 'axios'

axios.defaults.baseURL='https://twitterapi.liara.run/api'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeProvider theme={Theme}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ThemeProvider>
);

