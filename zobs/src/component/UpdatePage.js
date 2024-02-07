import React from "react";

const UpdatePage=({UpdateJob})=>{
    if (!UpdateJob) {
        return <div>No data available for update</div>;
    }
    
return (<div>
    
    <ul>
        
        <li>User Id: {UpdateJob._id}</li>
      
    </ul>

    </div>)
}
export default UpdatePage;