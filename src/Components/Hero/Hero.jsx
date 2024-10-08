import './Hero.css'
import arrow_btn from '../../Assets/arrow_btn.png'
import play_icon from '../../Assets/play_icon.png' 
import pause_icon from '../../Assets/pause_icon.png'

const Hero = ({ heroData, setHeroCount, heroCount, setPlayStatus, playStatus }) => {
  return (
    <div className='hero'>
      <div className='hero-text'>
        {/* Correctly accessing heroData based on heroCount */}
        <p>{heroData[heroCount].text1}</p>
        <p>{heroData[heroCount].text2}</p>
      </div>

      <div className='hero-explore'>
        <p>Explore the feature</p>
        <img src={arrow_btn} alt="Explore more" /> {/* Added meaningful alt */}
      </div>

      <div className='hero-dot-play'>
        {/* Dot navigation for heroCount */}
        <ul className='hero-dots'>
          <li onClick={() => setHeroCount(0)} className={heroCount === 0 ? "hero-dot orange" : "hero-dot"}></li>
          <li onClick={() => setHeroCount(1)} className={heroCount === 1 ? "hero-dot orange" : "hero-dot"}></li>
          <li onClick={() => setHeroCount(2)} className={heroCount === 2 ? "hero-dot orange" : "hero-dot"}></li>
        </ul>

        {/* Play/Pause toggle button */}
        <div className='hero-play'>
          <img 
            onClick={() => setPlayStatus(!playStatus)} 
            src={playStatus ? pause_icon : play_icon} 
            alt={playStatus ? "Pause video" : "Play video"} 
          />
          <p>See the video</p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
