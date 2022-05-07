import React, { PropsWithChildren, ReactElement } from 'react';
import styled from 'styled-components';
import { Column } from 'ui';
import { ILayout } from 'ui/Layout';
import { createPortal } from 'react-dom';
import { AlignItemsTypes, JustifyContentTypes } from 'models/layout.model';

const StyledModal = styled(Column)<ILayout>`
    position: absolute;
    background: rgba(0, 0, 0, 0.4);
    left: 0;
    top: 0;
`;

const Modal = ({ children }: PropsWithChildren<{}>): ReactElement => {
    const root = document.getElementsByTagName('body')[0];
    return createPortal(
        <StyledModal
            jc={JustifyContentTypes.center}
            ai={AlignItemsTypes.center}
            componentWidth="100%"
            componentHeight="100%"
        >
            {children}
        </StyledModal>,
        root
    );
};

export { Modal };
