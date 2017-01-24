import React from 'react'
import { Link } from 'react-router'
import DocumentTitle from 'react-document-title'
import { config } from 'config'
import Hero from 'components/Hero'
import FoxNetwork from 'components/FoxNetwork'
import { filter, map, sortBy, includes } from 'lodash'

export default class UberUns extends React.Component {
    render() {
        const partners = sortBy(filter(this.props.route.pages, (page) => {
            return includes(page.path, '/uber_uns/partner/')
        }), (page) => {
            return page.data.order
        })

        return (
            <DocumentTitle title={ config.siteTitle + ' | leistungen'  }>
                <main>
                    <section className="sub_intro">
                        <FoxNetwork className="sub_intro-forrest" />
                        <header className="sub_intro-header">
                            <h1 className="sub_intro-heading">
                                Der Fuchs + sein Wald.
                            </h1>
                        </header>
                    </section>

                    <section className="section_content">
                        <h1 className="page_heading">Fuchs und Wald</h1>
                    </section>

                    {
                        map(partners, (partner, idx) => {
                            return (
                                <div key={idx}>
                                    { partner.data.name }
                                </div>
                            ) 
                        })
                    }

                    <Hero image="wald_seile">
                        <Link className="cta" to="/leistungen/">
                            Finden Sie mit uns durch den Wald
                        </Link>
                    </Hero>

                </main>
            </DocumentTitle>
        )
    }
}
