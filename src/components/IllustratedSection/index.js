import Illustration from '../Illustration';
import React from 'react';
import style from './style.module.less';
import classNames from 'classnames';

export default class IllustratedSection extends React.Component {
    render() {
        const { icon, title } = this.props;
        const className = classNames(this.props.className, style.section);

        return (
            <section className={className}>
                <div className={style['illustration-wrap']}>
                    <Illustration illustration={icon.type} file={icon.file} className={style.illustration} />
                    <h2 className={style.title}>{title}</h2>
                </div>
                <div className={style.text}>{this.props.children}</div>
            </section>
        );
    }
}
