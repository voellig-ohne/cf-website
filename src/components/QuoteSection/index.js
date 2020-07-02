import React from 'react';
import style from './style.module.less';
import classNames from 'classNames';
import SectionContentSingle from 'components/SectionContentSingle';

export default class QuoteSection extends React.Component {
    render() {
        const { children, author } = this.props;

        return (
            <SectionContentSingle classNameWrapper={style.container}>
                <blockquote
                    className={style.quote}
                    dangerouslySetInnerHTML={{ __html: children }}
                    className={style.quote}
                />
                <div className={style.author}>{author}</div>
            </SectionContentSingle>
        );
    }
}
