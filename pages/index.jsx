import React from 'react'
import { Link } from 'react-router'
import DocumentTitle from 'react-document-title'
import { prefixLink } from 'gatsby-helpers'
import { config } from 'config'
import Illustration from '../components/Illustration'


export default class Index extends React.Component {
    render() {
        return (
            <DocumentTitle title={ config.siteTitle }>
              <div>
                hello world
                <Illustration illustration="wald" />
                <section></section>
                <section></section>
                <section></section>
                <section></section>
              </div>
            </DocumentTitle>
        )
    }
}
