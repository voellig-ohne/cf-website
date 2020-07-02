import React from 'react';
import style from './style.module.less';
import Illustration from 'components/Illustration';
import { Link } from 'react-router';
import classNames from 'classNames';
import { map } from 'lodash';
import SectionContentSingle from 'components/SectionContentSingle';

export default class SectionItemStrip extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { illustrations, title, smaller } = this.props;

        const className = classNames(this.props.classNames, style.strip);

        return (
            <SectionContentSingle className={className}>
                <h2 className={style.heading}>{title}</h2>
                <div className={style.illustrationsContainer}>
                    {map(illustrations, (illustration, key) => {
                        return (
                            <div
                                className={classNames(style.illustrationContainer, {
                                    [style['illustrationContainer--bigger']]: !smaller,
                                })}
                                key={key}
                            >
                                <Illustration
                                    className={classNames(style.illustration, {
                                        [style['illustration--smaller']]: smaller,
                                    })}
                                    illustration={illustration.illustration}
                                    title={illustration.title}
                                />
                                {smaller ? null : <span className={style.title}>{illustration.title}</span>}
                            </div>
                        );
                    })}
                </div>
            </SectionContentSingle>
        );
    }
}
