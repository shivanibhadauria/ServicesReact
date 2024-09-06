import { useState } from "react"
import Data from "./Data"

export default function Delete({onDelete}){
   
    return(<>
    <div className="text-red-800 transition ease-in-out delay-150 cursor-pointer shadow-2xl bg-black p-2 rounded-lg font-bold"  onClick={onDelete}  >Delete</div>
    </>)
}