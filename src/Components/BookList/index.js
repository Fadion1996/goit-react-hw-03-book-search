import React, { Component } from 'react';
import BookListItem from './BookListItem'
import axios from 'axios';

import './book-list.scss'

export default class BookList extends Component {

    componentDidMount () {
        axios.get('www.googleapis.com/books/v1/volumes?q=search+terms\\')
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    render () {
        return (
            <section className='book-list'>
                <BookListItem/>
            </section>
        )
    }
}