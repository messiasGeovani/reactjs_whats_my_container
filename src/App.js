import React from 'react';

import {
  Container,
  ContentWrapper,
  Title,
  SubTitle,
  FindButton,
  FindIcon,
  FooterWrapper,
  ReactAsset,
  DockerAsset
} from './styles'

function App() {
  return (
    <Container>

      <ContentWrapper>
        <div>
          <Title>
            What's My Container?
          </Title>
          <SubTitle>
            Find out which container you are accessing this app from...
          </SubTitle>
        </div>
        <FindButton>
          <FindIcon /> Find it!
        </FindButton>
      </ContentWrapper>

      <FooterWrapper>
        <ReactAsset />
        <DockerAsset />
      </FooterWrapper>
      
    </Container>
  );
}

export default App;
