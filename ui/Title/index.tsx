import React, { ReactElement, ReactNode, ReactNodeArray } from 'react';
import styled from 'styled-components';
import { PositionTypes, FontSizeTypes, WeightTypes, ISpaceTypes } from 'models/layout.model';
import { space, weight, fontSize, align, globalStyles } from 'helpers/theme';
import { colors } from 'helpers/colors';

export enum TitleTags {
    h1 = 'h1',
    h2 = 'h2',
    h3 = 'h3',
    h4 = 'h4',
    h5 = 'h5',
    h6 = 'h6',
    default = 'h2',
}

export interface ITitle extends ISpaceTypes {
    position?: PositionTypes;
    color?: string;
    fontSize?: FontSizeTypes;
    uppercase?: boolean;
    weight?: WeightTypes;
    children: ReactNode | ReactNodeArray;
    tagName: TitleTags;
}

const StyledTitle = styled.h3<ITitle>`
    ${space};
    ${weight};
    ${fontSize};
    ${align};
    ${globalStyles.fonts.default};
    display: flex;
    width: auto;
    color: ${({ color }: ITitle): string => color as string};
    text-transform: ${(props: ITitle): string => (props.uppercase ? 'uppercase' : 'none')};
`;

const Title: React.FC<ITitle> = ({
    children,
    color = colors.lightText,
    fontSize = FontSizeTypes.default,
    weight = WeightTypes.default,
    position,
    tagName = TitleTags.default,
    ...props
}: ITitle): ReactElement => {
    return (
        <StyledTitle color={color} fontSize={fontSize} weight={weight} position={position} as={tagName} {...props}>
            {children}
        </StyledTitle>
    );
};

export { Title };
