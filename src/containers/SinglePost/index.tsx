import {useParams} from "react-router-dom";
import {useSelector} from "react-redux";
import {IPost, IProduct} from "store/reducers/productsReducer";
import {State} from "store/rootReducer";
import ReactMarkdown from "react-markdown";

import {Col, Container, Row} from "react-bootstrap";



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
                <h3>Galeria</h3>



            </Col>
            <Col lg="3">Sidebar</Col>
        </Row>
    </Container>)
};


export default SinglePost;