import React, { Component } from 'react'
import BTHeader from './BTHeader'
import BTCarousel from './BTCarousel'
import BTLaptop from './BTLaptop'
import BTPromotion from './BTPromotion'
import BTSmartphone from './BTSmartphone'

export default class BaiTapLayout extends Component
{
    render()
    {
        return (
            <div>
                <BTHeader />
                <BTCarousel />
                <BTSmartphone />
                <BTLaptop />
                <BTPromotion />
            </div>
        )
    }
}
