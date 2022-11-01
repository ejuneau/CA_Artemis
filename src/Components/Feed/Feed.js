import './Feed.css';

import Reddit from '../util/Reddit';
import Sidebar from './Sidebar/Sidebar';
import Posts from './Posts/Posts';

export default function Feed(props) {
    return (
        <main>
            <Posts 
            subreddit={props.subreddit}
            sortBy={props.sortBy}
            posts={props.posts}
            />
            <Sidebar />
        </main>
    );
  }