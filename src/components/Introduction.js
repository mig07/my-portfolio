import './Introduction.css'
import Jumbotron from 'react-bootstrap/Jumbotron'

export default function Introduction() {
    return (
        <Jumbotron style={{'background':'none'}}>
            <div className='header-container'>
                <h1 className='header-title'>Hello World!</h1>
                <h1 className='header-title'>I'm Miguel Luís</h1>
                <h3 className='header-subtitle'>I'm a software engineer and a MSc computer engineering student</h3>
                <h4 className='header-subtitle'>Welcome to my web portfolio!</h4>
            </div>
        </Jumbotron>
    )
}