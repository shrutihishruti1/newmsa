import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Story, Meta } from '@storybook/react';
import  { MSAHeader, MSAHeaderProps } from './MSAHeader';


// export default {
//   title: 'UI Components/MSAHeader',
//   component: MSAHeader,
// } as ComponentMeta<typeof MSAHeader>;

// const Template: ComponentStory<typeof MSAHeader> = () => <MSAHeader  />;

// export const BasicHeader = Template.bind({});

export default {
    title: 'UI Components/MSAHeader',
    component: MSAHeader,
  } as Meta;
  
  const Template: Story<MSAHeaderProps> = (args) => <MSAHeader {...args} />;
  
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
  