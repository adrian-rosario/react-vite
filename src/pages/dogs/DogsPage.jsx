import { useEffect, useState } from 'react';
import sorry from '../../images/technical-difficulties.jpg';
import defaultImage from '../../images/js-logo-xs.png';
import './dogsPage.component.css';
const homePage = '/';
import Layout from '../../layout/layout';

export default function DogsPage(){

  const [data, setData] = useState([]);
  const [imageSource, setImageSource] = useState();  

   useEffect(() => {
    fetch('https://dog.ceo/api/breeds/list/all')
      .then((response) => response.json())
      .then((data) => {
        console.log('data:\n', data);
        setData(data.message);
      });
  }, []);

  const updateImage = (breed) => {
    const imagesUrl = 'https://dog.ceo/api/breed/';

    const imageQuery = async() => {
      const response = await fetch(imagesUrl + breed + '/images/random');
      const newData = await response.json();
      console.log('newData:\n', newData);
      setImageSource(newData.message);
    }
    imageQuery();
  }  

  if (data) {
    const results = Object.keys(data);
    console.log('data', data);
    console.log(results.length);
    return (
      <Layout>
      <div>                
        <div className='main'>
          <div className='listDisplay'>

            <div className='listWrapper'>
              <ul  className='breedsList'>
                {results.map(function(dogName, index){
                return (
                  <li key={index}>
                    <button onClick={() => updateImage(dogName)}>
                    {dogName.charAt(0).toUpperCase()}{dogName.slice(1)}
                    </button>
                  </li>)
                })}
              </ul>
            </div>

            <div className='imageDisplay'>
              <img src={defaultImage} style={{ display: !imageSource ? 'block' : 'none' }} 
              className='defaultImage' alt="No images loaded" />
              
              <img src={imageSource} 
                onError={
                  image => {
                    image.target.src = sorry;
                  }}                  
                style={{ display: imageSource ? 'block' : 'none' }} 
              className='pooch'
              alt="pooch image" />
            </div>
          </div>
        </div>

        <div>
          <a href={homePage}>[Home]</a>
        </div>

      </div>
      </Layout>
    )
  } else {
    return (
      <Layout>
      <div className='sorry'>
        <img src={sorry} alt="Sorry! We are experiencing techincal difficilties. Please stand by..." />
      </div>
      </Layout>  
    );
  }  
}