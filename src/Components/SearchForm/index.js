import React, { Component } from 'react';
import {TextField, FormControl, MenuItem, Button} from '@material-ui/core';
import './search-form.scss'
import shortid from 'shortid';

export default class SearchForm extends Component {

    state = {
        searchBook: '',
        selectGenre: ''
    };

    selectChange = event => {
        this.setState({ selectGenre: event.target.value });
    };

    searchChange = event => {
        this.setState({ searchBook: event.target.value });
    };

    handleClick = () => {
        this.props.onSubmit(this.state.searchBook, this.state.selectGenre)
    };

    render () {
        const {genres} = this.props;
        const {searchBook, selectGenre} = this.state;
         return (
            <section className="search-form">
                <TextField
                    id="outlined-with-placeholder"
                    className='search-form-input'
                    label="Search book"
                    placeholder="Enter name"
                    margin="normal"
                    variant="outlined"
                    value={searchBook}
                    onChange={this.searchChange}
                />
                <FormControl
                    className='search-form-dropdown'>
                    <TextField
                        id="outlined-select-currency"
                        select
                        label="Select genre"
                        className='search-form-dropdown-select'
                        value={selectGenre}
                        onChange={this.selectChange}
                        margin="normal"
                        variant="outlined"
                    >
                        {genres.map((genre) => (
                            <MenuItem  className='search-form-dropdown-select-option' 
                            key={shortid.generate()} 
                            value={genre}>
                                {genre}
                            </MenuItem>
                        ))}
                    </TextField>
                </FormControl>
                <Button
                    variant="contained"
                    color="primary"
                    onClick={()=>this.handleClick()}>
                    Search
                </Button>

            </section>
        )
    }
}