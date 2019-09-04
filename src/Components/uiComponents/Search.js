import React, { useEffect} from 'react';



const Search = (props) => {

  useEffect(() => {
  },[])
  
  let searchInput = React.createRef();

  
  
  const handleSubmit = () => {
    console.log(searchInput.current.value);    
  }
 
  
  return (
    <div>
      <form className="form __search" onSubmit={handleSubmit}>
        <input
          onChange={handleSubmit} 
          type="text" value="Search" placeholder="Search"
          ref={searchInput}

         />
      </form>
    </div>
  )
}

export default Search
