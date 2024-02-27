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
        // setError(validations({
        //     ...newDog,
        //     [event.target.name]: event.target.value
        // }))
    }

    const handleSelectChange = (event) => {
        event.preventDefault()
        const { value } = event.target
        if(dogNewTemperaments.includes(value)) {
            const newArray = dogNewTemperaments.filter(option !== value)
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
            <hr />
            <h2>Create a new dog breed.</h2>
            <form action="">
                <div>
                    <label>Name:</label>
                    <input 
                        type='text'
                        name='name'
                        value={newDog.name}
                        onChange={handleChange} 
                        placeholder='Enter a new name' />
                    <span>{errors.name}</span>

                    <label>Image:</label>
                    <input 
                        type='text'
                        name='image'
                        value={newDog.image}
                        onChange={handleChange}
                        placeholder='Enter a URL image' />
                    <span>{errors.image}</span>

                    <label>Height diference</label>
                    <input 
                        type='text'
                        name='height'
                        value={newDog.height}
                        onChange={handleChange}
                        placeholder='Enter a Height diference' />
                    <span>{errors.height}</span>

                    <label>Weight diference</label>
                    <input 
                        type='text'
                        name='weight'
                        value={newDog.weight}
                        onChange={handleChange}
                        placeholder='Enter a Weight diference'/>
                    <span>{errors.weight}</span>

                    <label>Life Span</label>
                    <input 
                        type='text'
                        name='life_span'
                        value={newDog.life_span}
                        onChange={handleChange}
                        placeholder='Enter a Weight diference' />
                    <span>{errors.life_span}</span>
                </div>                
                <div>
                    <p>Select temperaments:</p>
                    <select multiple  onChange={handleSelectChange}>
                        <option className='option' value=''>Select a temperament</option>
                        {temperaments.map((temperament) => (
                            <option className='option' key={temperament.id} value={temperament.id}>{temperament.name}</option>
                            
                        ))}
                    </select>                    
                    <p>Selected options:</p>
                    <ul>
                        {dogNewTemperaments.map((temperament, index) => (
                            <li key={index}>{temperament.name}</li>
                        ))}
                    </ul>
                </div> 

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

            </form>
        </div>
    )
    
}

export default CreateNew;