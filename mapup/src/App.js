import React from 'react';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Footer from './components/Footer';
import FormInput from './components/FormInput';
import WorldMap from './components/WorldMap';
const App = () => {
  return (
    <Provider store={store}>
    <div className="flex">
      <Sidebar />
      <div className="flex flex-col flex-1">
        <Header />
        <main className="flex-1 p-4">
        <FormInput />
        <WorldMap />
        </main>
        <Footer />
      </div>
    </div>
    </Provider>
  );
};

export default App;
