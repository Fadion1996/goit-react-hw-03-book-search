import React from 'react';
import BookListItem from './BookListItem'
import shortid from 'shortid';

import './book-list.scss'

const BookList = (props) => (

    <section className='book-list'>
        {props.booksList.map((book) => (
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
export default BookList