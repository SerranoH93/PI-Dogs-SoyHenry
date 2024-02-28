import styles from "./LandingPage.module.css"
import { Link } from 'react-router-dom'

const LandingPage = () => {
    return (
        <div className={styles.landingPageContainer}>
                <img className={styles.dogsImage} src="https://www.mydogsname.com/wp-content/uploads/2022/01/boy-dog-names.jpg" alt="Many dogs" />
                <h1>Welcome to the biggest Dog library in the world</h1>
                <h2>You can learn about the different breeds and their different characteristics</h2>
                <p>Explore a wide variety of information about dogs</p>
                <Link to='/home'><button >LET'S GO!</button></Link>
        </div>
    )
};

export default LandingPage;