import React from 'react'

const Navbar = (props) => {
    console.log(props);

    function changeTheme() {
    //    console.log('Theme change',theme);
       props.settheme('Dark')


    }
    
  return (
    <div>
      {/* <p>{props.settheme}</p> */}
      <button onClick={changeTheme}>
        Change Theme
        </button>
    </div>
  )
}

export default Navbar
