import {useState} from 'react'

const FilmForm = ({onFilmSubmit}) => {
    const [filmName, setFilmName] = useState('');
    const [filmURL, setFilmURL] = useState('');

    const handleNameChange = (event) => {
        setFilmName(event.target.value);
    }

    const handleURLChange = (event) => {
        setFilmURL(event.target.value);
    };

    const handleFormSubmit = (event) => {
        event.preventDefault()
        
        const nameToSubmit = filmName
        const urlToSubmit = filmURL

        if (!nameToSubmit || !urlToSubmit) {
            return
        }

        onFilmSubmit({
            name: nameToSubmit,
            url: urlToSubmit
        })

        setFilmName('');
        setFilmURL('');
    };
    
    return (
        <form onSubmit={handleFormSubmit} className='film-form'>
            <input type='text' value={filmName} onChange={handleNameChange} placeholder='Add New Film'/>
            <input type='text' value={filmURL} onChange={handleURLChange} placeholder='Add IMDB URL'/>
            <input type='submit' value='Submit' className='submit'/>
        </form>
    )
}

export default FilmForm;