import React, { FunctionComponent, ReactElement } from 'react';
import { connect, Field as FormikField } from 'formik';
import { Description } from 'ui';
import { FontSizeTypes } from 'models/layout.model';
import { componentSize, space } from 'helpers/theme';
import styled from 'styled-components';
import { Input } from 'widgets/Form/Fields/Input';
import { Textarea } from 'widgets/Form/Fields/Textarea';
import { ISelectOptionsModel, ISpecialSelectOptions, SelectSearch } from 'widgets/Form/Fields/SelectSearch';
import { Checkbox } from 'widgets/Form/Fields/Checkbox';
import { colors } from 'helpers/colors';
import { Radio } from 'widgets/Form/Fields/Radio';

export type TFieldType = 'text' | 'password' | 'textarea' | 'select' | 'checkbox' | 'radio' | 'search';
export type TFieldStyle = 'default' | 'account';

export interface IFieldProps {
    name: string;
    type?: TFieldType;
    label?: string;
    color?: string;
    icon?: string;
    error?: string;
    placeholder?: string;
    margin?: string;
    componentSize?: string;
    disabled?: boolean;
    style?: TFieldStyle;
    selectProps?: ISpecialSelectOptions;
    options?: ISelectOptionsModel[];
}

const StyledFieldWrapperHOC = styled.div<any>`
    ${componentSize};
    ${space};
`;

const getComponentByType = (type: string) => {
    switch (type) {
        default:
        case 'email':
        case 'text':
        case 'password':
        case 'search':
            return Input;
        case 'textarea':
            return Textarea;
        case 'radio':
            return Radio;
        case 'select':
            return SelectSearch;
        case 'checkbox':
            return Checkbox;
    }
};

function fieldStateColor(color: string, error: boolean, valid: boolean) {
    if (error) {
        return 'error';
    }
    if (valid) {
        return 'success';
    }
    return color;
}

const FieldC: FunctionComponent<IFieldProps & { formik?: any }> = ({
    name,
    color = 'disabled',
    type = 'text',
    placeholder,
    label,
    icon,
    formik,
    options,
    disabled,
    selectProps,
    ...props
}): ReactElement => {
    const error = formik.errors[name] || false;
    const touched = formik.touched[name] || false;
    const showError = touched && error;
    const componentColor = fieldStateColor(color, error && touched, !error && touched);
    const Component = getComponentByType(type);
    const withLabel = label && type !== 'checkbox';
    return (
        <StyledFieldWrapperHOC componentSize={componentSize} {...props}>
            {withLabel && (
                <Description fontSize={FontSizeTypes.s} color={colors.lightText} mbottom="5px">
                    {label}
                </Description>
            )}
            <FormikField
                icon={icon}
                color={componentColor}
                component={Component}
                formikField={true}
                showError={showError}
                name={name}
                type={type}
                options={options}
                disabled={disabled}
                placeholder={placeholder}
                form={formik}
                selectProps={selectProps}
                {...props}
            />
            {showError && (
                <Description mtop="6px" fontSize={FontSizeTypes.s} color={colors.error}>
                    {error}
                </Description>
            )}
        </StyledFieldWrapperHOC>
    );
};

const Field = connect(FieldC);

export { Field };
