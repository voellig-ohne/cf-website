import Illustration from '../Illustration';
import React from 'react';
import style from './style.module.less';
import classNames from 'classnames';
import FoxNetwork from '../FoxNetwork';

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
