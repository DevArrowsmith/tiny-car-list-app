import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import useOnClickOutside from '../../hooks/hooks';
import Burger from './Burger';
import Menu from './Menu';

const BurgerMenuContainer = styled.div`
  height: 50px;
  width: 60px;
`;

const BurgerMenu = () => {
  const [open, setOpen] = useState(false);
  const node = useRef();
  useOnClickOutside(node, () => setOpen(false));

  return (
    <BurgerMenuContainer ref={node}>
      <Burger open={open} setOpen={setOpen} />
      <Menu open={open} />
    </BurgerMenuContainer>
  );
};

export default BurgerMenu;
