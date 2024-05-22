import './Hero.css'
import white_arrow from '../../assets/white-arrow.png'

const Hero = () => {
  return (
    <div className='hero container'>
        <div className='hero-text'>
            <h2>We Ensure better education for a better world</h2>
            <p>Our cutting-edge curriculum is designed to empower students with the knowledge, skills, and experiences needed to excel in the dynamic field of education</p>
            <button className='btn dark-btn'>Explore More <img src={white_arrow} alt='dark_arrow' /></button>
        </div>
    </div>
  )
}

export default Hero