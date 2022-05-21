import styled from 'styled-components'
import { flex } from './../../Theme/styles'

export const FooterSection = styled.footer`
  background-color: ${props => props.theme.footer.background};
  padding: 50px;
  color: #fff;
  box-shadow: ${props => props.theme.footer.shadow};
`;

export const SectionInfo = styled.section`
    ${flex('flex', 'space-between', 'center')}
    p{
      width: 50%;
    }
`