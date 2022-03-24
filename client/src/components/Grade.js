// ONE GRADE 
// {"id":1,
// "score":36,
// "user":{
//      "id":1,
//      "name":"Frederick Rutherford III",
//      "created_at":"2022-03-21T18:12:10.501Z",
//      "updated_at":"2022-03-21T18:12:10.501Z"
//     },
// "skill":{
//     "id":1,
//     "name":
//     "ruby",
//     "description":"Syntaz Sugar",
//     "created_at":"2022-03-21T18:12:10.318Z",
//     "updated_at":"2022-03-21T18:12:10.318Z"}
// }

import Card from "./Card"

const Grade = ({id,score,user,skill}) =>{
    return (
        <Card>
            <h1>User: {user.name} ID:{user.id}</h1>
            <h1>Skill: {skill.name} ID:{skill.id}</h1>
            <p>Score: {score}</p>
            <p>grade id: {id}</p>
        </Card>
    )
}

export default Grade