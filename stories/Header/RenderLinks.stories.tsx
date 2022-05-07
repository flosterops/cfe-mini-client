import styled from 'styled-components';
import { colors } from 'helpers/colors';
import { Meta, Story } from '@storybook/react';
import { withNextRouter } from 'storybook-addon-next-router';
import { withGlobalStyle } from '../withGlobalStyle';
import { IRenderLink, RenderLinks } from 'widgets/RenderLinks';
import React, { ReactElement } from 'react';
import config from 'widgets/BaseLayout/config.json';
import { IHeaderLink } from 'models/headerLinks.model';

const Wrapper = styled.ul`
    background: ${colors.dark};
    height: 60px;
`;

const meta: Meta = {
    title: 'Header/Render Links',
    decorators: [withNextRouter({ pathname: '/' }), withGlobalStyle],
};
export default meta;
const Template: Story<IRenderLink> = (args: IRenderLink): ReactElement => (
    <Wrapper>
        <RenderLinks {...args} />
    </Wrapper>
);

const links = config as IHeaderLink[];

export const Global = Template.bind({});
Global.args = {
    config: links,
};

export const GameRelated = Template.bind({});
GameRelated.args = {
    channel: 'rift',
    config: links,
};
