import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import axios from "axios";

const FetchByIdComponent = (props) => {
    const [person, setPerson] = useState({})
    const [showModal, setModal] = useState(true)
    let id = props.match.params.filterby


    console.log(props);
    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then((result) => {
                console.log(result.data)
                setPerson(result.data)
                setModal(true)
            })

    }, [id])
    return (
            showModal?
                <div className="model">
                    <div className="model-content">
                        {JSON.stringify(person)}
                        <button className={"close-btn"} onClick={() => setModal(false)}>Close</button>
                    </div>
                </div>:null


    );
};

export default FetchByIdComponent;