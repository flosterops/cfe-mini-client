import { colors } from 'helpers/colors';

function getLocalesBg(visible: boolean, footer?: boolean): string {
    if (footer) {
        return 'transparent';
    }
    return visible ? colors.purplePink : colors.dark;
}

export { getLocalesBg };
