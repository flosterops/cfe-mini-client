interface IMainHeight {
    height: string;
    minHeight: string;
}

function getMainHeight(full: boolean, footer: boolean): IMainHeight {
    if (full) {
        return { height: '100vh', minHeight: '70vh' };
    }
    if (!footer) {
        return { height: 'auto', minHeight: 'calc(100vh - 61px)' };
    }
    return { height: 'auto', minHeight: 'auto' };
}

export { getMainHeight };
