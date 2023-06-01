import React, { ChangeEvent } from 'react'
type Props = {
    searchQuery:string ,
    onTextChange : (e: ChangeEvent<HTMLInputElement>) => void
}
const SearchBox = ({searchQuery , onTextChange}:Props) => {
  return (
    <div className='col col-sm-4'>
        <input
            type="text"
            className='form-control'
            placeholder='Search Movie By Title...'
            value={searchQuery}
            onChange={onTextChange}
        />
    </div>
  )
}

export default SearchBox