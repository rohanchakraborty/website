import React from 'react'

function About(props){
    return(
        <div id='about'>
            <div className='about-text'>
                <h2>{props.title}</h2>
                <p>Paragraph.....Paragraph....Paragraph....Paragraph....Paragraph....
                    Paragraph....Paragraph....Paragraph....Paragraph....Paragraph
                    ....Paragraph....Paragraph....Paragraph....Paragraph....
                    Paragraph....Paragraph....Paragraph....
                    </p>
                <button>{props.button}</button>
            </div>
            <div className='about-image'>
                <image src={props.image} alt='' />
            </div>
            
        </div>
    )
}

export default About;