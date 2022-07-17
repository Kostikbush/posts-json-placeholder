import './App.css';
import {useDispatch, useSelector} from 'react-redux';
import {getPosts, deletePost, upDatePost}  from './redux/module/action';
import Post from './Components/Posts/index';
import uniqid from 'uniqid';
import { useEffect } from 'react';
import { TransitionGroup,CSSTransition } from 'react-transition-group';
import CreatePost from './Components/Create-post';
function App() {
  const posts = useSelector(state => state.postsReducer.posts);
  console.log(posts)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPosts());
  }, [])

  const deletPostClick = (id) => {
    dispatch(deletePost(id))
  }

  return (
      <div className='wrapper'>
      <CreatePost/>
        <TransitionGroup component='div' className='App' >
        
          {posts.map(item => 
            {
            return ( 
              
              <CSSTransition
                timeout={600}
                classNames={'note'}
                key={item.id} > 
                <Post
                  deletPostClick={deletPostClick}  
                  id={item.id} 
                  title={item.title} 
                  body={item.body}
                />
            </CSSTransition>)})}
        </TransitionGroup>
      </div>
  );
}

export default App;
