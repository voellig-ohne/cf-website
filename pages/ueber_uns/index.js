import React from 'react'
import { Link } from 'react-router'
import DocumentTitle from 'react-document-title'
import { config } from 'config'
import Hero from 'components/Hero'
import FoxNetwork from 'components/FoxNetwork'
import SectionContentSingle from 'components/SectionContentSingle'
import ResponsiveImage from 'components/ResponsiveImage'
import PartnerList from 'components/PartnerList'
import { filter, map, sortBy, includes } from 'lodash'
import style from './style.module.less'
import classNames from 'classNames'

export default class UberUns extends React.Component {
    render() {
        const partners = sortBy(filter(this.props.route.pages, (page) => {
            return includes(page.path, '/ueber_uns/partner/')
        }), (page) => {
            return page.data.order
        })

        return (
            <DocumentTitle title={ config.siteTitle + ' | über uns'  }>
                <main>
                    <section className="sub_intro">
                        <FoxNetwork className="sub_intro-forrest" />
                        <header className="sub_intro-header">
                            <h1 className="sub_intro-heading">
                                Der Fuchs + sein Wald.
                            </h1>
                        </header>
                    </section>

                    <SectionContentSingle wide={ true }
                            title="Der Fuchs">
                        <div className={ style.main }>
                            <div className={ style.main_imageContainerContainer }>
                                <div className={ style.main_imageContainer }>
                                    <ResponsiveImage 
                                            source="portrait_christian" 
                                            className={ style.main_image }
                                            sizes="(max-width: 600px) 100vw, 400px" />
                                </div>
                            </div>
                            <div className={ style.main_text }>
                                <p>
                                    Hier ist ein Text über Christian Fuchs, den Hauptakteur bei Duchs+Wald.<br />
                                    Maecenas sed diam eget risus varius blandit sit amet non magna. Cum sociis 
                                    natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. 
                                    Donec ullamcorper nulla non metus auctor fringilla. Sed posuere consectetur 
                                    est at lobortis. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                                </p>

                                <a className={classNames('cta', style.cta)} href="#">
                                    CTA! Schreib uns!
                                </a>
                            </div>
                        </div>
                    </SectionContentSingle>

                    <SectionContentSingle wide={ true }
                            title="Sein Wald">
                        <PartnerList partners={ partners } />
                    </SectionContentSingle>

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
