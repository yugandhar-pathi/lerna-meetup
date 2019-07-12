import React from 'react';
import { FancyButton } from 'basic-components'

const FancyHeader = (props) => {
  return (
    <div>
      <p> This is a fancy header</p>
      <FancyButton label="Logout"/>
    </div>
  )
}

export default FancyHeader;