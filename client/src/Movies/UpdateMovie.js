import React, { useState } from 'react';

const initialMovie = {
    title: "",
    director: "",
    metascore: "",
    actors: [
        {
            actorName: ""
        }
    ]
};

const UpdateMovie = () => {
    const [movie, setMovie] = useState(initialMovie);

    const handleChange = e => {
        // console.log(e.target);
        setMovie({
            ...movie,
            [e.target.name]: e.target.value
        })
    };

    return (
        <div>
            <h2 className="updateMovieTitle">Update Movie</h2>
            <form>
                <input
                    name="title"
                    placeholder="Title"
                    type="text"
                    value={movie.title}
                    onChange={handleChange}
                />
                <input
                    name="director"
                    type="text"
                    placeholder="Director"
                    value={movie.director}
                    onChange={handleChange}
                />
                <input
                    name="metascore"
                    type="number"
                    placeholder="Metascore"
                    value={movie.metascore}
                    onChange={handleChange}
                />
                <input
                    id="actors"
                    name="actors"
                    type="text"
                    placeholder="Actor Name"
                    value={movie.actors.actorName}
                    onChange={handleChange}
                />
                <input
                    id="actors"
                    name="actors"
                    type="text"
                    placeholder="Actor Name"
                    value={movie.actors.actorName}
                    onChange={handleChange}
                />
                <input
                    id="actors"
                    name="actors"
                    type="text"
                    placeholder="Actor Name"
                    value={movie.actors.actorName}
                    onChange={handleChange}
                />
                <button>Update</button>
            </form>
        </div>
    );
};

export default UpdateMovie;