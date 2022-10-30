import {BrowserRouter} from 'react-router-dom'
import AppRouter from './routes';

function Apps(props) {
  return (
    <BrowserRouter>
      <AppRouter/>
    </BrowserRouter>
  )
}

export default Apps;