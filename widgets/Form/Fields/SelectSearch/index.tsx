import * as React from 'react';
import { FunctionComponent, ReactElement } from 'react';
import styled from 'styled-components';
import Select from 'react-select';
import { ComponentSizesTypes } from 'models/layout.model';
import { SelectMenuPlacement, selectStyles } from './helpers';
import { globalStyles } from 'helpers/theme';
import { ExpandIcon } from 'ui';
import { colors } from 'helpers/colors';

export interface ISelectOptionsModel {
    value: string | number;
    label: string | number;
}

interface ISelectSearchProp {
    options: ISelectOptionsModel[];
    placeholder?: string;
    disabled?: boolean;
    id: string;
    setFieldTouched?: (...args: any) => void;
    isClearable?: boolean;
    isSearchable?: boolean;
    customStyle?: any;
    style?: any;
    value?: string;
    menuPlacement?: SelectMenuPlacement;
    setFieldValue: (name: string, value: any) => void;
    componentSize?: ComponentSizesTypes;
    defaultValue?: any;
    handleChange: (...args: any) => void;
    color?: string;
    form: any;
    field: any;
    theme: any;
    selectProps?: ISpecialSelectOptions;
}

export interface ISpecialSelectOptions {
    id?: string;
    isClearable?: boolean;
    isSearchable?: boolean;
    menuPlacement?: SelectMenuPlacement;
    style?: any;
}

const StyledSelect = styled(Select)<any>`
    width: 100%;
    > div:first-child {
        ${globalStyles.fonts.default};
        ${globalStyles.fontSizes.default};
        height: ${globalStyles.global.componentHeight}px;
        padding: 0 0 0 12px;
        position: relative;
    }
`;

const StyledDropDownIndicator = styled.div<{ isFocused: boolean }>`
    transition: 0.4s ease all;
    padding: 0;
    transform: rotate(90deg);
`;

const SelectSearch: FunctionComponent<ISelectSearchProp> = ({
    form,
    field,
    options,
    color,
    disabled,
    placeholder,
    selectProps = {},
    handleChange,
}): ReactElement => {
    const { value } = field;
    const { setFieldValue, setFieldTouched } = form;

    const valueSelect = value && options.filter((option: ISelectOptionsModel): boolean => option.value === value);
    const {
        isClearable,
        isSearchable,
        menuPlacement = SelectMenuPlacement.default,
        style = selectStyles.default,
    } = selectProps;

    const DropdownIndicator = (props: any) => {
        const {
            children = <ExpandIcon color={colors.yellow} />,
            getStyles,
            innerProps: { ref, ...restInnerProps },
            isFocused,
        } = props;
        return (
            <StyledDropDownIndicator
                isFocused={isFocused}
                {...restInnerProps}
                ref={ref}
                style={getStyles('dropdownIndicator', props)}
            >
                {children}
            </StyledDropDownIndicator>
        );
    };

    const styles = field ? selectProps.style : style;

    return (
        <StyledSelect
            id={field.name}
            name={field.name}
            options={options}
            value={valueSelect}
            defaultValue={field.value || ''}
            placeholder={placeholder}
            onChange={(valueObject: ISelectOptionsModel): void => {
                setFieldValue(field.name, valueObject.value);
                handleChange && handleChange(valueObject.value);
            }}
            onBlur={() => {
                setFieldTouched(field.name, true);
            }}
            color={color}
            isDisabled={disabled}
            isClearable={isClearable}
            menuPlacement={menuPlacement}
            components={{ DropdownIndicator }}
            isSearchable={isSearchable}
            styles={styles}
        />
    );
};

export { SelectSearch };
