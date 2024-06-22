import React from 'react'
import './AboutUs.css'
import { useParams } from 'react-router-dom'
import routesConfig from '../../Routes/routes'
const AboutUs = () => {
  const {id} = useParams()
  const path = `about-us/${id}`
  const content = routesConfig.AboutUs.find(route => route.path === path)
  return (
    <div>{content.content}</div>
  )
}

export default AboutUs