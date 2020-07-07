import React from 'react';
import { Link } from 'react-router';
import DocumentTitle from 'react-document-title';
import { prefixLink } from 'gatsby-helpers';
import { config } from 'config';
import { filter, map, includes } from 'lodash';
import Hero from 'components/Hero';
import MiniForrestGroup from 'components/MiniForrestGroup';
import Illustration from 'components/Illustration';
import SectionContentSingle from 'components/SectionContentSingle';
import style from './style.module.less';
import classNames from 'classNames';
import SectionIconStrip from 'components/SectionIconStrip';

export default class UseCases extends React.Component {
    render() {
        const cases = filter(this.props.route.pages, (page) => {
            return includes(page.path, '/usecases/cases/');
        });

        return (
            <DocumentTitle title={config.siteTitle + ' | use cases'}>
                <main>
                    <section className="sub_intro">
                        <div className="sub_intro-forrest">
                            <MiniForrestGroup />
                        </div>
                        <header className="sub_intro-header">
                            <h1 className="sub_intro-heading">Für jeden Wald der richtige Fuchs.</h1>
                        </header>
                    </section>

                    <SectionContentSingle title="Use Cases">
                        <p>
                            Hier erfolgt kein Jägerlatein. Vielmehr wollen wir Ihnen Beispiele und ausgewählte
                            Fallstudien verdeutlichen. Im E-Mail-Marketing gibt es keine Schon- oder Brunftzeit. Weder
                            für uns noch für den E-Mail-Dialog mit Ihren bestehenden oder potentiellen Kunden. Wir sind
                            einsatzbereit und gespannt auf die Herausforderung Ihrer Anfrage.
                        </p>
                    </SectionContentSingle>

                    {map(cases, (useCase, idx) => {
                        return <UseCase useCase={useCase.data} key={idx} index={idx} />;
                    })}

                    <Hero image="wald_workshop">
                        <Link to="/workshops/" className="cta">
                            Werden Sie zum Fuchs!
                        </Link>
                    </Hero>
                </main>
            </DocumentTitle>
        );
    }
}

class UseCase extends React.Component {
    render() {
        const { title, intro, body, icons } = this.props.useCase;
        const index = this.props.index;

        return (
            <SectionContentSingle classNameWrapper={style.container}>
                <div className={style['bubble-container']}>
                    <div className={style.bubble}>
                        <span className={style['bubble-inner']}>
                            Use Case
                            <br />#{index + 1}
                        </span>
                    </div>
                </div>
                <div className={style.icons}>
                    {map(icons, (icon) => {
                        return <Illustration key={icon} illustration={'icon_' + icon} />;
                    })}
                </div>
                <h2 className={style.title}>{title}</h2>
                <p>{intro}</p>
                <div dangerouslySetInnerHTML={{ __html: body }} />
            </SectionContentSingle>
        );
    }
}