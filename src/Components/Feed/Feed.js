import './Feed.css';

import Reddit from '../util/Reddit';
import Sidebar from './Sidebar/Sidebar';

export default function Feed(props) {
    return (
        <main>
            <Reddit 
            subreddit={props.subreddit}
            sortBy={props.sortBy}
            posts={props.posts}
            setPosts={props.setPosts}
                />
            <Sidebar />
        </main>
    );
  }