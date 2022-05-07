import { colors } from 'helpers/colors';
import { Props } from 'react-select';
import { CSSProperties } from 'react';

const transparentSelectStyle = {
    control: (styles: CSSProperties, state: Props) => {
        return {
            ...styles,
            height: 'auto',
            padding: '0 12px',
            outline: 'none',
            boxShadow: 'none',
            backgroundColor: 'transparent',
            border: '1px solid transparent',
            display: 'flex',
            color: colors.lightText,
            width: state.hasValue ? '200px' : 'auto',
            cursor: 'pointer',
            borderRadius: 0,
            fontSize: '14px',
            '&:hover': {
                padding: '0 12px',
                fontSize: '14px',
            },
            '&:last-child': {
                borderColor: 'none',
            },
            '&:focus': {
                padding: '0 12px',
            },
        };
    },
    option: (styles: CSSProperties) => ({
        ...styles,
        cursor: 'pointer',
        color: colors.lightText,
        backgroundColor: colors.dark,
        width: 'auto',
        border: 'none',
        fontSize: '14px',
        display: 'flex',
        alignItems: 'center',
        height: '32px',
        padding: '3px 12px 3px 9px',

        '&:hover': {
            backgroundColor: colors.yellow,
            color: colors.dark,
        },
    }),
    singleValue: (styles: CSSProperties) => ({
        ...styles,
        marginLeft: '0',
        color: colors.lightText,
        fontSize: '14px',
        display: 'flex',
    }),
    indicatorSeparator: (styles: CSSProperties) => ({ ...styles, display: 'none' }),
    indicatorsContainer: (styles: CSSProperties) => ({ ...styles, left: 0, top: '3px', height: '45px' }),
    valueContainer: (styles: CSSProperties) => ({ ...styles, padding: '0', width: '100%', minHeight: '45px' }),
    menu: (styles: CSSProperties) => ({
        ...styles,
        width: '190px',
        height: 'auto',
        backgroundColor: colors.dark,
        marginTop: 0,
        color: colors.lightText,
        borderRadius: 0,
        border: `1px solid ${colors.yellow}`,
        padding: 0,
        margin: 0,
    }),
    placeholder: (styles: CSSProperties) => ({ ...styles, fontSize: '14px', color: colors.lightText }),
};

export { transparentSelectStyle };
