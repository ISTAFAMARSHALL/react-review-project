import './App.css';
import Posts from './components/Posts';
import PostsList from './components/PostsList'


function App() {
  return (
    <div className="App">
      
      {/* <Posts name="Khiry" body="Hello I am Khiry!"/>
      <Posts name="Quran" body="Hello I am Quran!"/>
      <Posts name="Jackie" body="Hello I am Jackie!"/>
      <Posts /> */}

      <PostsList/>

    </div>
  );
}

export default App;
