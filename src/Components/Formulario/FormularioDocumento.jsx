import React, {useState} from 'react';
import {Formik, Form, Field} from 'formik';
import {
	ref,
	uploadBytes
  } from "firebase/storage";
  import { storage } from "./firebase";
  import { v4 } from "uuid";


import '../../Assets/Styles/formulario.scss';

let zona = null;

const Formulario = () => {
	const [formularioEnviado] = useState(false);
	const [DocUpload, setDocUpload] = useState(null);

	const uploadFile = () => {
		if (DocUpload == null) return;
		const imageRef = ref(storage, `Documentos_${zona}/${DocUpload.name + v4()}`);
		uploadBytes(imageRef, DocUpload);
	};

	return (
		
		<>
		
		<Formik 
		    initialValues={{
				categoria:"",
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
				zona = valores.categoria;
				uploadFile();
			}}
		>
			{({errors,setFieldValue,valores,handleChange}) => (
				<Form className="formulario">
					<div className='formulatio-title'>
                        <h1>Sube un Documento!</h1>
                    </div>

					<div>
						<label htmlFor="zona">Zona</label>
						<Field name = "categoria" className="categoria" as="select">
							<option value="">Selecciona una Zona</option>
							<option value="Reserva de la Biosfera Tehuacán-Cuicatlón">Tehuacán - Cuicatlán</option>
							<option value="Reserva Ecológica Cuxtal">Reserva Ecológica Cuxtal</option>
							<option value="Reserva de la Biosfera Sierra Gorda">Sierra Gorda</option>
						</Field>
						<label htmlFor="file">File</label>
						<Field
							type="file"
							name="file"
							id = "file"
							accept=".pdf"
							onChange = { async (e) => {handleChange(e)
								console.log(e.target.files[0]);
								setDocUpload(e.target.files[0]);
				
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