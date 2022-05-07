import React, { FunctionComponent, ReactElement, useState } from 'react';
import styled, { css } from 'styled-components';
import { globalStyles, media } from 'helpers/theme';
import { Row, Icon, SearchIcon } from 'ui';
import { IconTypes } from 'helpers/icons';
import { colors } from 'helpers/colors';
import { InputTypes, ISpaceTypes } from 'models/layout.model';
import { ILayout } from 'ui/Layout';
import { ISearchIcon } from 'ui/Icon/SearchIcon';
import { BreakPoints } from 'helpers/responsive';

interface IPasswordIcon {
    setType: (type: InputTypes) => void;
    type: InputTypes;
    icon?: IconTypes;
}

const PasswordIcon = ({ setType, type, icon }: IPasswordIcon): ReactElement => {
    const onPassIconClick = (): void => {
        const updatedType = type === InputTypes.password ? InputTypes.text : InputTypes.password;
        setType(updatedType);
    };

    return (
        <StyledIconWrapper showPw={type === InputTypes.password} componentWidth="auto" onClick={onPassIconClick}>
            {icon && <Icon icon={icon} alt={icon} />}
        </StyledIconWrapper>
    );
};

const StyledField = styled.div`
    position: relative;
    width: 100%;
    display: flex;
    align-items: center;
`;

// TODO add styles for autocomplete
const StyledInput = styled.input<any>`
    width: 100%;
    ${globalStyles.fonts.default};
    ${globalStyles.fontSizes.default};
    ${(props) => (props.type === InputTypes.password ? globalStyles.fontSizes.xxl : globalStyles.fontSizes.default)}
    height: ${globalStyles.global.componentHeight}px;
    border-radius: ${globalStyles.global.borderRadius}px;
    color: ${colors.lightText};
    background: ${(props) => (props.bg ? props.bg : colors.dark)};
    border: 1px solid ${colors.yellow};
    padding: ${(props) => (props.icon ? '0 52px 0 12px' : '0 12px')};
    box-sizing: border-box;
    outline: 0;
    &:focus {
        transition: 0.2s;
    }

    ::placeholder {
        color: ${colors.disabled};
    }

    ${media.lessThan(BreakPoints.phone)} {
        padding: ${(props) => (props.icon ? '0 42px 0 12px' : '0 12px')};
    }

    ${(props) =>
        props.stateInputType === InputTypes.password &&
        css`
            font: large Verdana, sans-serif;
        `}

    ${(props) =>
        props.disabled &&
        css`
            background: ${colors.disabled};
            color: ${colors.lightText};
            border-color: ${colors.disabled};
        `}
`;

export const StyledIconWrapper = styled(Row)<ILayout & { showPw: boolean }>`
    position: absolute;
    right: 32px;
    cursor: pointer;
    opacity: ${(props) => (props.showPw ? '1' : '0.5')};
`;

const SearchIconWrapper = styled(SearchIcon)<ISearchIcon>`
    position: absolute;
    right: 12px;
    ${media.lessThan(BreakPoints.phone)} {
        width: 25px;
        height: 25px;
    }
`;

interface IInput extends ISpaceTypes {
    value: any;
    onBlur?: () => void;
    onFocus?: () => void;
    onFieldChange?: (e: any) => void;
    disabled?: boolean;
    className?: string;
    placeholder: string;
    type: InputTypes;
    name: string;
    id: string;
    autoComplete?: string;
    icon?: IconTypes;
    color: string;
    formikField?: boolean;
    field?: any;
    form?: any;
    bg?: string;
    showError: boolean;
}

function getType(type: InputTypes): InputTypes {
    if (type === InputTypes.search) {
        return InputTypes.text;
    }
    return type;
}

const Input: FunctionComponent<IInput> = ({
    icon,
    color,
    type: propsType,
    field,
    form,
    showError,
    ...props
}: IInput): ReactElement => {
    const type = getType(propsType);
    const [inputType, setInputType] = useState<InputTypes>(type);
    const onChange = (event: any): void => {
        form.setFieldValue(field.name, event.target.value);
    };

    const { handleBlur } = form;
    return (
        <StyledField>
            {propsType === InputTypes.password && <PasswordIcon type={inputType} setType={setInputType} icon={icon} />}
            {propsType === InputTypes.search && <SearchIconWrapper />}
            <StyledInput
                onChange={onChange}
                color={color}
                onBlur={handleBlur}
                {...props}
                value={field.value}
                name={field.name}
                type={inputType}
                icon={icon}
                stateInputType={inputType}
            />
        </StyledField>
    );
};

export { Input };
