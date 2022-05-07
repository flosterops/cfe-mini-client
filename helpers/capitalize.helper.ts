function capitalizeFirst(string: string): string {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function capitalizeAny(string: string): string {
    const splitString = string.split(' ');
    let capitalizeString = '';
    splitString.forEach((item: string, index: number): void => {
        const space = index === 0 ? '' : ' ';
        capitalizeString += space + capitalizeFirst(item);
    });
    return capitalizeString;
}

export { capitalizeFirst, capitalizeAny };
