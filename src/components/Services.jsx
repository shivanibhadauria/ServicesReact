
import { BsThreeDots } from "react-icons/bs";
import Delete from "./Delete";
import { useState } from "react";
import Data from "./Data";


export default function Services() {
const [opendelete , setopenDelete ] = useState(null) 



function handleOpenDelete(i){
    setopenDelete(opendelete == i ? null : i)
 
  
}

function handleDelete(i){
    Data.splice(i,1);
    setopenDelete(null);
    

}



  return (
    <>
      <div className="bg-gradient-to-r from-slate-900 to-slate-700  h-auto w-screen">
        <div className="border-2 h-full w-full overflow-y-hidden border-black p-8 flex flex-col gap-4">
         
          <div className="flex items-center text-white border-2 border-white p-4 font-bold">
            <div className="flex-1">Name</div>
            <div className="flex-1">Sub Domain</div>
            <div className="flex-1">Port(s)</div>
            <div className="flex-1">Last Update</div>
            <div className="flex-1">Status</div>
            <div className="flex-1">Provider</div>
          </div>

          
{Data.map((e , i)=>{
    return<>
   
      <div key={i} className="flex transition ease-in-out delay-150 items-center text-white p-4 border-2 border-white">
            <div className="flex-1 flex items-center">
                <div>{e.logo}</div>
              
              <div>
                <p>{e.name}</p>
                <p className="text-gray-400">{e.subname}</p>
              </div>
            </div>
            <div className="flex-1">{e.subDomain}</div>
            <div className="flex-1 m-4">{e.port}</div>
            <div className="flex-1">{e.lastUpdate}</div>
            <div className="flex-1">{e.status}</div>
            <div className="flex-1">
              {e.provider}
            </div>
            
            { opendelete == i && <div className="mr-4"><Delete  onDelete={()=>{handleDelete(i)}}  className="m-2" /></div> } 
            
            <div onClick={()=> {handleOpenDelete(i)}}  >
            
                <BsThreeDots className=" hover:scale-125 " />

                

                
            </div>
            
           
          </div>
    
    
    
    
    </>
})}




















         
        </div>
      </div>
    </>
  );
}