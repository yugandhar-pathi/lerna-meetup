import React from 'react';

const FancyButton = (props) => {
  return (
    <button onclick={props.onclick}>{props.label}</button>
  )
}

export default FancyButton;