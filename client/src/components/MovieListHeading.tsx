
type Props = {
  heading:string
}
const MovieListHeading = ({heading}:Props) => {
  return (
    <div className='col' style={{height:"5vh"}}>
        <h5>{heading}</h5>
    </div>
  )
}

export default MovieListHeading