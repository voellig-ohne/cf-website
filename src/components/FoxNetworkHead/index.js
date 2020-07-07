import Illustration from '../components/Illustration';
import React from 'react';
import style from './style.module.less';
import { map, includes } from 'lodash';
import classNames from 'classNames';
import FoxNetwork from '../components/FoxNetwork';

export default class FoxNetworkHead extends React.Component {
    render() {
        const containerClasses = classNames(this.props.className);

        return (
            <div className={containerClasses}>
                <div className={style.container}>
                    <div className={style.fox}>
                        <Illustration illustration="fuchs" className={style.fox_illustration} />
                    </div>
                    <FoxNetwork className={style.leaves} />
                </div>
            </div>
        );
    }
}
