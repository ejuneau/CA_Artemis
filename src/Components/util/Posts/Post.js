import './Post.css';
import DOMPurify from 'dompurify';
import Reddit from '../Reddit';

export default function Post(props) {
    const humanTimeObj = new Date (props.post.created * 1000);
    const humanTime = humanTimeObj.toTimeString().slice(0, 5) + " on " + humanTimeObj.toDateString();

    function postBody(props) {
//tests nature of post (image, video, self, article) and returns appropriate body element    
// if self-post, simply return self-text      
        if (props.post.is_self) {
            let parsed = DOMPurify.sanitize(props.post.selftext_html, {USE_PROFILES: {html: true}});
            function createMarkup() {return {__html: parsed};};             
            return <div className="post-body-self-text" dangerouslySetInnerHTML={createMarkup()}></div>;
            
            
// use RegEx to test if post is image, and return image if so
        } else if (/(jpg|gif|png)$/.test(props.post.url)) {  
            return <img className="post-body-img" src={props.post.url} alt={`posted by user ${props.post.author} to subreddit ${props.post.subreddit}`}/>


// if post is video (youtube, v.reddit, etc) return video element
        } else if (props.post.media !== null) {
            if (props.post.is_video) {
                if (/v\.redd\.it/.test(props.post.media.reddit_video.fallback_url)) {                         
                    return <video className="post-body-video" src={props.post.media.reddit_video.fallback_url} autoPlay controls loop/>
                } else return <h1>no fallback_url</h1>

            } else if (props.post.domain === "twitter.com") {
                return JSON.stringify(props.post.media_embed.content);
            }
// if none of these conditions are met (most likely an article post) simply return thumbnail with link to url
        } else {                                                         
            return props.post.thumbnail==="default"?<p>via <a href={props.post.url}>{props.post.domain}</a></p>:<a href={props.post.domain} className="post-body-default-link"><img className="post-body-default-thumbnail" src={props.post.thumbnail} alt={`posted by user ${props.post.author} to subreddit ${props.post.subreddit}`}/></a>}
    
    }
    return (
        <div className={`post ${props.post.id}`}>
            <div className="post-header">
                <h2 className="post-header-title">{props.post.title}</h2>
                <p className="post-header-info">posted by {props.post.author} to /r/{props.post.subreddit}</p>
            </div>
            
                { postBody(props) }
            <div className="post-comment-section">{/*console.log(Reddit.getCommentsSection(props.post.permalink))*/}</div>
            <div className="post-data">
                <p className="post-data-num-comments" onClick={() => {console.log(Reddit.getCommentsSection(props.post.permalink))}}>{props.post.num_comments} comments</p>
                <p className="post-data-score">karma: {props.post.score}</p>
                <p className="post-data-created">posted at {humanTime}</p>
            </div>
        </div>
    )
}
