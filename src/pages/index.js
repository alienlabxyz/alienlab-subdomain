import React from 'react'

const IndexPage = () => {
  const url = window.location.host;
  const parsedUrl = url.split('.');
  const [ subdomain, domain, type ] = parsedUrl;
  const checkLength = url.includes('localhos') ? 2 : 3;
  
  if (parsedUrl.length < checkLength) {
    return (
      <div style={{ textAlign: 'center', paddingTop: '200px' }}>
        <h1 style={{ fontWeight: 100 }}>Looks like you are not looking for a specific team, do you?<br /><br />o_O</h1>
      </div>
    )
  }
  return (
    <div style={{ textAlign: 'center', paddingTop: '200px' }}>
      <h1 style={{ fontWeight: 100 }}>Hello and welcome to <span style={{ fontWeight: 800 }}>{subdomain}</span> team {domain === 'dev' ? 'on Development server' : ''}<br /><br /> ^_^</h1>
    </div>
  )
}

export default IndexPage
