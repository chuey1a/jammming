import Results from '../Results/Results';
import SearchBar from '../SearchBar/SearchBar';
import './App.css';

const testTrack1 = {
  title: 'somestring',
  artist: 'me',
  album: 'BBTM',
  id: 0
};

const testTrack2 = {
  title: 'somestring',
  artist: 'you',
  album: '1989',
  id: 1
};

const tracks = [testTrack1, testTrack2];

function App() {
  return (
    <div>
      <h1>jammming</h1>
      <div>
        <div className="App">
          <SearchBar />
          <Results SearchResults={tracks} />
        </div>
      </div>
    </div>
  );
}

export default App;
