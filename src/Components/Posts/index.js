import {Card, Button} from 'antd'
import { useState } from 'react';
import {upDatePost} from '../../redux/module/action'
import { useDispatch } from 'react-redux';
const Post = ({title, body, id, deletPostClick}) => {
    const dispatch = useDispatch()
    const [hadlBodyF, sethadlBody] = useState(false);
    const [postTitleText, setPostTitleText] = useState(title);
    const [postBodyText, setPostBodyText] = useState(body);
    const handleTitleInput = (e) => {
        setPostTitleText(e.target.value);
    }
    const handleBodyInput = (e) => {
        setPostBodyText(e.target.value); 
    }
    const updatePosts = (title, body, id) => {
        dispatch(upDatePost(title, body, id))
    }
    return (
        <Card>
            {hadlBodyF ? <input 
            type='text' 
            value={postTitleText}
            onChange={handleTitleInput}
            /> : <h2>{title}</h2>}
            {hadlBodyF ? <input 
            type='text' 
            value={postBodyText}
            onChange={handleBodyInput}
            /> :<p className='text'>{body}</p>}
            <Button
                onClick={() => sethadlBody(!hadlBodyF)}
                className='button' type='primery'
            >
                CHANGE POST
             </Button>
            <Button
                onClick={() => updatePosts(postTitleText, postBodyText, id)}
                className='button' 
                type='primery'>
                UPDATE
             </Button>
            <Button
                onClick={() => deletPostClick(id)}
                className='button' 
                type='primery'>
                DELETE
            </Button>
        </Card>
    )
}

export default Post;