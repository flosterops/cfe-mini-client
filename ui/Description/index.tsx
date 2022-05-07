import React, { ReactElement, ReactNode, ReactNodeArray } from 'react';
import styled from 'styled-components';
import { PositionTypes, FontSizeTypes, WeightTypes, ISpaceTypes, AlignTextTypes } from 'models/layout.model';
import { space, weight, fontSize, align, textAlign, lh, globalStyles } from 'helpers/theme';
import { colors } from 'helpers/colors';

const StyledDescription = styled.p<IDescription>`
    ${globalStyles.fonts.default};
    ${space};
    ${weight};
    ${fontSize};
    ${align};
    ${textAlign};
    ${lh}
    display: flex;
    width: auto;
    color: ${({ color }: IDescription): string => color as string};
    text-transform: ${(props: IDescription): string => (props.uppercase ? 'uppercase' : 'none')};
`;

export interface IDescription extends ISpaceTypes {
    position?: PositionTypes;
    color?: string;
    fontSize?: FontSizeTypes;
    uppercase?: boolean;
    textAlign?: AlignTextTypes;
    weight?: WeightTypes;
    children: ReactNode | ReactNodeArray;
    onClick?: (...args: any) => any;
}

const Description: React.FC<IDescription> = ({
    children,
    color = colors.lightText,
    fontSize = FontSizeTypes.s,
    weight = WeightTypes.w500,
    position = PositionTypes.default,
    textAlign = AlignTextTypes.default,
    ...props
}: IDescription): ReactElement => {
    return (
        <StyledDescription
            color={color}
            fontSize={fontSize}
            position={position}
            textAlign={textAlign}
            weight={weight}
            {...props}
        >
            {children}
        </StyledDescription>
    );
};

export { Description };
