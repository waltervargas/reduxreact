import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';
import VideoList from './components/video_list';

const API_KEY = 'AIzaSyD1P9wIKGmyjtjcT2ghpdcuhgCCIkLp1dY';



// Create the element
class App extends Component {
    constructor(props){
        super(props);
        this.state = { videos: [] };
        YTSearch({key: API_KEY, term: 'surfboards'}, (videos) => {
            this.setState({ videos }); // { videos: videos }
        });
    }
    render (){
        return (
            <div>
            <SearchBar />
            <VideoList videos={this.state.videos}/>
            </div>
        );
    }
}

// Load HTML Element into DOM
ReactDOM.render(<App />, document.querySelector('.container'));
