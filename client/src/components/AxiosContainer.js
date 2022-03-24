import useAxios from 'axios-hooks'
import Card from './Card'

// This component is where we are handle like loading/Error UI
// const Users = (props)=>{
    const AxiosContainer = ({title,loading, error,children})=>{

    const renderBody = ()=>{
        if(loading)return <p style={{color:'pink'}}>Loading BETTER SPINNER</p>
        if(error)return <p>Error</p>
         return children
    }
    return (
        <Card>
           <h1>{title}</h1>
           {renderBody()}
        </Card>
    )
}

export default AxiosContainer