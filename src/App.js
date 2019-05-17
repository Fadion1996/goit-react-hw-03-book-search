import React, {Component} from 'react';
import './app.scss';

import {BookList, Loader, SearchForm} from './Components'

class App extends Component {
    state = {
        genres: ["fantasy", "thriller", "drama", "mystery", "horror", "satire", "computers"]

    }
    render() {
        return (
            <div className="app">
                <Loader/>
                <SearchForm genres = {this.state.genres}/>
                <BookList/>
            </div>
        );
    }
}

export default App;
