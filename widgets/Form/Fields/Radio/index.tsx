import React, { FunctionComponent, ReactElement, useState } from 'react';
import { AlignItemsTypes, ISpaceTypes } from 'models/layout.model';
import styled from 'styled-components';
import { Row } from 'ui/Layout';
import { colors } from 'helpers/colors';

export interface IRadio extends ISpaceTypes {
    id: string;
    value: boolean;
    name: string;
    placeholder: string;
    field?: any;
    form?: any;
}

interface IStyledRadio {
    checked: boolean;
}

const StyledRadio = styled.span<IStyledRadio>`
    width: 13px;
    min-width: 13px;
    height: 13px;
    cursor: pointer;
    align-items: center;
    justify-content: center;
    display: flex;
    cursor: pointer;
    background-color: ${colors.dark};
    border: 1px solid ${colors.yellow};
    border-radius: 100%;
    z-index: 2;
    margin-right: 10px;
    &:before {
        cursor: pointer;
        width: 9px;
        height: 9px;
        background: ${colors.yellow};
        background-size: cover;
        border-radius: 100%;
        content: '';
        display: ${(props) => (props.checked ? 'flex' : 'none')};
        position: absolute;
    }

    & input {
        opacity: 0;
        margin: 0;
        cursor: pointer;
    }
`;

const Label = styled.label`
    color: ${colors.lightText};
    cursor: pointer;
`;

const StyledInput = styled.input``;

const Radio: FunctionComponent<IRadio> = ({
    id,
    value,
    name,
    placeholder,
    form,
    field,
    ...props
}: IRadio): ReactElement => {
    const [checked, setChecked] = useState<boolean>(value);
    const onChange = (): void => {
        setChecked(!checked);
        form.setFieldValue(field.name, !form.values[name]);
    };
    return (
        <Row componentWidth="auto" ai={AlignItemsTypes.center}>
            <StyledRadio checked={checked}>
                <StyledInput id={name} name={name} onClick={onChange} type="radio" {...props} />
            </StyledRadio>
            {placeholder && (
                <Label htmlFor={id} onClick={onChange}>
                    {placeholder}
                </Label>
            )}
        </Row>
    );
};

export { Radio };
