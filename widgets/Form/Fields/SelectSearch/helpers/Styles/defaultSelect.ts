import { CSSProperties } from 'react';

const defaultSelectStyle = {
    control: (styles: CSSProperties) => ({
        ...styles,
        height: '40px',
        padding: '0 12px',
        outline: 'none',
        boxShadow: 'none',
        border: '1px solid #fff',
        color: '#fff',
        width: 'auto',
        '&:hover': {
            padding: '0 12px',
            fontSize: '16px',
        },
        '&:last-child': {
            borderColor: 'none',
        },
        '&:focus': {
            padding: '0 12px',
        },
    }),
    option: (styles: CSSProperties) => ({
        ...styles,
        color: '#fff',
        borderBottom: '1px solid #e8eff7',
        backgroundColor: '#2b2e3b',
        width: 'auto',
        border: 'none',
        paddingBottom: '10px',

        '&:hover': {
            backgroundColor: '#AAAAAA',
            color: '#fff',
        },
    }),
    singleValue: (styles: CSSProperties) => ({ ...styles, marginLeft: '0', color: '#fff' }),
    indicatorSeparator: (styles: CSSProperties) => ({ ...styles, display: 'none' }),
    indicatorsContainer: (styles: CSSProperties) => ({ ...styles, top: '3px' }),
    valueContainer: (styles: CSSProperties) => ({ ...styles, padding: '0', width: '100%' }),
    menu: (styles: CSSProperties) => ({
        ...styles,
        width: '100%',
        backgroundColor: '#2b2e3b',
        marginTop: '15px',
        color: '#fff',
    }),
    placeholder: (styles: CSSProperties) => ({ ...styles, fontSize: '16px', color: '#fff' }),
};

export { defaultSelectStyle };
