import React, {useState, useEffect} from 'react';
import axios from 'axios'
import {Route, BrowserRouter as Router, Switch, Link, PropsRoute} from "react-router-dom";
import FetchByIdComponent from "./FetchByIdComponent";

const EffectHookWithApiCall = () => {
    const [posts, setPosts] = useState([])
    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/users")
            .then(res => {
                setPosts(res.data)
                console.log("111")
            })
            .catch(err => {
            })
    }, [])
    return (
        <div>
            <Router>
                <ul>{
                    posts.map(ps => <li key={ps.id}>
                        <Link
                            to={{
                                pathname: `/FetchByIdComponent/${ps.id}`
                            }}>
                            {ps.name}
                        </Link>

                     </li>)
                }
                </ul>
                <Switch>
                    <Route path="/FetchByIdComponent/:filterby"  component={FetchByIdComponent}></Route>
                </Switch>
            </Router>


        </div>
    );
};

export default EffectHookWithApiCall;