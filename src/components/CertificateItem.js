import React from 'react'


function CertificateItem({image,name}) {
  return (
    <div className="certificateItem">
        <div style={{ backgroundImage: `url(${image})`}} className="bgImage"></div>
        <h1>{name}</h1>
    </div>
  )
}

export default CertificateItem