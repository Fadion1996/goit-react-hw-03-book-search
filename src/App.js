import React, {Component} from 'react';
import axios from 'axios'
import './app.scss';

import {BookList, Loader, SearchForm} from './Components'
const apiKey = 'AIzaSyCy_9n4RfX6YAFvWQAw-dPPbLTUptnMLHs';

class App extends Component {
    state = {
        genres: ["fantasy", "thriller", "drama", "mystery", "horror", "satire", "computers"],
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
                    : <BookList/>
                }
            </div>
        );
    };

    setUserOption = (react = "flowers", subject = "fantasy") => {
        this.setState({isLoading: true});
        axios.get(`https://www.googleapis.com/books/v1/volumes?q=${react}+subject:${subject}+inauthor:keyes&key=${apiKey}`)
            .then((response) => {
                // handle success
                this.setState({isLoading: false});
                Object.entries(response.data.items).map((item) => {
                    console.log(item);
                    if(item.status === 200) {
                        console.log('qwe');
                        item.data.items.map((book) => {
                            console.log(book)
                        })
                    }
                });
                console.log(response);
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
