import React from 'react'

import { ButtonContainer, ButtonContainerRemover } from './styles';

function Button({onClick}) {
  return (
    <ButtonContainer onClick={onClick}>
       Buscar
    </ButtonContainer>
  )
}

export function ButtonRemover({onClick}) {
  return (
    <ButtonContainerRemover onClick={onClick}>
       Remover
    </ButtonContainerRemover>
  )
}


export default Button