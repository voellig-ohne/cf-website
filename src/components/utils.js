export function addForwardSlashToSlug(link) {
    if (link.startsWith('/')) {
        return link;
    }

    return '/' + link;
}
