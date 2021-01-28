import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

const initialAddForm = {
    title: "",
    director: "",
    metascore: 0,
    stars: []
};

function AddMovie() {
    const [addForm, setAddForm] = useState(initialAddForm);
    const { push } = useHistory();

    const handleChange = e => {
        setAddForm({
            ...addForm,
            [e.target.name]: e.target.value
        });
    };

    const addSubmit = e => {
        e.preventDefault();
        axios
            .post("http://localhost:5000/api/movies", addForm)
                .then((res) => {
                    // Shows up but goes away immediately
                    // NOT WORKING
                    console.log("Add Movie Successful:", res.data);
                    push('/movies');
                })
                .catch((err) => {
                    console.log("Add Movie Error", err.message);
                })
    };

    return (
        <div>
            <h2 className="addMovie">Add Movie</h2>
            <form onSubmit={addSubmit}>
                <input
                    name="title"
                    placeholder="Title"
                    type="text"
                    value={addForm.title}
                    onChange={handleChange}
                />
                <input
                    name="director"
                    type="text"
                    placeholder="Director"
                    value={addForm.director}
                    onChange={handleChange}
                />
                <input
                    name="metascore"
                    type="number"
                    placeholder="Metascore"
                    value={addForm.metascore}
                    onChange={handleChange}
                />
                <input
                    name="stars"
                    type="text"
                    placeholder="Star Name"
                    value={addForm.stars}
                    onChange={handleChange}
                />
                <button>Add</button>
            </form>
        </div>
    )
}

export default AddMovie;
