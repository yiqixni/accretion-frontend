import Lottie from 'react-lottie';
import AnimationContentLoading from './AnimationContentLoading.json';

const animationOptions = {
    loop: true,
    autoplay: true,
    animationData: AnimationContentLoading,
    rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
    },
};

const LoadingContent = () => {

    return (
        <div>
            <Lottie 
                options={animationOptions} 
                speed={0.5}                
            />
        </div>
    );
};

export default LoadingContent;