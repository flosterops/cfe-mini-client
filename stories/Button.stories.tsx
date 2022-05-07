import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Button, IButton, IButtonVariant } from 'ui/Button';
import { ComponentSizesTypes } from '../models/layout.model';

export default {
    title: 'Example/Button',
    component: Button,
    argTypes: {
        variant: {
            control: {
                type: 'select',
                options: [IButtonVariant.contained, IButtonVariant.text, IButtonVariant.outlined],
            },
        },
        componentSize: {
            control: {
                type: 'select',
                options: [
                    ComponentSizesTypes.auto,
                    ComponentSizesTypes.default,
                    ComponentSizesTypes.full,
                    ComponentSizesTypes.l,
                    ComponentSizesTypes.m,
                    ComponentSizesTypes.s,
                ],
            },
        },
    },
} as Meta;
const Template: Story<IButton> = (args) => <Button {...args}>{args.children}</Button>;

export const Primary = Template.bind({});
Primary.args = {
    children: 'Button',
};

export const Disabled = Template.bind({});
Disabled.args = {
    children: 'disabled',
    disabled: true,
};
