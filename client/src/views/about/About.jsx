import NavBar from "../../components/navbar/NavBar";
import styles from "./About.module.css"


const About = () => {
    return (
        <div>
            <NavBar />
            <div className={styles.textContainer}>
                <p>This project was developed to put into practice the knowledge acquired during the Soy Henry bootcamp.
                    To carry out the project the following technologies were used:
                    React.js, Redux, Express, Axios, Sequelize, and PostgrestSQL</p>
            </div>
        </div>
    )
};

export default About;