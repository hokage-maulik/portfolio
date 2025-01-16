import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "../Style/Project.css";

export default function Project() {
    const [state, setState] = useState([]);

    useEffect(() => {
        fetchData();
    }, []); // Fetch data only once

    async function fetchData() {
        const res = await axios.get("https://portfolio-backend1-kbkr.onrender.com/data");
        // https://backend-1-1fhx.onrender.com
        // http://localhost:3000
        setState(res.data);
    }

    return (
        <div>
            <h1 className="project-heading">
                My Recent <strong className="purple">Works</strong>
            </h1>
            <p style={{ color: "white", textAlign: "center" }}>
                Here are a few projects I've worked on recently.
            </p>
            <div className="card-container">
                {state.map((el, i) => (
                    <div className="card mx-5" key={i}>
                        <img className="card-img-top mt-3" src={el.img} alt="" />
                        <div className="card-body">
                            <h5 className="card-title">{el.title}</h5> 
                            <p className="card-text">{el.descryption}</p>
                            <div>

                            <a href={el.github} className="btn btn-primary">Github</a>
                            <a href={el.live} className="btn btn-primary ms-4">Live</a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
