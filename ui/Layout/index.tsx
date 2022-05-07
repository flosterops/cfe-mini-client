import React, { ReactElement, ReactNode, ReactNodeArray } from 'react';
import styled, { css } from 'styled-components';
import { AlignItemsTypes, DirectionTypes, ISpaceTypes, JustifyContentTypes } from 'models/layout.model';
import { direction, space, jc, ai } from 'helpers/theme';

export enum LayoutTags {
    div = 'div',
    nav = 'nav',
    main = 'main',
    footer = 'footer',
    header = 'header',
    section = 'section',
    article = 'article',
    ul = 'ul',
    li = 'li',
    default = 'div',
}

export interface ILayout extends ISpaceTypes {
    direction?: DirectionTypes;
    jc?: JustifyContentTypes;
    ai?: AlignItemsTypes;
    tagName?: LayoutTags;
    bg?: string;
    layoutRef?: any;
    componentHeight?: string;
    componentWidth?: string;
    noFlex?: boolean;
    style?: any;
    onClick?: (...args: any) => any;
    hovered?: boolean;
    children?: ReactNode | ReactNodeArray;
    htmlId?: string;
}

const StyledLayout = styled.div<ILayout>`
    ${space};
    display: flex;
    position: relative;
    box-sizing: border-box;
    height: ${(props) => (props.componentHeight ? props.componentHeight : 'auto')};
    width: ${(props) => (props.componentWidth ? props.componentWidth : '100%')};
    background-color: ${(props) => (props.bg ? props.bg : 'transparent')};
    ${direction};
    ${jc};
    ${ai};
    ${(props) =>
        props.noFlex &&
        css`
            width: auto;
        `};
    ${(props) =>
        props.hovered &&
        css`
            cursor: pointer;
            &: hover {
                opacity: 0.8;
            }
        `}
`;

const Layout: React.FC<ILayout> = ({
    direction = DirectionTypes.default,
    jc = JustifyContentTypes.default,
    ai = AlignItemsTypes.default,
    noFlex,
    children,
    componentHeight,
    componentWidth,
    tagName = LayoutTags.default,
    layoutRef,
    htmlId,
    ...props
}: ILayout): ReactElement => {
    return (
        <StyledLayout
            id={htmlId}
            direction={direction}
            jc={jc}
            ai={ai}
            noFlex={noFlex}
            componentHeight={componentHeight}
            componentWidth={componentWidth}
            as={tagName}
            ref={layoutRef}
            {...props}
        >
            {children}
        </StyledLayout>
    );
};

const Row: React.FC<ILayout> = (props: ILayout): ReactElement => {
    const { children } = props;
    return (
        <Layout {...props} direction={DirectionTypes.row}>
            {children}
        </Layout>
    );
};

const Column: React.FC<ILayout> = (props: ILayout): ReactElement => {
    const { children } = props;
    return (
        <Layout {...props} direction={DirectionTypes.column}>
            {children}
        </Layout>
    );
};

export { Row, Column, Layout };
