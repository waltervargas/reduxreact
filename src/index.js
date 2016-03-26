import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyD1P9wIKGmyjtjcT2ghpdcuhgCCIkLp1dY';

// Create the element
const App = () => {
    return (
        <div>
          <SearchBar />
        </div>
    );
}

// Load HTML Element into DOM
ReactDOM.render(<App />, document.querySelector('.container'));
