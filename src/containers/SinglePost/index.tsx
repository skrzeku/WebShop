import {useParams} from "react-router-dom";
import {useSelector} from "react-redux";
import {IPost, IProduct} from "store/reducers/productsReducer";
import {State} from "store/rootReducer";
import ReactMarkdown from "react-markdown";
import Styled from 'styled-components';

import {Col, Container, Row} from "react-bootstrap";
import {SectionTitle} from "assets/styles/typography";
import {colorSecondary} from "assets/styles/variables";

const GalleryImg = Styled.img`
border: solid 1px lightgray;
height: 200px;
width: 100%;
object-fit: cover;
`;



const SinglePost = ()=> {

    let { id } = useParams();
    const strapiUrl = 'http://localhost:1337';

    const Post = useSelector<State, IPost | undefined>(state => state.posts.find((one)=> one.id == Number(id)));




    // console.log(Post);
    return(<Container>
        <div>Hero with Breadcrumb</div>
        <Row>
            {/*<Col6></Col6>*/}
            <Col lg="9">
                <span>Aktualności</span>
                <h2>{Post?.title}</h2>
                <img src={strapiUrl + Post?.thumbnail.url}/>
                {/*<div>{Post?.content}</div>*/}
                <ReactMarkdown >
                    {Post?.content.split('/uploads/').join(`${strapiUrl}/uploads/`) }
                </ReactMarkdown>
                <SectionTitle><h2>Galeria</h2></SectionTitle>
                <Row>
                    {
                        Post?.gallery.map((item)=> {
                            return(<Col lg="3">
                                <GalleryImg src={strapiUrl + item.url}/>
                            </Col>)
                        })
                    }
                </Row>




            </Col>
            <Col lg="3">Sidebar</Col>
        </Row>
    </Container>)
};


export default SinglePost;