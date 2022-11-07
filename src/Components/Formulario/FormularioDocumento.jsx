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
let tipo = null;
/* eslint-enable */
const Formulario = () => {
	const [formularioEnviado, setFormularioEnviado] = useState(false);
	const [imageUpload, setImageUpload] = useState(null);

	const uploadFile = () => {
		if (imageUpload == null) return;
		const imageRef = ref(storage, `Documentos_${zona}/${tipo}/${imageUpload.name + v4()}`);
		uploadBytes(imageRef, imageUpload);
	};

	return (
		
		<>
		
		<Formik 
		    initialValues={{
				categoria:"",
				tipo:"",
				file: ""
			}}

			validate={(valores)=>{
				let errores = {};

				if(!valores.file){
					errores.file = 'Por favor ingresa una foto'
				}
				return errores;
			}}
			onSubmit = { async (valores, {resetForm}) => {
				resetForm();
				console.log(valores);
				zona = valores.categoria;
				tipo = valores.tipo;
				setFormularioEnviado(true);
				uploadFile();
			}}
		>
			{({handleChange}) => (
				<Form className="formulario">
					<div className='formulatio-title'>
                        <h1>Sube un Documento!</h1>
                    </div>

					<div>
						<label htmlFor="zona">Zona</label>
						<Field name="categoria" className="categoria" as="select">
							<option value="">Selecciona una Zona</option>
							<option value="Reserva de la Biosfera Tehuacán-Cuicatlán">Tehuacán - Cuicatlán</option>
							<option value="Reserva Ecológica Cuxtal">Reserva Ecológica Cuxtal</option>
							<option value="Reserva de la Biosfera Sierra Gorda">Sierra Gorda</option>
						</Field>
						<label htmlFor="tipo">Tipo</label>
						<Field name="tipo" className="categoria" as="select">
							<option value="">Selecciona una tipo de documento</option>
							<option value="Documentos oficiales del ANP">Documentos oficiales del ANP</option>
							<option value="Mapa de inventario turistico">Mapa de inventario turistico</option>
							<option value="Mapa de rutas turisticas">Mapa de rutas turisticas</option>
						</Field>
						<label htmlFor="file">File</label>
						<Field
							type="file"
							name="file"
							id = "file"
							accept=".pdf"
							onChange = { async (e) => {handleChange(e)
								console.log(e.target.files[0]);
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