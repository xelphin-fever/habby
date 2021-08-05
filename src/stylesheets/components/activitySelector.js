import styled from 'styled-components';
import {theme} from '../../helper/constants'

const Selector = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  position: absolute;
  top: 0;
  right: ${props => props.size ? "-"+(props.size - 100)+"px" : "-200px"};
  z-index: 100;
  box-shadow: 5px 5px #c2c2c29d;
  border: 1px #c2c2c29d solid;
  transition: 0.15s linear;
  .activitySelector-activity {
    display: flex;
    flex-direction: row;
    align-items: center;
    h2 {
      color: ${theme.dark};
      display: inline;
      margin-left: 14px;
      padding: 10px;
      font-size: ${props => props.size ? (props.size/7)+"px" : "35px"};
    }
  }
  &:hover {
    transform: scale(1.03) translate(-3px,-3px);
    box-shadow: 8px 8px #c2c2c29d;
  }
`;


export default Selector;