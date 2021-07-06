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
`;


export default Bar;