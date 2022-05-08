import React from 'react';
import Hero from "components/Hero/index";
import {useSelector} from "react-redux";
import {State} from "src/store/rootReducer";
import {IPost} from "src/store/reducers/productsReducer";
import {Col, Container, Row} from "react-bootstrap";
import {SectionTitle} from "assets/styles/typography";
import PostBlock from "components/PostBlock/index";


const Blog:React.FC = ()=> {
    const posts = useSelector<State, IPost[]>(state => state.posts);

    // console.log(posts);
    return(<div>
        <Hero title={'Blog'}/>
        <Container className="py-5">


        <Row>{posts.map((post)=> {
            return(<Col lg="4"><PostBlock post={post}/></Col>)
        })}</Row></Container>   </div>)
}

export default Blog;