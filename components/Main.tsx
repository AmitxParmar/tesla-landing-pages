import React from 'react'
import Section from './Section'

type Props = {}

const Main = (props: Props) => {
    return (
        <div className='snap snap-y snap-mandatory'>
            <Section
                title="Test"
                description="Description"
                backgroundImg="model-y.jpg"
                leftBtnText="left button text"
                rightBtnText="right button text"
                id="model-y"
                slug="model-y"
            />
            <Section
                title="Test"
                description="Description"
                backgroundImg="model-s.webp"
                leftBtnText="left button text"
                rightBtnText="right button text"
                id="model-y"
                slug="model-y"
            />
        </div>
    )
}

export default Main