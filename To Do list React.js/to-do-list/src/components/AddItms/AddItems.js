import React from "react"
export default  function AddItems(){
    return(
        <>
            <h2 class="title">Add Items</h2>
        <form  class="form-inline mb-3">
          <input type="text" class="form-control mr-2"/>
          <input type="submit" class="btn btn-dark" value="Submit"/>
        </form>
        </>
    )
}