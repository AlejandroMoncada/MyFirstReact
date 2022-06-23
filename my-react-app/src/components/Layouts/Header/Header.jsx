import React from 'react'
import { LogoTipo } from "../../UI/LogoTipo/LogoTipo"
import { NavegacionInicio } from "../../UI/NavegacionInicio/NavegacionInicio"
import Icon from "../../../Images/react.png"

export const Header = ( ) => {
  return (
    <header >
      <LogoTipo recurso={Icon} estilo="logo" textoAlternativo="Icono" />
      <NavegacionInicio estilo="nav"/>
    </header>
  )
}
