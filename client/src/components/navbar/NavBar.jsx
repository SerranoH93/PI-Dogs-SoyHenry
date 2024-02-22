import { Link } from 'react-router-dom';
import styles from './NavBar.module.css'


const NavBar = ({handleRefresh}) => {
    return (
        <div>
            <Link to='/home'>
                <button onClick={handleRefresh}>HOME</button>
            </Link>
            <Link>
                <button>CREATE NEW</button>
            </Link>
            <Link>
                <button>ABOUT</button>
            </Link>
            <Link to='/'>
                <button>EXIT ❌</button>
            </Link>
        </div>
    )
}

export default NavBar;