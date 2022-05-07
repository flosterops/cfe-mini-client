import React, { ReactElement, ReactNode, ReactNodeArray } from 'react';
import styled, { css } from 'styled-components';
import Ripples from 'react-ripples';
import { ComponentSizesTypes, ISpaceTypes } from 'models/layout.model';
import { componentSize as buttonSize, globalStyles, media, space } from 'helpers/theme';
import { colors } from 'helpers/colors';
import { BreakPoints } from 'helpers/responsive';

export enum IButtonVariant {
    text = 'text',
    outlined = 'outlined',
    contained = 'contained',
}

export interface IButton extends ISpaceTypes {
    color?: string;
    width?: string;
    height?: string;
    componentSize?: ComponentSizesTypes | string;
    onClick?: (...args: any) => void;
    disabled?: boolean;
    type?: 'submit' | 'button';
    variant?: IButtonVariant;
    padding?: string;
    ref?: any;
    children: ReactNode | ReactNodeArray;
    tagName?: 'a' | 'button';
    href?: string;
    animationType?: EButtonAnimationTypes;
}

export enum EButtonAnimationTypes {
    primary = 'primary',
    default = 'default',
    topSlide = 'topSlide',
}

const primaryButtonStyles = `
    background-color: ${colors.yellow};
    transition: 1s background-color ease;
    &:hover {
        opacity: 1;
        filter: none;
        background-color: ${colors.lightText}
    }
    &:not(hover) {
        background-color: ${colors.yellow}
    }
`;

const topSlideButtonStyles = `
    background-color: transparent;
    background-image: linear-gradient(to top, ${colors.yellow} 50%, transparent 50%);
    background-size: 100% 200%;
    background-position: top;
    transition: background-position 300ms ease-in-out; 
    &:hover {
        opacity: 1;
        filter: none;
        background-position: bottom;
        color: ${colors.dark};
        p {
            color: ${colors.dark};
        }
    }
`;

function getButtonAnimationStyles(type: EButtonAnimationTypes): string {
    switch (type) {
        case EButtonAnimationTypes.primary:
            return primaryButtonStyles;
        case EButtonAnimationTypes.topSlide:
            return topSlideButtonStyles;
        default:
            return '';
    }
}

function getButtonColor(props: IButton): string {
    const { color, variant } = props;
    switch (variant) {
        case IButtonVariant.contained:
            return `
                background-color: ${color};
                color: ${colors.lightText};
            `;
        case IButtonVariant.outlined:
            return `
                border: 1px solid ${color};
                color: ${color};
                background-color: transparent;
            `;
        case IButtonVariant.text:
            return `
                color: ${color};
                background-color: transparent;
            `;
        default:
            return '';
    }
}

const StyledButton = styled.button<IButton>`
    ${globalStyles.fontSizes.default};
    ${globalStyles.fonts.default};
    cursor: pointer;
    width: ${({ width }: IButton): string => width || '100%'};
    height: ${({ height }: IButton): string => height || `${globalStyles.global.componentHeight}px;`};
    display: flex;
    align-items: center;
    text-transform: uppercase;
    border: none;
    border-radius: ${globalStyles.global.borderRadius}px;
    justify-content: center;
    outline: none;
    :hover {
        filter: grayscale(0.2);
        transition: 0.4s ease;
    }
    padding: ${({ padding }: IButton): string => (padding ? padding : '0')};
    ${media.lessThan(BreakPoints.phone)} {
        height: ${({ height }: IButton): string => height || '35px;'};
    }
    ${(props: IButton): string => getButtonColor(props)};

    ${(props: IButton): any =>
        props.disabled &&
        css`
            background: ${colors.disabled}};
            color: ${colors.lightText};
        `}
    ${(props: IButton): any =>
        props.variant === 'text' &&
        css`
            font-size: 12px;
            text-transform: none;
        `}
    ${({ animationType = EButtonAnimationTypes.default }: IButton): string => getButtonAnimationStyles(animationType)}
`;

const StyledButtonWrapper = styled.div<any>`
    ${buttonSize};
    ${space};
`;

const StyledRipples = styled(Ripples)`
    width: 100%;
`;

const ButtonComponent: React.FC<IButton> = ({
    type,
    color,
    onClick,
    disabled,
    variant,
    padding,
    children,
    height,
    width,
    href,
    tagName = 'button',
    animationType = EButtonAnimationTypes.default,
}: IButton): ReactElement => {
    return (
        <StyledButton
            as={tagName}
            href={href}
            type={type}
            color={color}
            onClick={onClick}
            disabled={disabled}
            padding={padding}
            variant={variant}
            height={height}
            width={width}
            animationType={animationType}
        >
            {children}
        </StyledButton>
    );
};

const Button: React.FC<IButton> = ({
    children,
    type = 'button',
    color = 'main',
    componentSize = ComponentSizesTypes.default,
    onClick,
    disabled,
    variant = IButtonVariant.contained,
    padding,
    height,
    width,
    tagName,
    href,
    animationType,
    ...props
}: IButton): ReactElement => {
    return (
        <StyledButtonWrapper componentSize={componentSize} {...props}>
            <StyledRipples color="rgba(255,255,255,0.4)">
                <ButtonComponent
                    tagName={tagName}
                    href={href}
                    type={type}
                    color={color}
                    onClick={onClick}
                    disabled={disabled}
                    padding={padding}
                    variant={variant}
                    height={height}
                    width={width}
                    animationType={animationType}
                >
                    {children}
                </ButtonComponent>
            </StyledRipples>
        </StyledButtonWrapper>
    );
};

export { Button };
