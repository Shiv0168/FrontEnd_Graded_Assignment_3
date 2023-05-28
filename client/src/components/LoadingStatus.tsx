import { Spinner } from 'react-bootstrap'
import loading from '../loading.gif'


export const LoadingStatus = () => {
  return (
    <div className='text-center'>
      <Spinner animation="border" role="status">
      <span className="visually-hidden">Loading...</span>
      </Spinner>
    </div>
  )
}
