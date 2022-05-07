import styled from 'styled-components';
import { colors } from 'helpers/colors';
import { Meta, Story } from '@storybook/react';
import { withNextRouter } from 'storybook-addon-next-router';
import React, { ReactElement } from 'react';
import { Header, IHeader } from 'widgets/Header';
import config from 'widgets/BaseLayout/config.json';
import { withGlobalStyle } from 'stories/withGlobalStyle';
import { IHeaderLink } from 'models/headerLinks.model';

const Wrapper = styled.ul`
    background: ${colors.dark};
    border-bottom: 1px solid ${colors.darkText};
    padding: 0 35px;
`;

const meta: Meta = {
    title: 'Header/Header',
    decorators: [withNextRouter({ pathname: '/' }), withGlobalStyle],
};
export default meta;
const Template: Story<IHeader> = (args: IHeader): ReactElement => (
    <Wrapper>
        <Header {...args} />
    </Wrapper>
);

const links = config as IHeaderLink[];

export const TopHeader = Template.bind({});
TopHeader.args = {
    links,
};
