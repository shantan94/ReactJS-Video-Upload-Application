import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
// import registerServiceWorker from './registerServiceWorker';
import VideoUpload from './components/video_upload';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const App1=()=>{
	return (
	<div>
		<VideoUpload />
	</div>
	);
}

ReactDOM.render(<App1 />,document.getElementById('root'));