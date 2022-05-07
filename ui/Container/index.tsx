import React, { FunctionComponent, ReactElement, ReactNode, ReactNodeArray } from 'react';
import styled from 'styled-components';
import { Column } from 'ui';
import { ILayout, LayoutTags } from 'ui/Layout';
import { AlignItemsTypes } from 'models/layout.model';
import { constants } from 'helpers/constants';

export interface IContainer extends ILayout {
    children: ReactNode | ReactNodeArray;
    color?: string;
    padding?: string;
}

const StyledContainer = styled(Column)<ILayout>`
    max-width: ${constants.maxWidthWithPadding};
`;

const Container: FunctionComponent<IContainer> = ({
    children,
    color = '',
    padding = '',
    ...props
}: IContainer): ReactElement => {
    return (
        <Column bg={color} tagName={LayoutTags.section} {...props} ai={AlignItemsTypes.center}>
            <StyledContainer
                componentHeight={props.componentHeight}
                bg={color}
                tagName={LayoutTags.section}
                padding={padding}
            >
                {children}
            </StyledContainer>
        </Column>
    );
};

export { Container };
