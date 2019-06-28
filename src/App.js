import React, {Component} from 'react';
import axios from 'axios'
import './app.scss';

import {BookList, Loader, SearchForm} from './Components'
import {Typography} from "@material-ui/core";

const apiKey = 'AIzaSyCy_9n4RfX6YAFvWQAw-dPPbLTUptnMLHs';

class App extends Component {
    state = {
        genres: ["fantasy", "thriller", "drama", "mystery", "horror", "satire", "computers"],
        books: [],
        isLoading: true,
    };

    setUserOption = (search = "", genre = "") => {
        this.setState({
            isLoading: true,
            books: []
        });
        axios.get(`https://www.googleapis.com/books/v1/volumes?q=${search}+subject:${genre}&key=${apiKey}`)
            .then((response) => {
                // handle success
                response.data.items.map((item) => {
                    this.setState({
                        books: this.state.books.concat(item.volumeInfo)
                    });
                    return null
                });
                this.setState({isLoading: false});
            })
            .catch(() => {
                this.setState({isLoading: false});
            })
    };

    componentDidMount() {
        this.setUserOption();
    }

    render() {
        return (
            <div className="app">
                <SearchForm genres = {this.state.genres}  onSubmit = {this.setUserOption}/>
                {(this.state.isLoading) ? <Loader/>
                    : (this.state.books.length) ?
                        <BookList booksList={this.state.books}/>
                        : <Typography className='no-results' component='h4' variant='h4'>No results.</Typography>
                }
            </div>
        );
    };
}

export default App;
