import styled from 'styled-components';

const HeaderBar = styled.div`
  position: fixed;
  top: 60px;
  left: 0px;
  height: 60px;
  width: 100vw;
  background: black;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  z-index: 1;

  span {
    height: 60px;
    margin: 0 0 0 20px;
    font-size: 1.5em;
    font-weight: bold;
    color: white;
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;
  }
`;

export default HeaderBar;