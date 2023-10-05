import { useEffect, useState, useReducer } from "react";
import axios from 'axios';


function reducer(state, action) {
    switch (action.type) {
        case 'INCREMENT':
                return { value: state.value + action.value };
        case 'DECREMENT' : 
                return { value: state.value - action.value};
        default :
            return state;
    }
}

const Rooms = () => {
    const [state, dispatch] = useReducer(reducer, { value : 0 });

    const [posts, setPosts] = useState([]);
    const [reload, setReload] = useState(false);

    useEffect(() => {
        axios({
            url: "https://jsonplaceholder.typicode.com/posts",
            method : "get"
        })
        .then((res) => {
            setPosts(res.data);
        })
        .catch((err) => console.error(err));
        console.log("로딩...");
    }, [reload])

    const lis = posts.map(p => (<li key={p.id}>{p.title}</li>));

    return (
        <>
            <p>{state.value}</p>
            <button onClick={() => dispatch({type:'INCREMENT', value : 2})}>+2</button>
            <button onClick={() => dispatch({type: 'DECREMENT', value: -3})}>-3</button>
            <br />
            
            <button onClick={() => setReload(!reload)}>클릭({reload})</button>
            <ul>
                {lis}
            </ul>
            
        </>
    );
};

export default Rooms;