// ServicesContent.js
import React from 'react';
import "./ServicesContent.css";
import { useParams } from 'react-router-dom';
import routesConfig from '../../Routes/routes';

const ServicesContent = () => {
  const { id } = useParams();
  const path = `services/${id}`;
  let content = routesConfig.services.find(route => route.path === path);
  content = content.content
  console.log(id)

  return (
    <div>
      {content ? (
        <div>
          <h1>{content.heading}</h1>
          <h2>hi</h2>
        </div>
      ) : (
        <h1>Content not found</h1>
      )}
    </div>
  );
};

export default ServicesContent;
