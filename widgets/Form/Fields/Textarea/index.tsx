import * as React from 'react';
import styled, { css } from 'styled-components';
import { ISpaceTypes } from 'models/layout.model';
import { globalStyles } from 'helpers/theme';
import { IconTypes } from 'helpers/icons';
import { colors } from 'helpers/colors';

interface ITextarea extends ISpaceTypes {
    value: any;
    disabled?: boolean;
    placeholder: string;
    autoComplete?: string;
    icon?: IconTypes;
    color?: string;
    form: any;
    field: any;
    id?: string;
}

const StyledField = styled.div<any>`
    position: relative;
    display: flex;
    width: 100%;
    i {
        display: flex;
        align-items: flex-start;
        padding-top: 5px;
    }
`;

const StyledTextArea = styled.textarea<any>`
    ${globalStyles.fonts.default};
    ${globalStyles.fontSizes.default};
    width: 100%;
    border-radius: 5px;
    height: 80px;
    border: 1px solid ${({ color }) => color};
    padding: 8px 20px;
    box-sizing: border-box;
    outline: 0;
    resize: none;

    ::placeholder {
        color: ${colors.disabled};
    }

    ${(props) =>
        props.disabled &&
        css`
            background: ${colors.disabled};
            color: ${colors.disabled};
        `}
    ${(props) =>
        props.icon &&
        css`
            padding-left: 44px;
        `}
`;

function getIcon(icon?: IconTypes, color?: string) {
    if (icon) {
        // return <Icon name={icon} color={color} wrapped />;
    }
    return null;
}

const Textarea: React.FC<ITextarea> = ({
    form,
    field,
    disabled,
    placeholder,
    id,
    autoComplete,
    icon,
    color = 'main',
    ...props
}) => {
    const { handleChange, handleBlur } = form;
    const { name, value } = field;
    return (
        <StyledField color={color} disabled={disabled} icon={icon}>
            {getIcon(icon, color)}
            <StyledTextArea
                icon={icon}
                id={id}
                color={color}
                name={name}
                onBlur={handleBlur}
                disabled={disabled}
                autoComplete={autoComplete}
                placeholder={placeholder}
                onChange={handleChange}
                {...props}
                value={value}
            />
        </StyledField>
    );
};

export { Textarea };
