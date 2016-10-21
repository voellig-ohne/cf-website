import Illustration from 'components/Illustration'
import React from 'react'
import style from './style.module.less'
import { map } from 'lodash'
import classNames from 'classNames'

const ANIMAL_COUNT = 12;

export default class FoxAndYou extends React.Component{
    render() {
        const className = classNames(this.props.className, style.section)

        const animals = Array.apply(null, {length: ANIMAL_COUNT}).map((animal, index) => {
            return 'tiere_' + index
        })

        return (
            <div className={style.container}>
                <div className={style['container-fox']}>
                    <Illustration
                        illustration="fuchs"
                        className={style.fox} />
                </div>
                <div className={style['container-animals']}>
                    {
                        map(animals, (animal) => {
                            return (
                                <Illustration
                                    key={animal}
                                    illustration={animal}
                                    className={style.animal} />
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}