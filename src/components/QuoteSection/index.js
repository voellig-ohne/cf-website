import React from 'react';
import style from './style.module.less';

export default function QuoteSection({ children, author }) {
    return (
        <div className={style.container}>
            <blockquote className={style.quote} dangerouslySetInnerHTML={{ __html: children }} />
            <div className={style.author}>{author}</div>
        </div>
    );
}
