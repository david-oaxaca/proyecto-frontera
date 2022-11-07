import {useEffect, useState} from 'react';
import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import {
  ref,
  getDownloadURL,
  listAll,
} from "firebase/storage";
import { storage } from "../firebase";
import "./buscador.css";

function Buscador(props) {
	const [imageUrls, setImageUrls] = useState([]);
	const imagesListRef = ref(storage, "Imagenes_" + props.destino.toString());

	useEffect(() => {

		listAll(imagesListRef).then((response) => {
		  response.items.forEach((item) => {
			getDownloadURL(item).then((url) => {
			  setImageUrls((prev) => [...prev, url]);
			});
		  });
		});
	  }, []);

  return (

		<div class = "card-container">
			{imageUrls && 
			imageUrls.slice(0, imageUrls.length/2).map((imageZone)=>(
				<Card sx={{ maxWidth: 500, maxHeight: 400, margin: 3}}>
					<CardActionArea>
						<CardMedia
						component="img"
						image={imageZone}
						alt="green iguana"
						/>
					</CardActionArea>
				</Card>
			))}
		</div>
  );
}

export default Buscador;