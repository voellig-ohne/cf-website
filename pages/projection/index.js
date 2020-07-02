import React from 'react';
import { Link } from 'react-router';
import DocumentTitle from 'react-document-title';
import { config } from 'config';
import { filter, map, includes } from 'lodash';
import Forrest from 'components/Forrest';
import style from './style.module.less';
import classNames from 'classNames';

export default class UseCases extends React.Component {
    render() {
        const cases = filter(this.props.route.pages, (page) => {
            return includes(page.path, '/usecases/cases/');
        });

        return (
            <DocumentTitle title={config.siteTitle + ' | project!'}>
                <main>
                    <section className="sub_intro">
                        <div className="sub_intro-forrest">
                            <Forrest className={style.canvas} mode="single" projection={true} />
                        </div>
                    </section>
                </main>
            </DocumentTitle>
        );
    }
}
