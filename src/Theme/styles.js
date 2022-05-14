import styled from "styled-components";


export const flex = (flex, justify, aligns, direction, wrap) => {
    return `
        display: ${flex};
        justify-content: ${justify};
        align-items: ${aligns};
        flex-direction: ${direction};
        flex-wrap: ${wrap};
    `
}

export const pixelToRem = (pixel) => {
    return `${pixel / 16}rem`
}



export const Container = styled.div`
  width: 85%;
  margin: 0 auto;
`;

export const Typography = styled.p`
  color: ${(props) => props.color};
  font-size: ${(props) => pixelToRem(props.size)};
  font-weight: ${(props) => props.weight};
  line-height: ${(props) => pixelToRem(props.height)};
  text-transform: ${(props) => props.transform};
`;




