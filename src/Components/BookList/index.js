import React, { Component } from 'react';
import BookListItem from './BookListItem'

import './book-list.scss'

export default class BookList extends Component {

    render () {
        return (
            <section className='book-list'>
                <BookListItem/>
            </section>
        )
    }
}