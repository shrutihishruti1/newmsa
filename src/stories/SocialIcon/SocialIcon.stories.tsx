import React from 'react';
import githubLogo from "../../../src/stories/assets/logos/github_logo.svg"
import facebookLogo from "../../../src/stories/assets/logos/facebook_logo.svg"
import discordLogo from "../../../src/stories/assets/logos/discord_logo.svg"
import youtubeLogo from "../../../src/stories/assets/logos/youtube_logo.svg"
import { Story, Meta } from '@storybook/react';

import { SocialIconProps, FooterSocialIcon } from './SocialIcon';



export default {
    title: 'UI Components/SocialIcon',
    component: FooterSocialIcon,
} as Meta;



const Template: Story<SocialIconProps> = (args) => (

    <div style={{ backgroundColor: "black" }}>
        <FooterSocialIcon {...args} />
    </div>
)
export const GithubIcon = Template.bind({});
GithubIcon.args = {
    name: "GitHub",
    url: "https://github.com/nzmsa",
    logo: githubLogo
};


export const FacebookIcon = Template.bind({});
FacebookIcon.args = {
    name: "Facebook",
    url: "https://www.facebook.com/studentaccelerator/",
    logo: facebookLogo
};
export const DiscordIcon = Template.bind({});
DiscordIcon.args = {
    name: "Discord",
    url: "https://discord.gg/c4Y5SAZ",
    logo: discordLogo
};

export const YoutubeIcon = Template.bind({});
YoutubeIcon.args = {
    name: "YouTube",
    url: "https://www.youtube.com/channel/UCCegNuS_AZjK-P3ZMN3JXNw",
    logo: youtubeLogo
};
