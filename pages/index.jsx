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
                <section className="intro">
                    <Illustration illustration="fuchs"
                            className="intro-fuchs" />
                    <Illustration illustration="wald"
                            className="intro-wald" />
                </section>
                <section className="section_content">
                    <div className="">
                        <h1>Alles für e-Mail Marketing.</h1>
                        <p>Ein Paragraph.</p>
                    </div>
                </section>
                <section className="section_content"></section>
                <section className="section_content"></section>
              </div>
            </DocumentTitle>
        )
    }
}
