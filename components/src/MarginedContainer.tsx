import {array, element, node, oneOfType} from 'prop-types'
import React from 'react'

export const MarginedContainer = (props:any)=>(
    <div className= {`container ${props.className}`}>
      {props.children}
    </div>
  )

MarginedContainer.propTypes = {
  children: oneOfType([array, node, element]),
}
