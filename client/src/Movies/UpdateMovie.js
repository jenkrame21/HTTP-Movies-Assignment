import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from "react-router-dom";
import axios from 'axios';

const initialMovie = {
    title: "",
    director: "",
    metascore: "",
    stars: []
};

const UpdateMovie = props => {
    const [form, setForm] = useState(initialMovie);
    const { id } = useParams();
    const { push } = useHistory();

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
    }, [id]);

    const handleChange = e => {
        // console.log(e.target);
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    };

    const handleSubmit = e => {
        axios
            .put(`http://localhost:5000/api/movies/${id}`, form)
                .then((res) => {
                    // 1. set data to server side
                    console.log("Submit Put Success UpdateMovie:", res.data);
                    // 2. set data to client side
                    props.setMovieList(res.data);
                    // ROUTE NOT WORKING
                    push(`/movies`)
                })
                .catch((err) => {
                    console.log("Error Submit UpdateMovie:", err.message);
                });
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
                                name="stars"
                                type="text"
                                placeholder="Star Name"
                                value={star}
                                onChange={handleChange}
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