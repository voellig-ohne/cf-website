import React from 'react'
import { Link } from 'react-router'
import DocumentTitle from 'react-document-title'
import { prefixLink } from 'gatsby-helpers'
import { config } from 'config'
import Forrest from 'components/Forrest'
import VerticalSection from 'components/VerticalSection'
import Hero from 'components/Hero'
import { filter, map } from 'lodash'

export default class Arbeitsweisen extends React.Component {
    render() {
        const weisen = map(filter(this.props.route.pages, (page) => {
            return page.path.includes('/arbeitsweisen/weisen')
        }), (page) => {
            return page.data
        })

        return (
            <DocumentTitle title={ config.siteTitle + ' | arbeitsweisen'  }>
                <main>
                    <section className="section_content">
                        <h1 className="page_heading">Arbeitsweisen</h1>
                    </section>

                    <VerticalSection sections={weisen} />

                    <Hero image="/img/wald_briefe.jpg">
                        <Link to="/usecases/" className="cta">
                            Lesen Sie Use-Cases
                        </Link>
                    </Hero>
                </main>
            </DocumentTitle>
        )
    }
}
