import React from 'react';
import {useSelector} from "react-redux";
import {State} from "../../store/rootReducer";
import {IPost} from "../../store/reducers/productsReducer";
import PostBlock from "../PostBlock";
// import {Col4, Container, Row} from "../../assets/styles/global";
import {SectionTitle} from "assets/styles/typography";
import {Col, Container, Row} from "react-bootstrap";



const HomePosts:React.FC = ()=> {

    const posts = useSelector<State, IPost[]>(state => state.posts);

    // console.log(posts);
    return(<Container>
        <SectionTitle><h2>Najnowsze wpisy</h2></SectionTitle>

        <Row>{posts.map((post)=> {
            return(<Col lg="4"><PostBlock post={post}/></Col>)
        })}</Row></Container>)
};



export default HomePosts;