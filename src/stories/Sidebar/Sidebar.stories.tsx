
import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Sidebar } from './Sidebar';

export default {
    title: 'UI Components/Sidebar',
    component: Sidebar,
} as Meta;

const Template: Story = () => <Sidebar />;

export const LoggedIn = Template.bind({});
LoggedIn.args = {
    user: {
        __typename: "Viewer",
        id: "1",
        name: "John Doe",
        gitHub: "johndoe",
        imageURI: "http://4.bp.blogspot.com/-YQjNdoRS0CE/T0-f8-T0gtI/AAAAAAAAEtY/QYNFPqJMgbw/s1600/Spring-Flowers-Wallpapers-3.jpeg"
    },
};

export const LoggedOut = Template.bind({});
LoggedOut.args = {
};