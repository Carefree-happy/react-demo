import MyLazyload from './components/MyLazyLoad';
import img1 from './image.jpg';
import img2 from './image.jpg';

function App() {

    return (
        <div>
            <p>xxxxxx</p>
            <p>xxxxxx</p>
            <p>xxxxxx</p>
            <p>xxxxxx</p>
            <p>xxxxxx</p>
            <p>xxxxxx</p>
            <p>xxxxxx</p>
            <p>xxxxxx</p>
            <p>xxxxxx</p>
            <p>xxxxxx</p>
            <p>xxxxxx</p>
            <p>xxxxxx</p>
            <p>xxxxxx</p>
            <p>xxxxxx</p>
            <p>xxxxxx</p>
            <p>xxxxxx</p>
            <p>xxxxxx</p>
            <p>xxxxxx</p>
            <p>xxxxxx</p>
            <p>xxxxxx</p>
            <p>xxxxxx</p>
            <p>xxxxxx</p>
            <p>xxxxxx</p>
            <p>xxxxxx</p>
            <p>xxxxxx</p>
            <p>xxxxxx</p>
            <p>xxxxxx</p>
            <p>xxxxxx</p>
            <p>xxxxxx</p>
            <MyLazyload placeholder={<div>loading...</div>}>
                <img src={img1}/>
            </MyLazyload>
            <MyLazyload placeholder={<div>loading...</div>}>
                <img src={img2}/>
            </MyLazyload>
        </div>
  
    )
}

export default App;