import { useEffect, useState } from "react";
import { getJSON } from 'jquery';
import Card from './components/Card';
import Loader from './components/Loader';

import './App.css';

const App = () => {
  const [data, setData] = useState('')
  const [loading, setLoading] = useState(false);
  const [input, setInput] = useState('');

  useEffect(() => {
    fetchData();
  }, [])
  
  const fetchData = async () => {
    setLoading(true);
    await getJSON("http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?", {
        format: "json",
        safe_search: 1
    }, function(d) {
        setData(d.items)
    });
    setLoading(false);
  }

  const loadMorePosts = async () => {
    setLoading(true);
    await getJSON("http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?", {
        format: "json",
        safe_search: 1
    }, function(d) {
        setData([...data, ...d.items]);
    });
    setLoading(false);
  }

  return (
    <>  
      <h1>Flickr Photo Stream</h1>
      <div className='filter-container'>
        <p>Filter Elements: </p>
        <input type='text' onChange={(e) => { setInput(e.target.value); } } />
      </div>

      <div className="container">
        {data && 
          data.filter(item =>
            item.title.toLowerCase().includes(input.toLowerCase()) || 
            item.description.toLowerCase().includes(input.toLowerCase()) ||
            item.tags.toLowerCase().includes(input.toLowerCase())
          ).map(i => {
            return <Card key={i.author_id} item={i} />
          })
        }
      </div>

      <div className='loading-container'>
        { !loading && <button onClick={loadMorePosts}>Load more Posts</button> }
        { loading && <Loader /> }
      </div>
      
      <footer>App made by Ismael Teixeira with React.js</footer>
    </>
  );
}

export default App;
