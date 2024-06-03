import './App.css';
import { useState } from 'react';
import PostsList from './components/PostsList'
import MainHeader from './components/MainHeader'




function App() {

  const [ modalIsVisible , setModalIsVisible ] = useState(true);
  
  return (
    <div className="App">
      
      {/* <Posts name="Khiry" body="Hello I am Khiry!"/>
      <Posts name="Quran" body="Hello I am Quran!"/>
      <Posts name="Jackie" body="Hello I am Jackie!"/>
      <Posts /> */}

      <MainHeader onCreatePost={} />

      <PostsList/>

    </div>
  );
}

export default App;
