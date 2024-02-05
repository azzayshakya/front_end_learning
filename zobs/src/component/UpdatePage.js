import React from "react";

const UpdatePage=({UpdateJob})=>{
    // console.log("UpdatePage", UpdateJob);

    // Check if UpdateJob is defined

    if (!UpdateJob) {
        return <div>No data available for update</div>;
    }
    // Log UpdateJob for debugging

    
return (<div>
    
    <ul>
        
        <li>User Id: {UpdateJob._id}</li>
      
    </ul>

    </div>)
}
export default UpdatePage;