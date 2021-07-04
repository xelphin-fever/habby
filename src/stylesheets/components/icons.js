import styled from 'styled-components';

const Circle = styled.div`
  width: ${props => props.size || "75px"};
  height: ${props => props.size || "75px"};
  border-radius: 50%;
  background-color: ${props => props.color || "black"};
`;


export {Circle};