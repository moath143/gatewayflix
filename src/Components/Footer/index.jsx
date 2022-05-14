import React from 'react'
import { Container, Typography } from './../../Theme/styles';
import { SectionInfo, FooterSection } from "./styleFoote";

const Footer = () => {
  return (
    <FooterSection>
      <Container>
        <SectionInfo>
          <Typography size={32} weight={500} height={30}>
            Gatewayflix
          </Typography>
          <Typography size={16} weight={400} height={32}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
            voluptate facere consequuntur veritatis nesciunt, provident
          </Typography>
        </SectionInfo>
      </Container>
    </FooterSection>
  );
}

export default Footer