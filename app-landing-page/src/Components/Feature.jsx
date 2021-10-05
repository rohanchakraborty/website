import React from 'react';
import FeatureBox from './FeatureBox';
import featureImage0 from '../images/feature_1.png';
import featureImage1 from '../images/feature_2.png';
import featureImage2 from '../images/feature_3.png';
function Feature(){
    return (
        <div id = 'features'>
           <div className='a-container'>
               <FeatureBox image={featureImage0} title='REQ' />
               <FeatureBox image={featureImage1} title='DEV' />
               <FeatureBox image={featureImage2} title='Test' />
           </div>
        </div>
    )
}

export default Feature;
