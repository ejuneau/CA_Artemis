import './Post.css';
export default function Post(props) {
    const humanTimeObj = new Date (props.post.created * 1000);
    const humanTime = humanTimeObj.toTimeString().slice(0, 5) + " on " + humanTimeObj.toDateString();

    function postBody(props) {
//tests nature of post (image, video, self, article) and returns appropriate body element    
// if self-post, simply return self-text      
        if (props.post.is_self) {                            
            return <p className="post-body-self-text">{props.post.selftext}</p>  
            
            
// use RegEx to test if post is image, and return image if so
        } else if (/(jpg|gif|png)$/.test(props.post.url)) {  
            return <img className="post-body-img" src={props.post.url} />


// if post is video (youtube, v.reddit, etc) return video element
        } else if (props.post.media !== null) {
            if (props.post.is_video) {
                if (/v\.redd\.it/.test(props.post.media.reddit_video.fallback_url)) {                         
                    return <video className="post-body-video" src={props.post.media.reddit_video.fallback_url} autoPlay controls loop/>
                } else return <h1>no fallback_url</h1>

            } else return <h1>is_video: false</h1>
// if none of these conditions are met (most likely an article post) simply return thumbnail with link to url
        } else {                                                         
            return props.post.thumbnail==="default"?<p>via <a href={props.post.url}>{props.post.domain}</a></p>:<a href={props.post.domain} className="post-body-default-link"><img className="post-body-default-thumbnail" src={props.post.thumbnail} /></a>}
    
    }
    return (
        <div className="post">
            <div className="post-header">
                <h2 className="post-header-title">{props.post.title}</h2>
                <p className="post-header-info">posted by {props.post.author} to /r/{props.post.subreddit}</p>
            </div>
            
                { postBody(props) }
            
            <div className="post-data">
                <p className="post-data-num-comments">{props.post.num_comments} comments</p>
                <p className="post-data-score">karma: {props.post.score}</p>
                <p className="post-data-created">posted at {humanTime}</p>
            </div>
        </div>
    )
}
