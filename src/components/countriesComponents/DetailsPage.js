import React from 'react'

const DetailsPage = ({details}) => {
    const components = details.data.components;
    const title = details.ctryinfo.ctryname;

    const items = Object.keys(components).map((key) => {
        return <li key={key}>{key}: {components[key]}</li>
    })

  return (
    <div><p>{title}</p>
    <ul>{items.map((item)=>(item))}</ul>
    </div>
  )
}

export default DetailsPage