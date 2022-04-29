import {IPost} from "../../store/reducers/productsReducer";
import NoImage from "../../assets/images/noImage.png";


interface PostProps {
    post: IPost
}
const PostBlock = ({post} : PostProps )=> {
    return(<div>
        <p>{post.id}</p>
        <img src={post.thumbnail? 'http://localhost:1337' + post.thumbnail?.url : NoImage}/>
        <h3>{post.title}</h3>
    </div>)
}


export default PostBlock;