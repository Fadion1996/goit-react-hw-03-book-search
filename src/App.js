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

    setUserOption = (react = "", subject = "") => {
        this.setState({
            isLoading: true,
            books: []
        });
        axios.get(`https://www.googleapis.com/books/v1/volumes?q=${react}+subject:${subject}&key=${apiKey}`)
            .then((response) => {
                // handle success
                this.setState({isLoading: false});
                Object.entries(response.data.items).map((item) => {
                    if(item.length > 0) {
                        this.setState({books: this.state.books.concat(item[1]['volumeInfo'])});
                    }
                    return null
                });
            })
            .catch((error) => {
                // handle error
                this.setState({isLoading: false});
                console.log(error);
            })
            .finally(() => {
                this.setState({isLoading: false});
                // always executed
            });
    }
}

export default App;
