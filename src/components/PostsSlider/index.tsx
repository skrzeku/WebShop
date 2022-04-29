import React from 'react';
import {useSelector} from "react-redux";
import {State} from "../../store/rootReducer";
import {IPost} from "../../store/reducers/productsReducer";
import PostBlock from "../PostBlock";
import {Col4, Container, Row} from "../../assets/styles/global";



const HomePosts:React.FC = ()=> {

    const posts = useSelector<State, IPost[]>(state => state.posts);

    // console.log(posts);
    return(<Container>
        <Row>{posts.map((post)=> {
            return(<Col4><PostBlock post={post}/></Col4>)
        })}</Row></Container>)
};



export default HomePosts;