import React from 'react';
import classes from './App.module.scss';
import './styles/scss/global.scss';
import { Page1, Page2 } from './pages';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './components/Layout';

const App = () => {
  return (
    <div>
      <Layout>
      <Routes>
        <Route path="/page1" element={<Page1 />}/>
        <Route path="/page2" element={<Page2 />}/>
      </Routes>
      </Layout>
    </div>
  )
}

export default App;