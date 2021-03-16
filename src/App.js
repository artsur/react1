import RoundButton from './components/RoundButton';
import PostForm from './components/PostForm';
import Posts from './components/Posts';
import FetchedPosts from './components/FetchedPosts';
import ShowPostFormButton from './components/ShowPostFormButton';

function App() {
    let customElementRegistry = window.customElements;
    if(customElementRegistry.get("round-button") === undefined){
        customElementRegistry.define("round-button", RoundButton);
    }

    return (
        <div className='container py-3'>
            <h1>React app <round-button class='ml-3' value='#'/></h1>
            <div className='my-4'>
                <ShowPostFormButton/>
                <PostForm/>
            </div>
            <div className='row my-3'>
                <div className='col'>
                    <Posts/>
                </div>
                <div className='col'>
                    <FetchedPosts/>
                </div>
            </div>
        </div>
    );
}

export default App;
