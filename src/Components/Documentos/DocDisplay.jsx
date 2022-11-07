import React, {useEffect, useState} from 'react';
import '../../Assets/Styles/documents.scss';
import MenuSVG from './MenuSVG';
// Firebase imports
import {
    ref,
    getDownloadURL,
    listAll,
  } from "firebase/storage";
import { storage } from "../firebase";
//react-pdf and plugins imports
import { Worker, Viewer, SpecialZoomLevel } from '@react-pdf-viewer/core'; 
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import '@react-pdf-viewer/core/lib/styles/index.css';

const DocDisplay = (props) => {
    // Create new plugin instance
    const defaultLayoutPluginInstance = defaultLayoutPlugin();
    // Props consts
    const location = props.location;
    const type = props.type;

    const [pdfsUrls, setPdfUrls] = useState([]);
	const pdfListRef = ref(storage, "Documentos_" + location + "/" + type);

	useEffect(() => {
		listAll(pdfListRef).then((response) => {
		  response.items.forEach((item) => {
        getDownloadURL(item).then((url) => {
          setPdfUrls((prev) => [...prev, url]);
        });
		  });
		});
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);    

    return(
        <div className='doc-container'>
            <h1>{location}</h1>
            <h2>{type}</h2>
            {/* show pdf conditionally (if we have one)  */}
            {pdfsUrls && pdfsUrls.slice(0, pdfsUrls.length).map((docZone)=>(
                <div className='pdf-display'>
                    <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.15.349/build/pdf.worker.min.js" >
                        <Viewer 
                          fileUrl={docZone} 
                          defaultScale={SpecialZoomLevel.PageFit}
                          plugins={[defaultLayoutPluginInstance]} 
                        />
                    </Worker> 
                </div>
			))}
            
            {!pdfsUrls.length === 0 && <div className='pdf-display'>
                No pdf file selected
            </div>}
            
            <div className='doc-option' onClick={() => props.handleType('')}>
                <MenuSVG />
                Volver a las opciones
            </div> 
        </div>
        
    );
}

export default DocDisplay;