import { colors } from 'helpers/colors';
import { CSSProperties } from 'react';

const getAccountSelectStyle = (borderRadius: number) => {
    return {
        container: (styles: CSSProperties) => ({
            ...styles,
            borderRadius: borderRadius + 'px',
        }),
        control: (styles: CSSProperties) => ({
            ...styles,
            height: '45px !important',
            padding: '0 0 0 12px',
            outline: 'none',
            boxShadow: 'none',
            backgroundColor: colors.dark,
            border: `1px solid ${colors.grayMedium}`,
            color: colors.lightText,
            width: 'auto',
            cursor: 'pointer',
            borderRadius: borderRadius + 'px',
            '&:hover': {
                padding: '0 0 0 12px',
                fontSize: '16px',
            },
            '&:last-child': {
                borderColor: 'none',
            },
            '&:focus': {
                padding: '0 0 0 12px',
            },
        }),
        option: (provided: CSSProperties) => ({
            ...provided,
            minHeight: '45px',
            cursor: 'pointer',
            color: colors.lightText,
            backgroundColor: colors.dark,
            width: 'auto',
            border: 'none',
            paddingBottom: '10px',

            '&:hover': {
                backgroundColor: colors.yellow,
                color: colors.dark,
            },
        }),
        singleValue: (styles: CSSProperties) => ({
            ...styles,
            marginLeft: '0',
            color: colors.lightText,
            height: 'auto',
            borderRadius: borderRadius + 'px',
        }),
        indicatorSeparator: (styles: CSSProperties) => ({ ...styles, display: 'none' }),
        indicatorsContainer: (styles: CSSProperties) => ({ ...styles, top: '3px', width: '30px', padding: 0 }),
        dropdownIndicator: (styles: CSSProperties) => ({ ...styles, padding: 0 }),
        valueContainer: (styles: CSSProperties) => ({
            ...styles,
            padding: '0',
            width: '100%',
            minHeight: '45px',
            borderRadius: borderRadius + 'px',
        }),
        menu: (provided: CSSProperties) => ({
            ...provided,
            width: '100%',
            backgroundColor: colors.dark,
            marginTop: 0,
            color: colors.lightText,
            borderRadius: 0,
            border: `1px solid ${colors.grayMedium}`,
            borderTop: 0,
        }),
        placeholder: (styles: CSSProperties) => ({ ...styles, fontSize: '16px', color: colors.lightText }),
    };
};

export { getAccountSelectStyle };
