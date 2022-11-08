import store from '../util/Store/store'
import { setSortBy } from '../util/SortBy/SortBySlice';
import { setSubreddit } from '../util/Subreddit/SubredditSlice';
import { setPosts } from '../util/Posts/PostsSlice';
import { setComments } from '../util/Comments/CommentsSlice';
import axios from 'axios';


const Reddit = {


    handleSortByChange(newSortByOption) {
        store.dispatch(setPosts(undefined));
        console.log(`Setting sortBy to ${newSortByOption}`);
        store.dispatch(setSortBy(newSortByOption));
    },
    handleSubredditChange(newSubreddit) {
        store.dispatch(setPosts(undefined));
        console.log(`Setting subreddit to ${newSubreddit}`);
        store.dispatch(setSubreddit(newSubreddit));
    },
  
    handlePostsChange(newPosts) {
        store.dispatch(setPosts(undefined));
        console.log(`Setting Posts to:`);
        //console.log(newPosts);
        store.dispatch(setPosts(newPosts));
    },
    
    handleCommentsChange({id, comments}) {
        store.dispatch(setComments({id, comments}))
    },


    fakeResults: [
        "all",
        "trees",
        "popular",
        "UNBGBBIIVCHIDCTIICBG",
        "PetTheDamnKitty",
        "wholesomeReddit",
        "TheRedditSymphony",
        "coyote",
        "loading"
    ],

    async getPosts(subreddit, sortBy) {
        //console.log(`Running getPosts with subreddit "${subreddit}" and sortBy "${sortBy}"`);
        return axios.get(`https://www.reddit.com/r/${subreddit}/${sortBy}.json?raw_json=1`)
        .then(response => {
            //console.log(`retrieved response! Setting state.posts`);
            return (response.data.data.children.map(post => {
                return post.data
            }))
        })

    },

    async searchSubreddits(subredditQuery) {
        // if (subredditQuery.match(/ /)) {return "Spaces arent allowed in subreddit names!"}
        // if (subredditQuery.length < 2) {return "Type a lil more for subreddit results :)"}
        return axios.get(`https://www.reddit.com/search/.json?q=${subredditQuery}&type=sr`)
        .then(response => {
            if (subredditQuery.match(/ /)) {
                console.log("Spaces aren't allowed in subreddits!");
                return this.fakeResults; 
            } else if (subredditQuery.length < 3) {
                console.log("Query too short! Type a lil more :)")
                return this.fakeResults
            } else if (response.data.data) {
                return response.data.data.children.map(subreddit => {
                return subreddit.data.display_name;
            })
            } else  {return "No results :("}
        });
    },

    async getSideBarInfo(subreddit) {
        return axios.get(`https://www.reddit.com/r/${subreddit}/.json`)
        .then(response => {
            
        })
    },

    async getCommentsSection(permalink) {   //Can try to implement sortBy for comments at some point
        return axios.get(`https://reddit.com${permalink}.json`)
        .then(response => {
            //console.log(response.data[1].data.children);
            return response.data[1].data.children.map(comment => {
                return <li>{comment.author}: {comment.body}</li>
            })
        })
    }
}

export default Reddit;