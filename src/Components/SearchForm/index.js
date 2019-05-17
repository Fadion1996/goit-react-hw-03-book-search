import React, { Component } from 'react';
import {TextField, FormControl, InputLabel, MenuItem, Select, Button} from '@material-ui/core';
import './search-form.scss'
import shortid from 'shortid';

export default class SearchForm extends Component {

    state = {
        value: ''
    };

    handleChange = event => {
        this.setState({ value: event.target.value });
    };

    handleClick = (e) => {
        console.log(e.target.value)
    };

    render () {
        const {genres} = this.props;
        return (
            <section className="search-form">
                <TextField
                    id="outlined-with-placeholder"
                    className='search-form-input'
                    label="Search book"
                    placeholder="Enter name"
                    margin="normal"
                    variant="outlined"
                />
                <FormControl
                    className='search-form-dropdown'>
                    <InputLabel htmlFor="age-customized-select">
                        Genre
                    </InputLabel>
                    <Select
                        className='search-form-dropdown-select'
                        value={this.state.value}
                        onChange={this.handleChange}
                    >
                        {genres.map((genre) => (
                            <MenuItem key={shortid.generate()} value={genre}>{genre}</MenuItem>
                        ))}
                    </Select>
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