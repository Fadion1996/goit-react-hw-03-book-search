import React, { Component } from 'react';
import BookListItem from './BookListItem'
import shortid from 'shortid';

import './book-list.scss'

export default class BookList extends Component {

    render () {
        const {booksList} = this.props;
        return (
                <section className='book-list'>
                    {booksList.map((book) => (
                        <BookListItem key={shortid.generate()}
                                      image = {book.imageLinks}
                                      title = {book.title}
                                      description = {book.description}
                                      author = {book.authors}
                                      publisher = {book.publisher}
                                      publishedDate = {book.publishedDate}
                                      pageCount = {book.pageCount}
                                      rating = {book.ratingsCount}
                        />
                    ))}
                </section>
        )
    }
}