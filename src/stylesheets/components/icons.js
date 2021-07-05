import styled from 'styled-components';

const Circle = styled.div`
  width: ${props => props.size+"px" || "75px"};
  height: ${props => props.size+"px" || "75px"};
  border-radius: 50%;
  background-color: ${props => props.color || "black"};
  font-size: ${props => (props.size/4)+"px" || "75px"};
  color: ${props => props.textColor || "black"};
  text-align: center;
  line-height: ${props => props.size+"px" || "75px"};
`;

const IconText = styled.div`
  position: relative;
  h1 {
    position: absolute;
    top: 0;
    margin: 0;
    left: ${props => props.moveRight+"px" || "0"};
    text-align: center;
    line-height: ${props => (props.size-props.moveUp)+"px" || "75px"};
    width: ${props => props.size+"px" || "75px"};
    color: ${props => props.textColor || "black"};
    font-size: ${props => (props.size/5.5)+"px" || "75px"};
  }
`;

export {Circle, IconText};