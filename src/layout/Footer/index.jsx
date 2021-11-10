import React from 'react'

import { useSelector } from 'react-redux'

import './style.scss'

const Footer = () => {

  const store = useSelector((s) => s.user.selected3)
  console.log('store', store)

  return (
    <div className="l_footer__wrapper">
      Hero 20{store.year} Copyright © Todos los derechos reservados
    </div>
  )
}

export default Footer
