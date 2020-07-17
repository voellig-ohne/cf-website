import React from 'react';
import style from './style.module.less';
import classNames from 'classnames';
import SectionContentSingle from '../SectionContentSingle';

export default function SectionItemStrip({ illustrations, title, showLabels, className }) {
    const classNamesContainer = classNames(className, style.strip);

    return (
        <SectionContentSingle className={classNamesContainer}>
            <h2 className={style.heading}>{title}</h2>
            <div
                className={classNames(style.illustrationsContainer, {
                    [style['illustrationsContainer--bigger']]: showLabels,
                })}
            >
                {illustrations.map((illustration, key) => {
                    return (
                        <div
                            className={classNames(style.illustrationContainer, {
                                [style['illustrationContainer--bigger']]: showLabels,
                            })}
                            key={key}
                        >
                            <img
                                src={illustration.file.url}
                                alt={illustration.title}
                                className={classNames(style.illustration, {
                                    [style['illustration--smaller']]: !showLabels,
                                })}
                            />
                            {showLabels && <span className={style.title}>{illustration.title}</span>}
                        </div>
                    );
                })}
            </div>
        </SectionContentSingle>
    );
}
