import React from 'react';
import style from './style.module.less';
import SectionContentSingle from '../SectionContentSingle';
import Illustration from '../Illustration';

export default ({ title, children, bubbleText, icons }) => {
    return (
        <SectionContentSingle classNameWrapper={style.container}>
            <div className={style['bubble-container']}>
                <div className={style.bubble}>
                    <span className={style['bubble-inner']}>{bubbleText}</span>
                </div>
            </div>
            <div className={style.icons}>
                {icons.map((icon) => {
                    return <Illustration key={icon.type} illustration={icon.type} />;
                })}
            </div>
            <h2 className={style.title}>{title}</h2>
            {children}
        </SectionContentSingle>
    );
};
