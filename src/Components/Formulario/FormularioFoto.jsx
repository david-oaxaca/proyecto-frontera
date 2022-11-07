import React, {useState} from 'react';
import {Formik, Form, Field} from 'formik';
import {
	ref,
	uploadBytes
  } from "firebase/storage";
  import { storage } from "../firebase";
  import { v4 } from "uuid";


import '../../Assets/Styles/formulario.scss';
/* eslint-disable */
let foto = null;
let zona = null;
/* eslint-enable */
const Formulario = () => {
	const [formularioEnviado, setFormularioEnviado] = useState(false);
	const [imageUpload, setImageUpload] = useState(null);

	const uploadFile = () => {
		if (imageUpload == null) return;
		const imageRef = ref(storage, `Imagenes_${zona}/${imageUpload.name + v4()}`);
		uploadBytes(imageRef, imageUpload);
	};

	return (
		
		<>
		
		<Formik 
		    initialValues={{
				categoria:"",
				foto: ""
			}}

			validate={(valores)=>{
				let errores = {};

				if(!valores.foto){
					errores.foto = 'Por favor ingresa una foto'
				}
				return errores;
			}}
			onSubmit = { async (valores, {resetForm}) => {
				resetForm();
				zona = valores.categoria;
				setFormularioEnviado(true);
				uploadFile();
			}}
		>
			{({errors,setFieldValue,valores,handleChange}) => (
				<Form className="formulario">
					<div className='formulatio-title'>
                        <h1>Sube una foto!</h1>
                    </div>

					<div>
						<label htmlFor="zona">Zona</label>
						<Field name = "categoria" className="categoria" as="select">
							<option value="">Selecciona una Zona</option>
							<option value="Reserva de la Biosfera Tehuacán-Cuicatlón">Tehuacán - Cuicatlán</option>
							<option value="Reserva Ecológica Cuxtal">Reserva Ecológica Cuxtal</option>
							<option value="Reserva de la Biosfera Sierra Gorda">Sierra Gorda</option>
						</Field>
						<label htmlFor="foto">Foto</label>
						<Field
							type="file"
							name="foto"
							id = "foto"
							accept=".jpeg, .png, .jpg"
							onChange = { async (e) => {handleChange(e)
								setImageUpload(e.target.files[0]);
								foto =  e.target.files[0]
								}
							}
						/>
					</div>

					<button type="submit">Enviar</button>
					{formularioEnviado && <p className='exito'>Formulario enviado con exito!</p>}
				</Form>
			)}
		</Formik>
		</>
	);
}
export default Formulario;