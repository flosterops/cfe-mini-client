import React, { ReactElement } from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { withNextRouter } from 'storybook-addon-next-router';
import { colors } from 'helpers/colors';
import styled from 'styled-components';
import { ListItem } from 'widgets/RenderLinks/ListItem';
import { withGlobalStyle } from 'stories/withGlobalStyle';
import { IHeaderLink } from 'models/headerLinks.model';

const Wrapper = styled.ul`
    background: ${colors.dark};
    height: 60px;
`;

const meta: Meta = {
    title: 'Header/List Item',
    decorators: [withNextRouter({ pathname: '/test' }), withGlobalStyle],
};
export default meta;
const Template: Story<IHeaderLink> = (args: IHeaderLink): ReactElement => (
    <Wrapper>
        <ListItem {...args} />
    </Wrapper>
);

export const Active = Template.bind({});
Active.args = {
    to: '/test',
    text: 'Test',
};

export const Inactive = Template.bind({});
Inactive.args = {
    to: '/inactive',
    text: 'Inactive',
};
