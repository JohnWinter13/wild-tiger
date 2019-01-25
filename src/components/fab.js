import React from 'react'
import styled from 'styled-components'
import { FaDownload } from 'react-icons/fa'
import Menu from '../data/menu.pdf'

const FAB = styled.div`
  width: 70px;
  height: 70px;
  background-color: #D79922;
  border-radius: 50%;
  box-shadow: 0 6px 10px 0 #666;
  transition: all 0.1s ease-in-out;
 
  font-size: 50px;
  color: white;
  text-align: center;
  line-height: 70px;

  position: fixed;
  right: 50px;
  bottom: 70px;

  @media (max-width: 800px) {
    right: 30px;
    bottom: 130px;
  }

  :hover {
    box-shadow: 0 6px 14px 0 #666;
    transform: scale(1.05);
  }
`

const Fab = () => (
  <a href={Menu} target="_blank" rel="noopener noreferrer">
    <FAB>
      <FaDownload size={42}/>
    </FAB>
  </a>
)

export default Fab