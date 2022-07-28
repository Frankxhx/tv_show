import React from 'react'

const About = () => {
  return (
    <div className='about'>
      <h3 className='about_title'>ABOUT PAGE</h3>
      <div className='about_info'>
        <p>  TV Show Search App (v1.0)</p>
        <div>
          <p>Things Learnt From App Build:</p>
          <ul>
            <li>React(creat-react-app)</li>
            <li>Basic CSS & HTML</li>
            <li>Axios AJAX request</li>
            <li>TVMAZE API (https://www.tvmaze.com/api)</li>
            <li>React Router</li>
            <li>React Context API</li>
            <li>React Hook</li>
            <li>Deploying to Netlify</li>
          </ul>
        </div>
      </div>
    </div>
    )
}

export default About