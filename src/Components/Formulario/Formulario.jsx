import React, {useState} from 'react';
import {Formik, Form, Field, ErrorMessage} from 'formik';
import {captura, getBase64FromUrl} from './Captura';
import '../../Assets/Styles/formulario.scss';

let foto = null;

const Formulario = () => {
	const [formularioEnviado] = useState(false);

	return (
		
		<>
		
		<Formik 
		    initialValues={{
				nombre: "",
				descripcion: "",
				foto: ""
			}}

			validate={(valores)=>{
				let errores = {};

				if(!valores.nombre){
					errores.nombre = 'Por favor ingresa un nombre'
				} else if(!/^[a-zA-Z]{1,40}$/.test(valores.nombre)){
					errores.nombre = 'Ingresa un nombre correcto'
				}

				if(!valores.descripcion){
					errores.descripcion = 'Por favor ingresa una descripcion'
				}

				if(!valores.foto){
					errores.foto = 'Por favor ingresa una foto'
				}
				return errores;
			}}
			onSubmit = { async (valores, {resetForm}) => {
				resetForm();
				valores.foto = foto;
				console.log(valores);
				captura(valores);
			}}
		>
			{({errors,setFieldValue,valores,handleChange}) => (
				<Form className="formulario">
					<div className='formulatio-title'>
                        <h1>Sube una foto!</h1>
                    </div>

                    <div>
						<label htmlFor="nombre">Nombre</label>
						<Field
							type="text"
							name="nombre"
							placeholder="Nombre"
							id="nombre"
						/>
						<ErrorMessage name="nombre" component={() =>(
							<div className = "error">{errors.nombre}</div>
						)}/>
					</div>

					<div>
						<label htmlFor="descripcion">Descripción</label>
						<Field
							type="text"
							name="descripcion"
							placeholder="Descripción"
							id="descripcion"
						/>
						<ErrorMessage name="descripcion" component={() =>(
							<div className = "error">{errors.descripcion}</div>
						)}/>
					</div>

					<div>
						<label htmlFor="foto">Foto</label>
						<Field
							type="file"
							name="foto"
							id = "foto"
							accept=".jpeg, .png, .jpg"
							onChange = { async (e) => {handleChange(e)
								foto =  await getBase64FromUrl(e.target.files[0])
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