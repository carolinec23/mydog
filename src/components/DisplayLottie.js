import React from 'react';
import Lottie from 'lottie-react';

class DisplayLottie extends React.Component {
    render() {
        return (
            <Lottie 
                animationData={this.props.animation} 
                autoplay={true}
                loop={true}
            />
        );
    }
}

export default DisplayLottie;