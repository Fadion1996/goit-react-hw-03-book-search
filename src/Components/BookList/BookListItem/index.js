import React from 'react';
import {Card, CardHeader, CardMedia, CardContent, CardActions, IconButton, Typography, Badge} from '@material-ui/core';
import FavoriteIcon from '@material-ui/icons/Favorite';

import styles from './book-list-item.module.css'

 const BookListItem = (props) => {

    const {image = '404', title = 'No data', description = 'No data', author = 'No name', publisher = 'No name', publishedDate = 'No data', pageCount = 'No data', rating = 0} = props;
    return (
        <Card className={styles.card}>
            <CardMedia
                className={styles.media}
                image={image.thumbnail}
                title={title}
            />
            <div className={styles.details}>
                <CardHeader
                    title={title}
                    subheader={'Published date: ' + publishedDate}
                />
                <CardContent>
                    <Typography component="p">
                        <b>Publisher: </b>
                        {publisher}
                    </Typography>
                    <Typography component="p">
                        <b>Authors: </b>
                        {author}
                    </Typography>
                    <Typography component="p">
                        <b>Description: </b>
                        {description}
                    </Typography>
                </CardContent>
                <CardActions className={styles.actions} disableActionSpacing>
                    <IconButton aria-label="Add to favorites" disabled>
                        <Badge badgeContent={rating} color="primary">
                            <FavoriteIcon />
                        </Badge>
                    </IconButton>
                    <Typography component="p">
                        Pages: {pageCount}
                    </Typography>
                </CardActions>
            </div>
        </Card>
    )
 }
export default BookListItem