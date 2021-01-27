import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import axios from 'axios';

const initialMovie = {
    title: "",
    director: "",
    metascore: "",
    stars: []
};

const UpdateMovie = () => {
    const [form, setForm] = useState(initialMovie);
    const { id } = useParams();

    useEffect(() => {
        axios
            .get(`http://localhost:5000/api/movies/${id}`)
                .then((res) => {
                    console.log("Successful Get UpdateMovie:", res.data);
                    setForm(res.data);
                })
                .catch((err) => {
                    console.log("Error useEffect UpdateMovie:", err)
                })
    }, []);

    const handleChange = e => {
        // console.log(e.target);
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    };

    const handleSubmit = e => {
        axios
            .put()
    };

    return (
        <div>
            <h2 className="updateMovieTitle">Update Movie</h2>
            <form onSubmit={handleSubmit}>
                <input
                    name="title"
                    placeholder="Title"
                    type="text"
                    value={form.title}
                    onChange={handleChange}
                />
                <input
                    name="director"
                    type="text"
                    placeholder="Director"
                    value={form.director}
                    onChange={handleChange}
                />
                <input
                    name="metascore"
                    type="number"
                    placeholder="Metascore"
                    value={form.metascore}
                    onChange={handleChange}
                />
                {
                    form.stars.map(star =>{
                        return(
                            <input
                                key={star}
                                type="text"
                                name="stars"
                                value={star}
                            />
                        )
                    })
                }
                <button>Update</button>
            </form>
        </div>
    );
};

export default UpdateMovie;