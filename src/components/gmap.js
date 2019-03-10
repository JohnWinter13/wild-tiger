import React from 'react'

const Iframe = () => (   
  <div style={{textAlign: 'center'}}>          
    <iframe title={'Google Map'} src={'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2791.1855055112587!2d-122.50450668403533!3d45.60691597910297!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5495bb495938b5b7%3A0xa3e862fb601c0350!2sWild+Tiger!5e0!3m2!1sen!2sca!4v1552156501443'}
      width={'100%'} height={400} frameBorder={0} style={{border: 0}}/>         
  </div>
)

const GMap = () => (
  <Iframe/>
)

export default GMap
