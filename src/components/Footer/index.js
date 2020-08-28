import React from 'react';
import './style.less';
import Illustration from '../Illustration';
import contentfulRichText, { mapFields } from '../contentfulRichText';
import { addForwardSlashToSlug } from '../utils';
import { Link } from 'gatsby';
import classNames from 'classnames';

export default ({ leftColumn, rightColumn }) => (
    <footer className="footer" id="footer">
        <section className="footer-section footer-imprint">{contentfulRichText(leftColumn.json)}</section>
        <section className="footer-section">{contentfulRichText(rightColumn.json)}</section>
    </footer>
);

export const FooterItem = ({ label, targetLink, icon, targetPage, iconCharacter, thinText }) => {
    let inner = addLineBreaks(label);

    if (targetLink) {
        inner = <a href={targetLink}>{addLineBreaks(label)}</a>;
    }

    if (targetPage) {
        let linktToPage = addForwardSlashToSlug(targetPage.slug ? targetPage.slug : mapFields(targetPage.fields).slug);

        inner = <Link to={linktToPage}>{addLineBreaks(label)}</Link>;
    }

    return (
        <div className={classNames('footer-item', { 'footer-item-thin': thinText })}>
            <dt>{iconCharacter ? iconCharacter : <Illustration illustration={icon} />}</dt>
            <dd>{inner}</dd>
        </div>
    );
};

const addLineBreaks = (string) => (
    <>
        {string.split('\n').map((item, key, allItems) => {
            return (
                <React.Fragment key={key}>
                    {item}
                    {allItems.length - 1 !== key && <br />}
                </React.Fragment>
            );
        })}
    </>
);
