import React, { ReactElement } from 'react';
import styled from 'styled-components';
import { Description, Row } from 'ui';
import { FontSizeTypes } from 'models/layout.model';
import { colors } from 'helpers/colors';
import { IDescription } from 'ui/Description';

const StyledCheckboxContainer = styled(Row)`
    width: auto;
    display: flex;
`;

const StyledLabel = styled.label`
    cursor: pointer;
`;

const StyledCheckbox = styled.input`
    opacity: 0;
    cursor: pointer;
`;

const CheckboxDescription = styled(Description)<IDescription>`
    line-height: 1.4;
`;

export const StyledCheckboxSpan = styled.span<{ value: boolean }>`
    position: relative;
    width: 16px;
    min-width: 16px;
    height: 16px;
    cursor: pointer;
    align-items: center;
    justify-content: center;
    display: flex;
    background-color: ${(props) => (props.value ? colors.yellow : 'transparent')};
    border: 1px solid ${colors.yellow};
    background-size: 16px;
    &:before {
        width: 10px;
        height: 8px;
        background-image: url('/check.svg');
        background-size: cover;
        content: '';
        display: ${(props) => (props.value ? 'flex' : 'none')};
        position: absolute;
    }
`;

const Checkbox: React.FC<any> = (props): ReactElement => {
    const { form, field, disabled, placeholder, handleChange } = props;
    const { name, value = false } = field;

    const onChange = (event: any) => {
        form.setFieldValue(field.name, event.target.checked);
        handleChange && handleChange(field.name, event.target.checked);
    };

    return (
        <StyledCheckboxContainer componentWidth="auto">
            <StyledCheckboxSpan value={value}>
                <StyledCheckbox
                    type="checkbox"
                    onChange={onChange}
                    disabled={disabled}
                    checked={value}
                    name={name}
                    id={name}
                />
            </StyledCheckboxSpan>
            <StyledLabel htmlFor={name}>
                <CheckboxDescription mleft="5px" fontSize={FontSizeTypes.xs}>
                    {placeholder}
                </CheckboxDescription>
            </StyledLabel>
        </StyledCheckboxContainer>
    );
};

export { Checkbox };
