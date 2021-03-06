import React from 'react';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS } from '@contentful/rich-text-types';
import Illustration from '../Illustration';
import Button from '../Button';
import SectionIconStrip from '../SectionIconStrip';
import QuoteSection from '../QuoteSection';
import style from './style.module.less';
import { FooterItem } from '../Footer';

export default (json) => {
    const options = {
        // needed so that line breaks are properly added 🙄
        renderText: (text) => {
            return text.split('\n').reduce((children, textSegment, index) => {
                return [...children, index > 0 && <br key={index} />, textSegment];
            }, []);
        },
        renderNode: {
            [BLOCKS.EMBEDDED_ENTRY]: ({
                data: {
                    target: {
                        sys: {
                            contentType: {
                                sys: { id: contentTypeId },
                            },
                        },
                        fields,
                    },
                },
            }) => {
                const fieldsMapped = objectMap(fields, (field) => field['de-DE']);
                if (contentTypeId === 'circleSectionInline') {
                    return (
                        <div className="circles">
                            {fieldsMapped.icons.map(({ fields }, index) => {
                                const { type, title } = mapFields(fields);

                                return (
                                    <div className="circles-circle" key={index}>
                                        <Illustration illustration={type} className="circles-image" />
                                        <div className="circles-title">{title}</div>
                                    </div>
                                );
                            })}
                        </div>
                    );
                }
                if (contentTypeId === 'button') {
                    return <Button className={style.button} {...fieldsMapped} />;
                }
                if (contentTypeId === 'smallIconsInline') {
                    const iconsMapped = fieldsMapped?.icons?.map((icon) => mapFields(icon.fields));
                    if (iconsMapped)
                        return (
                            <SectionIconStrip
                                title={fieldsMapped.title}
                                illustrations={iconsMapped}
                                showLabels={fieldsMapped.showLabels}
                            />
                        );
                }
                if (contentTypeId === 'quote') {
                    return <QuoteSection author={fieldsMapped.source}>{fieldsMapped.quote}</QuoteSection>;
                }
                if (contentTypeId === 'footerItem') {
                    return <FooterItem {...fieldsMapped} />;
                }
            },
        },
    };

    return documentToReactComponents(json, options);
};

export const mapFields = (fieldsUnmapped) => {
    return objectMap(fieldsUnmapped, (field) => field['de-DE']);
};

// https://stackoverflow.com/questions/14810506/map-function-for-objects-instead-of-arrays
const objectMap = (object, mapFn) => {
    return Object.keys(object).reduce(function (result, key) {
        result[key] = mapFn(object[key]);
        return result;
    }, {});
};
