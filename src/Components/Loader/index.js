import React, { Component } from 'react';
import './loader.scss'
import Spinner from 'react-spinkit'

export default class Loader extends Component {

    render () {

        return (
            <section className="loader">
                <Spinner name="line-scale" />
            </section>
        )
    }
}