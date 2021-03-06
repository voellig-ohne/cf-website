import Illustration from '../Illustration';
import React from 'react';
import style from './style.module.less';
import { map } from 'lodash';
import classNames from 'classnames';

const ANIMAL_COUNT = 12;
const ANIMAL_HEIGHT = 80;
const SPIN_COUNT = 10;

export default class FoxAndYou extends React.Component {
    constructor(props) {
        super(props);

        this.boundResize = this.onResize.bind(this);

        this.state = {
            scroll: 0,
            animalHeight: 60,
            animalRowCount: 10,
        };
    }
    render() {
        const animals = Array.apply(null, { length: ANIMAL_COUNT }).map((animal, index) => {
            return 'tiere_' + index;
        });

        let multipleAnimals = [];

        for (let i = 0; i < ANIMAL_COUNT * 2; i++) {
            multipleAnimals = multipleAnimals.concat(animals);
        }

        let slideTransform = {
            transform: 'translateY(' + this.state.scroll + ')',
        };

        const containerClasses = classNames(this.props.className);

        return (
            <div
                className={containerClasses}
                aria-hidden="true"
                onClick={this.goSlide.bind(this)}
                ref={(c) => (this.containerEl = c)}
            >
                <div className={style.container}>
                    <div className={style['container-fox']}>
                        <Illustration illustration="fuchs" className={style.fox} />
                    </div>
                    <div className={style['container-animals']} style={slideTransform}>
                        {map(multipleAnimals, (animal, idx) => {
                            const classes = classNames(style.animal, {
                                [style['animal--active']]: idx === this.state.targetAnimalIndex,
                            });
                            return (
                                <Illustration
                                    key={idx}
                                    illustration={animal}
                                    className={classes}
                                    style={{ height: this.state.animalHeight + 'px' }}
                                />
                            );
                        })}
                    </div>
                </div>
            </div>
        );
    }
    componentDidMount() {
        if (typeof window !== 'undefined') {
            setTimeout(() => {
                this.onResize();
            }, 0);

            window.addEventListener('resize', this.boundResize);

            setTimeout(() => {
                this.goSlide();
            }, 1500);
        }
    }
    componentWillUnmount() {
        window.removeEventListener('resize', this.boundResize);
    }
    onResize() {
        const animalRowCount = this.calculateAnimalRowCount();

        this.setState({
            animalHeight: this.calculateAnimalHeight(animalRowCount),
            animalRowCount,
        });
    }
    calculateAnimalRowCount() {
        let rows = Math.round(this.containerEl.offsetHeight / ANIMAL_HEIGHT);
        return rows % 2 === 0 ? rows + 1 : rows;
    }
    calculateAnimalHeight(animalRows) {
        return this.containerEl.offsetHeight / animalRows;
    }
    goSlide() {
        const targetAnimalIndex = this.generateTargetAnimal();

        this.setState({
            scroll: this.getScrollPosition(targetAnimalIndex) + 'px',
            targetAnimalIndex,
        });
    }
    generateTargetAnimal() {
        if (this.state.targetAnimalIndex > SPIN_COUNT * this.state.animalRowCount * 0.5) {
            return this.state.animalRowCount + Math.round(Math.random() * this.state.animalRowCount);
        } else {
            return (SPIN_COUNT - 2) * this.state.animalRowCount + Math.round(Math.random() * this.state.animalRowCount);
        }
    }
    getScrollPosition(target) {
        const centerOffset = this.state.animalRowCount / 2 - 0.5;
        return this.state.animalHeight * -(target - centerOffset);
    }
}
