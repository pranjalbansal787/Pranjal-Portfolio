import React from 'react'
import Pranjal_Resume from '../../Assets/Pranjal_Resume.pdf'

export const CTA = () => {
  return (
    <div className='cta'>
      <a href={Pranjal_Resume} download className='btn'> Download CV</a>
      <a href="#contact" className='btn btn-primary'>Lets Talk</a>
    </div>
  )
}
export default CTA;