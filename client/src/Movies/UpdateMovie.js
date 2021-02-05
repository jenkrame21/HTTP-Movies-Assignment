import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from "react-router-dom";
import axios from 'axios';

const initialMovie = {
    title: "",
    director: "",
    metascore: 0,
    stars: []
};

const UpdateMovie = props => {
    const [updateForm, setUpdateForm] = useState(initialMovie);
    const { id } = useParams();
    const { push } = useHistory();

    useEffect(() => {
        axios
            .get(`http://localhost:5000/api/movies/${id}`)
                .then((res) => {
                    // console.log("Successful Get UpdateMovie:", res.data);
                    setUpdateForm(res.data);
                })
                .catch((err) => {
                    console.log("Error useEffect UpdateMovie:", err)
                })
    }, [id]);

    const handleChange = e => {
        // console.log(e.target);
        setUpdateForm({
            ...updateForm,
            [e.target.name]: e.target.value
        })
    };

    const handleSubmit = () => {
        axios
            .put(`http://localhost:5000/api/movies/${id}`, updateForm)
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
                    value={updateForm.title}
                    onChange={handleChange}
                />
                <input
                    name="director"
                    type="text"
                    placeholder="Director"
                    value={updateForm.director}
                    onChange={handleChange}
                />
                <input
                    name="metascore"
                    type="number"
                    placeholder="Metascore"
                    value={updateForm.metascore}
                    onChange={handleChange}
                />
                {
                    updateForm.stars.map(star =>{
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