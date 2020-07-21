
import React from 'react'
import $ from 'jquery'

export const withShowMobile = (Component:any)=>{
    const windowWidth = $(window).width();
    const shouldHide = windowWidth! > 900;

    return (
        shouldHide ?
        ()=>(<div></div>):
        Component
    )
}