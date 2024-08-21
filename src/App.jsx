import React from 'react';
import { Provider } from 'react-redux';
import { productStore } from './features/Example2Redux/ProductStore';
import Card from './components/Example2Reduxop/Card';
import { OperationStore } from './features/OperationStore';
import DisplayReduxState from './components/DisplayReduxState';
import UpdateReduxState from './components/UpdateReduxState';

const App = () => {
  return (
    <div>
      <h1>App Comp</h1>
      <Provider store={OperationStore}>
        <DisplayReduxState />
        <UpdateReduxState />

      </Provider>

      {/* eg2: */}
      <Provider store={productStore}>
        <Card />

      </Provider>
    </div>
  );
};

export default App;