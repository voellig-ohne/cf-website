import React from 'react';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

export default (json) => {
    const options = {
        // needed so that line breaks are properly added.
        renderText: (text) => {
            return text.split('\n').reduce((children, textSegment, index) => {
                return [...children, index > 0 && <br key={index} />, textSegment];
            }, []);
        },
    };

    return documentToReactComponents(json, options);
};
