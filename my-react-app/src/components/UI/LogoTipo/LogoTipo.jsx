import React from 'react'

export const LogoTipo = ({recurso, textoAlternativo, estilo}) => {
  return (
    <img  classname={estilo} src={recurso} alt={textoAlternativo} />
  )
}
