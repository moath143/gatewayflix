import styled from 'styled-components'
import { flex } from './../../Theme/styles'

export const FooterSection = styled.footer`
  background-color: #2e2e2e;
  padding: 50px;
  color: #fff;
`;

export const SectionInfo = styled.section`
    ${flex('flex', 'space-between', 'center')}
    p{
      width: 50%;
    }
`