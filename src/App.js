import './App.css';
import Post from './components/Post';


function App() {
  return (
    <div className="App">
      
      <Post name="Khiry" body="Hello I am Khiry!"/>
      <Post name="Quran" body="Hello I am Quran!"/>
      <Post name="Jackie" body="Hello I am Jackie!"/>
      <Post />

    </div>
  );
}

export default App;
