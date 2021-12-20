import React from 'react'

import {Wrapper} from "./Button.styles"

const Button = ({text, callback}) =>(
    <Wrapper type="button" onClick={callback}>
        <p>{text}</p>
        </Wrapper>
)


export default Button