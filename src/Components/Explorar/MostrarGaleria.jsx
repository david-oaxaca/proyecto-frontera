import {useEffect, useState} from 'react';
import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import {
  ref,
  getDownloadURL,
  listAll,
} from "firebase/storage";
import { storage } from "../firebase";
import '../../Assets/Styles/gallery.scss';

function Gallery(props) {
	const [imageUrls, setImageUrls] = useState([]);
	const aux = props.destino.toString();
	useEffect(() => {
		listAll(ref(storage, "Imagenes_" + aux)).then((response) => {
		  response.items.forEach((item) => {
			getDownloadURL(item).then((url) => {
			  setImageUrls((prev) => [...prev, url]);
			});
		  });
		});
		// eslint-disable-next-line react-hooks/exhaustive-deps
	  }, []);

  return (
		<>
			<div className = "gallery">
				{imageUrls && 
				imageUrls.slice(0, imageUrls.length/2).map((imageZone)=>{

					return(
						<div className='pics'>
							<img src = {imageZone} style = {{width: '100%'}} alt = "."/>
						</div>
					)

				})}
			</div>
		</>
  );
}

export default Gallery;
