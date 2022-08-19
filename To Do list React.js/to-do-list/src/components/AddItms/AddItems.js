import React from "react"
export default  function AddItems(){
    return(
        <>
            <h2 className="title">Add Items</h2>
        <form  className="form-inline mb-3">
          <input type="text" className="form-control mr-2"/>
          <input type="submit" className="btn btn-dark" value="Submit"/>
        </form>
        </>
    )
}