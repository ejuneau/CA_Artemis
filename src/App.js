import './App.css';
import Feed from './Components/Feed/Feed';
import HeadFoot from './Components/HeadFoot/HeadFoot';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSortBy } from './Components/util/SortBy/SortBySlice';
import { setSubreddit } from './Components/util/Subreddit/SubredditSlice';
import { setPosts } from './Components/util/Posts/PostsSlice';
import { setComments } from './Components/util/Comments/CommentsSlice';
import Reddit from './Components/util/Reddit';


function App() {
  const version = 1.6 //Yes, I'm that lazy
  const dispatch = useDispatch();
  const sortBy = useSelector(state => state.sortBy.sortBy)
  const subreddit = useSelector(state => state.subreddit.subreddit)
  const posts = useSelector(state => state.posts.posts)
  const comments = useSelector(state => state.comments.comments);


  function handleSortByChange(newSortByOption) {
    dispatch(setPosts(undefined));
    console.log(`handleSortByChange() dispatched!`);
    dispatch(setSortBy(newSortByOption));
  }

  function handleSubredditChange(newSubreddit) {
    dispatch(setPosts(undefined));
    console.log(`handleSubredditChange() dispatched!`);
    dispatch(setSubreddit(newSubreddit));
  }
  
  function handlePostsChange(newPosts) {
    dispatch(setPosts(undefined));
    console.log(`handlePostsChange() dispatched!`);
    dispatch(setPosts(newPosts));
  }

  function handleCommentsChange({id, comments}) {
    console.log(`handleCommentsChange() dispatched!`);
    dispatch(setComments({id, comments}));
  }
  useEffect(() => {
    Reddit.getPosts(subreddit, sortBy).then(posts => {
      console.log(posts)
      

      
      handlePostsChange(posts);
      })
  }, [sortBy, subreddit]);

  return (
    <>
      <header>
        <HeadFoot 
          sortBy={sortBy}
          handleSortByChange={handleSortByChange}
          handleSubredditChange={handleSubredditChange}
          subreddit={subreddit}
          version={version}
          headFoot="header"
        />
      </header>
      <Feed 
        subreddit={subreddit}
        sortBy={sortBy}
        posts={posts}
        handleCommentsChange={handleCommentsChange}
      />
      <footer>
        <HeadFoot 
          handleSortByChange={handleSortByChange}
          handleSubredditChange={handleSubredditChange}
          subreddit={subreddit}
          version={version}
          headFoot="footer"
        />
      </footer>
    </>
  );
}

export default App;
