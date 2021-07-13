import { useEffect, useState } from "react";
import { getJSON } from 'jquery';
import Card from './components/Card';

import './App.css';

const App = () => {
  const [data, setData] = useState('')
  const [loading, setLoading] = useState(true);
  const [filteredData, setFilteredData] = useState('');

  useEffect(() => {
    fetchData();
  }, [])
  
  const fetchData = async () => {
    setLoading(true);
    getJSON("http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?", {
        format: "json"
    }, function(d) {
        setData(d.items)
        setFilteredData(d.items)
    });
    setLoading(false);
  }

  const handleFilter = (val) => {
    let filtro = data.filter(item => 
      item.title.toLowerCase().includes(val.toLowerCase())
    )
    setFilteredData(filtro)
  }

  return (
    <>  
      <h1>Flickr Photo Stream</h1>
      <div className='filter-container'>
        <p>Filter Elements: </p>
        <input type='text' onChange={(e) => { handleFilter(e.target.value); } } />
      </div>

      <div className="container">
        {loading && <p>Loading...</p>}
        {filteredData && 
          filteredData.map(i => {
            return <Card key={i.author_id} item={i} />
          })
        }
      </div>
      
      <footer>App made by Ismael Teixeira with React.js</footer>
    </>
  );
}

export default App;
