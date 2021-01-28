import React, { useState } from 'react';

const initialAddForm = {
    title: "",
    director: "",
    metascore: "",
    stars: []
};

function AddMovie() {
    const [addForm, setAddForm] = useState(initialAddForm);

    const handleChange = e => {
        setAddForm({
            ...addForm,
            [e.target.name]: e.target.value
        });
    };

    const addSubmit = () => {

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
                <input
                    name="stars"
                    type="text"
                    placeholder="Star Name"
                    value={addForm.stars}
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
