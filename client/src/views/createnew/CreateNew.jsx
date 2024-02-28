import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getTemperaments, postNewDog } from '../../redux/actions';
import NavBar from '../../components/navbar/NavBar';
import validations from '../../utils/validations.js';
import styles from './CreateNew.module.css';



function CreateNew() {   
    const dispatch = useDispatch(); 
    const temperaments = useSelector(state => state.temperaments); //* Temperaments obtained   

    const [dogNewTemperaments, setDogNewTemperaments] = useState([]); //* Initialized where to save the new temperaments

    console.log(temperaments);
    console.log(dogNewTemperaments);

    const [newDog, setNewDog] = useState({ //* New dog initialize
        name: '',
        image: '',
        height: '',
        weight: '',
        life_span: '',
        temperament: []
    })

    const [errors, setError] = useState({ //* Errors initialize
        name: '',
        image: '',
        height: '',
        weight: '',
        life_span: '',
        temperament: ''
    })

    useEffect(() => {         
        dispatch(getTemperaments());                
    }, [dispatch])

    const handleChange = (event) => {
        setNewDog({
            ...newDog,
            [event.target.name]: event.target.value
        })
        setError(validations({
            ...newDog,
            [event.target.name]: event.target.value
        }))
    }

    const handleSelectChange = (event) => {
        event.preventDefault()
        const { value } = event.target
        if(dogNewTemperaments.includes(value)) {
            const newArray = dogNewTemperaments.filter(option => option !== value)
            setDogNewTemperaments(newArray);            
        } else {
            setDogNewTemperaments(() => {
                const newTemp = temperaments.find(a => a.id == value)
                const updateTemperaments = [...dogNewTemperaments, newTemp]
                const arrayTemperamentsDog = updateTemperaments.map(a => a.id)
                setNewDog(() => ({
                    ...newDog,
                    temperament: arrayTemperamentsDog
                }))
                console.log(updateTemperaments)
                return updateTemperaments
            })
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(postNewDog(newDog));
        setNewDog({
            name: '',
            image: '',
            height: '',
            weight: '',
            life_span: '',
            temperament: []
        })
    }

    return (
        <div>
            <NavBar/>
            <div className={styles.createNewContainer}>
            <h2>Create a new dog breed.</h2>
            <form action=''>
                <div className={styles.nameContainer}>
                    <label>Name:</label>
                    <input 
                        type='text'
                        name='name'
                        value={newDog.name}
                        onChange={handleChange} 
                        placeholder='Enter a new name' />
                    <p className={styles.errorShower}>{errors.name}</p>                
                </div> 

                <div className={styles.imageContainer}>
                    <label> URL image:</label>
                    <input 
                        type='text'
                        name='image'
                        value={newDog.image}
                        onChange={handleChange}
                        placeholder='Enter a URL image' />
                    <p className={styles.errorShower}>{errors.image}</p>                
                </div>  

                <div className={styles.heightContainer}>
                    <label>Height diference:</label>
                    <input 
                        type='text'
                        name='height'
                        value={newDog.height}
                        onChange={handleChange}
                        placeholder='Enter a Height diference' />
                    <p className={styles.errorShower}>{errors.height}</p>                
                </div> 

                <div className={styles.weightContainer}>
                    <label>Weight diference:</label>
                    <input 
                        type='text'
                        name='weight'
                        value={newDog.weight}
                        onChange={handleChange}
                        placeholder='Enter a Weight diference'/>
                    <p className={styles.errorShower}>{errors.weight}</p>                
                </div>

                <div className={styles.lifeSpanContainer}>
                    <label>Life Span:</label>
                    <input 
                        type='text'
                        name='life_span'
                        value={newDog.life_span}
                        onChange={handleChange}
                        placeholder='Enter a Weight diference' />
                    <p className={styles.errorShower}>{errors.life_span}</p>
                </div>

                <div className={styles.selectTemperaments}>
                    <p>Select temperaments:</p>
                    <select multiple  onChange={handleSelectChange}>
                        <option className='option' value=''>Select a temperament</option>
                        {temperaments.map((temperament) => (
                            <option className='option' key={temperament.id} value={temperament.id}>{temperament.name}</option>                            
                        ))}
                    </select>                  
                </div> 
                
                <div className={styles.showSelectTemperaments}>
                    <p>Selected options:</p>   
                    <div className={styles.temperamentsSelectedButton}>
                        {dogNewTemperaments.map((temperament, index) => (
                            <button key={index}>{temperament.name}</button>
                        ))}                    
                    </div>                 
                                            
                    <p className={styles.errorShower}>{errors.temperament}</p>
                </div> 
                
                <div className={styles.handleButtonContainer}>
                    <button
                    onClick={handleSubmit}
                    type='submit'
                    disabled={
                        errors.name ||
                        errors.image ||
                        errors.height ||
                        errors.weight ||
                        errors.life_span ||
                        errors.temperament
                    } 
                >Create</button>
                <Link to='/home'>
                    <button>Cancelar</button>
                </Link>
                </div>
            </form>
            </div>            
        </div>
    )
    
}

export default CreateNew;