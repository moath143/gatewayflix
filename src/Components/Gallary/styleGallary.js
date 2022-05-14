import styled from 'styled-components'
import { flex } from './../../Theme/styles';


export const SectionGallary = styled.div`
padding: 50px 0 0 0;
    
`

export const ImageGallary = styled.div`
    ${flex('flex', 'center', 'center')};
    padding: 50px 0;
    img{
        width: 450px;
        height: 300px;
    }
`
