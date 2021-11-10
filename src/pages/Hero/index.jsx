import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'

import { useSelector, useDispatch } from 'react-redux'
import { actionFooter } from '../../actions/user/select'

const ACCESS_TOKEN = '3875372609247663'
const DOMAIN = 'https://www.superheroapi.com/api.php/'

const Hero = () => {

  const dispatch = useDispatch()
   
  const [id, setId] = useState(null)

  const [year, setYear] = useState('')

  const history = useHistory()

  // useEffect(() => {
  //   getHeros()
  // }, [])
  // ENDPOINT - API - SERVICIO - PATH
  const getHeros = async () => {

    try {
      const response = await fetch(`${DOMAIN}${ACCESS_TOKEN}/${id}`)
      // , {
      //   body: {
      //     nombre: 'Juan',
      //     edad: 20,
      //     ciudad: 'Lima'
      //   },
      //   headers: {},
      //   method: 'POST',
      // }
      
      const hero = await response.json()
      history.push(`/hero/${hero.id}?hero=${hero.name}&image=${hero.image.url}&full-name=${hero.biography['full-name']}`)
      console.log('response', hero)
    } catch (error) {
      console.log('error', error)
    }
  }

  const handleChange = (e) => {
    const { target : { value } } = e
    setId(value)
  }

  const handleChangeYear = (e) => {
    const { target : { value } } = e
    setYear(value)
  }

  const insertarYear = (e) => {
    e.preventDefault()
    dispatch(actionFooter(year))
  }

  console.log('value', id)
  return (
    <div>
      <input type="text" onChange={handleChange} /><br />
      <button onClick={getHeros} >Buscar</button><br /><br />
      <input type="text" onChange={handleChangeYear} /><br />
      <button onClick={insertarYear}>Insertar</button><br /><br />
      Hero
    </div>
  )
}

export default Hero
