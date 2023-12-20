import type { FC } from 'react';
import { Divider, Image, Stack, useBreakpoint } from '@dev-dodze/ui';
import {
  FacebookIcon,
  GithubIcon,
  LinkedinIcon,
  MailIcon,
  TwitterIcon,
} from '@dev-dodze/icons';
import { PageLayout } from '../../layouts';
import mobileFooterGif from '../../assets/images/mobile-footer.gif';
import {
  ActionLinks,
  Container,
  ContentBlock,
  Description,
  GifHolder,
  SocialLinkWithIcon,
  Title,
} from './styled';

// TODO: parse my live location during on some data.

const location = 'San Francisko';

export const MainPage: FC = () => {
  const isMobile = useBreakpoint('down', 'md');

  return (
    <PageLayout>
      <Container gap={5} justifyContent={isMobile ? 'flex-start' : 'flex-end'}>
        <ContentBlock gap={10}>
          <Title variant={isMobile ? 'headerMD' : 'headerLG'}>
            Software Engineer
          </Title>
          <Stack gap={3}>
            <Description variant="textLG">
              — Hi! My name is Ivan Tolstov.
            </Description>
            <Description variant="textLG">
              — I Like AI, robots, videogames and coding cool stuff with JS.
            </Description>
            <Description variant="textLG">{`— Currently living in ${location}.`}</Description>
            <Description variant="textLG">
              — Drop me a line if you want to hire me.
            </Description>
          </Stack>
        </ContentBlock>
        <Divider />
        <ActionLinks direction="row" gap={6}>
          <SocialLinkWithIcon
            target="_blank"
            hoverColor="#0077B5"
            to="https://www.linkedin.com/in/tolstov-ivan/"
          >
            <LinkedinIcon />
          </SocialLinkWithIcon>
          <SocialLinkWithIcon
            target="_blank"
            hoverColor="#6cc644"
            to="https://github.com/easypizi"
          >
            <GithubIcon />
          </SocialLinkWithIcon>
          <SocialLinkWithIcon
            target="_blank"
            hoverColor="#8b9dc3"
            to="https://www.facebook.com/tolstov.ivan"
          >
            <FacebookIcon />
          </SocialLinkWithIcon>
          <SocialLinkWithIcon
            target="_blank"
            hoverColor="#1DA1F2"
            to="https://twitter.com/javascriptise"
          >
            <TwitterIcon />
          </SocialLinkWithIcon>
          <SocialLinkWithIcon
            target="_blank"
            hoverColor="#f2a60c"
            to="mailto:tolstov.career@gmail.com"
          >
            <MailIcon />
          </SocialLinkWithIcon>
        </ActionLinks>
        {isMobile && (
          <GifHolder>
            <Image src={mobileFooterGif} />
          </GifHolder>
        )}
      </Container>
    </PageLayout>
  );
};
