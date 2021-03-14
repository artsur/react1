import PostForm from './components/PostForm';
import Posts from './components/Posts';
import FetchedPosts from './components/FetchedPosts';

function App() {
    return (
        <div className='container py-3'>
            <h1>React app</h1>
            <div className='my-4'>
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
