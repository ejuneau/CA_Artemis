import './Footer.css';
import SortByOptions from '../util/SortBy/RenderSortByOptions';
export default function Footer(props) {
    return (
        <footer>
            <div className="footer-spacer">
                <div className="footer-title"><h1>Artemis</h1><p>for Reddit, v.0.1</p></div>
                <SortByOptions 
                    sortBy={props.sortBy}
                    onClickSortBy={props.onClickSortBy}/>
            </div>
        </footer>
    );
}