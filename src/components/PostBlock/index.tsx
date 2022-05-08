import {IPost} from "store/reducers/productsReducer";
import NoImage from "assets/images/noImage.png";
import Styled from 'styled-components';
import {Overlay} from "assets/styles/mixins";
import {useNavigate} from "react-router-dom";
import {colorPrimary, colorSecondary} from "assets/styles/variables";

const PostDate = Styled.div`
position: absolute;
top: 15px;
left: 15px;
background: #fff;
font-size: 24px;
text-transform: upperCase;
padding: 5px 15px;
z-index: 5;
box-shadow: 0 0 9px rgba(0, 0, 0, 0.1);
    * {
    margin: 0;
    line-height: 1.1;
    }
    p {
    font-size: 16px;
    }
`;
const PostImageWrapper= Styled.div`
position: relative;
height: 250px;
width: 100%;
overflow: hidden;
${Overlay('0,0,0', '0.4')};
    
    img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    transition: 0.3s all ease;
    }
        &:before {
         transition: 0.3s all ease;
         z-index: 4;
         opacity:0;
        }
`;

const PostText = Styled.p`
 display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;  
  overflow: hidden;
  font-size: 15px;
  color: #777777;
`;

const PostTitle = Styled.h3`
font-size: 22px;
font-weight: 600;
`;

const PostContent = Styled.div`
padding: 30px 15px 15px;
position: relative;
z-index: 5;
`;

const PostCategory = Styled.span`
position: absolute;
left: 50%;
top: 0;
transform: translate(-50%, -50%);
z-index: 5;
color: white;
font-size: 14px;
padding: 0 15px;
text-transform: uppercase;
background-color: ${colorSecondary};
`;

const PostLink = Styled.button`
color: ${colorSecondary};
border: none;
background: transparent;
font-weight: bold;
transition: 0.3s all ease;
    &:hover {
    color: ${colorPrimary};
    i {
    transform: translateX(10px);
    opacity: 1;
    }
    }
i {
font-size: 24px;
line-height: 19px;
display: inline-block;
vertical-align: middle;
         transition: 0.3s all ease;
opacity: 0;
}
`;

const Post = Styled.div`
position: relative;
text-align: center;
box-shadow: rgba(0, 0, 0, 0.1) 0px 5px 15px;
    transition: 0.3s all ease;

    &:hover {
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
      img {
       transform: scale(1.1);
     }
        .postImageWrapper:before {
        opacity: 1;
        }
    }
`;


interface PostProps {
    post: IPost
}
const PostBlock = ({post} : PostProps )=> {
    const date = new Date(post.created_at);
    const navigate = useNavigate();
    return(<Post>
        <PostDate>{date.getDate()}<p>{date.toLocaleDateString('default', { month: 'short' })}</p></PostDate>
        <PostImageWrapper className='postImageWrapper'><img src={post.thumbnail? 'http://localhost:1337' + post.thumbnail?.url : NoImage}/></PostImageWrapper>
       <PostContent>
           <PostCategory>Aktualności</PostCategory>
           <PostTitle>{post.title}</PostTitle>
           <PostText>{post.content.replace( /(<([^>]+)>)/ig, '').replace('#', '').slice(0, 120)}</PostText>
           <PostLink onClick={event => navigate('post/' + post.id)}>Czytaj więcej<i className="las la-ellipsis-h"></i></PostLink>
       </PostContent>
    </Post>)
}


export default PostBlock;