import React from 'react';
import { Link } from 'react-router';
import DocumentTitle from 'react-document-title';
import { config } from 'config';
import Hero from 'components/Hero';
import FoxNetworkHead from 'components/FoxNetworkHead';
import SectionContentSingle from 'components/SectionContentSingle';
import ResponsiveImage from 'components/ResponsiveImage';
import PartnerList from 'components/PartnerList';
import { filter, map, sortBy, includes } from 'lodash';
import style from './style.module.less';
import classNames from 'classnames';

export default class UberUns extends React.Component {
    render() {
        const partners = sortBy(
            filter(this.props.route.pages, (page) => {
                return includes(page.path, '/ueber_uns/partner/');
            }),
            (page) => {
                return page.data.order;
            }
        );

        return (
            <DocumentTitle title={config.siteTitle + ' | über uns'}>
                <main>
                    <section className="sub_intro">
                        <FoxNetworkHead className="sub_intro-forrest" />
                        <header className="sub_intro-header">
                            <h1 className="sub_intro-heading">Der Fuchs + sein Wald.</h1>
                        </header>
                    </section>

                    <SectionContentSingle wide={true} title="Der Fuchs">
                        <div className={style.main}>
                            <div className={style.main_imageContainerContainer}>
                                <div className={style.main_imageContainer}>
                                    <ResponsiveImage
                                        source="portrait_christian"
                                        className={style.main_image}
                                        sizes="(max-width: 600px) 100vw, 400px"
                                    />
                                </div>
                            </div>
                            <div className={style.main_text}>
                                <p>
                                    Ich, Christian Fuchs, bin Fachinformatiker, studierter Wirtschaftsinformatiker und
                                    #emailgeek. Mit fuchs+wald biete ich Beratung und Umsetzung mit den Schwerpunkten
                                    E-Mail-Marketing, Marketing Automation und Kundenbeziehung an. Zusammen mit meinem
                                    spezialisierten Netzwerk, dem Wald, bin ich für große Handelsunternehmen, Firmen aus
                                    eCommerce, Travel und anderen Branchen, Startups, Solopreneure und Agenturen aktiv.
                                </p>

                                <a className={classNames('cta', style.cta)} href="mailto:projektanfrage@undwald.de">
                                    In Kontakt treten
                                </a>
                            </div>
                        </div>
                    </SectionContentSingle>

                    <SectionContentSingle wide={true} title="Sein Wald">
                        <PartnerList partners={partners} />
                    </SectionContentSingle>

                    <Hero image="wald_seile">
                        <Link className="cta" to="/leistungen/">
                            Finden Sie mit uns durch den Wald
                        </Link>
                    </Hero>
                </main>
            </DocumentTitle>
        );
    }
}
