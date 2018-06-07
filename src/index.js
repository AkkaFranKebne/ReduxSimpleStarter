import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar'

const API_KEY = 'AIzaSyBNQUMP_F9N7v7sBHaGUT1UWPwzwIsihEg';

const App = () => {
  return (
    <div><SearchBar /></div>
  );
};

ReactDOM.render(<App />, document.querySelector('.container'));
