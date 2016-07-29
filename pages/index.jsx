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
                    <div className="section_content-main">
                        <h1>Eine knackige Überschrift.</h1>
                        <p>
                            Wir sehen E-Mail Marketing langfristig. Eine
                            Zusammenwirkung zwischen Marketing/CRM und
                            IT-Abteilung. Zielgenaue Kommunikation mit dem
                            Kunden. Weniger ist mehr. Dafür passender und
                            wertvoller.
                        </p>
                    </div>
                    <div className="section_content-secondary">
                        <div className="section_content-placehoder_graphic">
                            <div>
                                <p>eine grafik:</p>
                                <p>Umsetzung, Beratung, Workshops.</p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section_content">
                    <div className="section_content-secondary">
                        <div className="section_content-placehoder_graphic">
                            <div>
                                <p>eine grafik:</p>
                                <p>Umsetzung, Beratung, Workshops.</p>
                            </div>
                        </div>
                    </div>
                    <div className="section_content-main">
                        <h1>Noch eine tolle Aussage.</h1>
                        <p>
                            Wir sehen E-Mail Marketing langfristig. Eine
                            Zusammenwirkung zwischen Marketing/CRM und
                            IT-Abteilung. Zielgenaue Kommunikation mit dem
                            Kunden. Weniger ist mehr. Dafür passender und
                            wertvoller.
                        </p>
                    </div>
                </section>
                <section className="section_content"></section>
              </div>
            </DocumentTitle>
        )
    }
}
