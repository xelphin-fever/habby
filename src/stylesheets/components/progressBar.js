import styled from 'styled-components';
import {theme} from '../../helper/constants'

const Bar = styled.div`
  position: relative;
  .progressBar-back{
    width: ${props => props.width ? props.width+"px" : "380px"};
    height: 40px;
    background-color: ${theme.dark};
  }
  .progressBar-front{
    width: ${props => props.progress ? props.progress+"px" : "150px"};
    height: 40px;
    background: ${props => props.color ? props.color : theme.color2};
    position: absolute;
    top: 0;
  }
  transition: 0.15s linear;
  &:hover {
    transform: scale(1.03) translate(-3px,-3px);
    box-shadow: 8px 8px #c2c2c29d;
  }
`;


export default Bar;