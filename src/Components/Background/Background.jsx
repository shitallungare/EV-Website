import './Background.css'
import video1 from '../../Assets/video1.mp4'
import image1 from '../../Assets/image1.png'
import image2 from '../../Assets/image2.png'
import image3 from '../../Assets/image3.png'

const Background = ({ platStatus, heroCount }) => {
  // Check if video should be displayed
  if (platStatus) {
    return (
      <video className='background fade-in' autoPlay loop muted>
        <source src={video1} type='video/mp4' />
      </video>
    );
  }

  // Handle the background image selection based on heroCount
  const images = [image1, image2, image3];
  const imageAltText = ["Background 1", "Background 2", "Background 3"];

  // If heroCount is out of bounds, default to 0
  const selectedImage = images[heroCount] || images[0];
  const selectedAltText = imageAltText[heroCount] || imageAltText[0];

  return <img src={selectedImage} className='background fade-in' alt={selectedAltText} />;
}

export default Background;
