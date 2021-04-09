import './Introduction.css'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Particles from 'react-particles-js';

export default function Introduction() {
    return (
        <div className="header-container">
            <div className="header-text-container">
                <h1 className='header-title'>Hello World!</h1>
                <h1 className='header-title'>I'm Miguel Luís</h1>
                <h3 className='header-subtitle'>I'm a software engineer and a MSc computer engineering student</h3>
                <h4 className='header-subtitle'>Welcome to my web portfolio!</h4>
            </div>
            {/* <div className="wrapper">
                <Particles
                    params={{
                        "particles": {
                            "number": {
                                "value": 50
                            },
                            "size": {
                                "value": 7
                            },
                            "interactivity": {
                                "events": {
                                    "onhover": {
                                        "enable": true,
                                        "mode": "repulse"
                                    }
                                }
                            },
                            "links": {
                                "color": "#000000"
                            }
                        },
                    }}                
                />
            </div> */}
        </div>
    )
}