import { Link } from 'react-router-dom';
import styles from './NavBar.module.css'


const NavBar = ({ handleRefresh }) => {
    return (
        <div className= {styles.navbarContainer}>
            <div className='image-container'>
                <Link to='/home'>
                <img src="/img/logo-page.png" alt="logo" />
                </Link>
            </div>
            <div className= {styles.buttonContainer}>
                <Link to='/home'>
                    <button onClick={handleRefresh}>HOME 🏠</button>
                </Link>
                <Link to='/createDog'>
                    <button>CREATE NEW 🐺</button>
                </Link>
                <Link to='/about'>
                    <button>ABOUT 🧑🏻‍💻</button>
                </Link>
                <Link to='/'>
                    <button>EXIT ❌</button>
                </Link>
            </div>

        </div>
    )
}

export default NavBar;