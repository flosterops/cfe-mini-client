import { colors } from 'helpers/colors';

const countSelectStyles = {
    control: (styles: any) => ({
        ...styles,
        height: '50px',
        padding: '0 5px 0 10px',
        outline: 'none',
        boxShadow: 'none',
        borderRadius: 0,
        backgroundColor: colors.black,
        border: `2px solid ${colors.yellow}`,
        color: colors.lightText,
        width: '70px',
        cursor: 'pointer',
        '&:hover': {
            padding: '0 5px 0 10px',
            fontSize: '16px',
        },
        '&:last-child': {
            borderColor: 'none',
        },
        '&:focus': {
            padding: '0 5px 0 10px',
        },
    }),
    option: (provided: any, state: any) => ({
        ...provided,
        color: colors.lightText,
        borderBottom: '1px solid #e8eff7',
        width: '100%',
        border: 'none',
        paddingBottom: '10px',
        backgroundColor: state.isSelected ? colors.darkText : colors.black,
        cursor: 'pointer',
        '&:hover': {
            backgroundColor: colors.darkText,
            color: colors.lightText,
        },
    }),
    singleValue: (styles: any) => ({ ...styles, marginLeft: '0', color: colors.lightText, width: '50px' }),
    indicatorSeparator: (styles: any) => ({ ...styles, display: 'none' }),
    indicatorsContainer: (styles: any) => ({ ...styles, top: '3px', left: 0, padding: 0 }),
    valueContainer: (styles: any) => ({ ...styles, padding: '0', width: '70px' }),
    dropdownIndicator: (styles: any) => ({ ...styles, padding: 0 }),
    // TODO add types for the params
    menu: (provided: any, state: any) => ({
        ...provided,
        width: '100%',
        backgroundColor: colors.black,
        marginTop: 0,
        color: colors.lightText,
        zIndex: 20,
    }),
    placeholder: (styles: any) => ({ ...styles, fontSize: '16px', color: colors.lightText }),
};

export { countSelectStyles };
