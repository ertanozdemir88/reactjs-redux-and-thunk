import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import thunk from "redux-thunk";
import { compose, applyMiddleware, combineReducers, createStore } from "redux";
import { Provider } from "react-redux";

import userReducer from "./reducers/userReducers";
import productReducer from "./reducers/productReducers";


const rootReducer = combineReducers({
  products: productReducer,
  user: userReducer
});

const allEnhancers = compose(
  applyMiddleware(thunk),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const store = createStore(
  rootReducer,
  {
    products: [
      {
        name: "Apple",
        type: "Phone"
      }
    ],
    user: "Ertan"
  },
  allEnhancers  
  );


ReactDOM.render(
  <Provider store={store}>
    <App count={4}/>
  </Provider>,
  document.getElementById('root')
);

