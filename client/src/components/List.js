// I am expecting this component to get passed an array of data

import StringifyJSON from "./StringifyJSON"

// list is an array:any
const List = ({list, renderItem})=>{
    const renderList = ()=>{

        // if i don't render Item ill default to Json.stringfy
        if(!renderItem){
            return <StringifyJSON data={list}/>
        }
        /* give it a function to tell me how to render 1 thing*/
        return list.map(renderItem)
    }
    return(
        <div>
           <p>you have {list.length} things in your list</p>
           {renderList()}
        </div>
    )
}

export default List