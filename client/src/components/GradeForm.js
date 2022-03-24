import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useAxiosOnMount from "../hooks/useAxiosOnMount";
import List from "./List";
import {Form} from 'react-bootstrap'

const GradeForm = (props) => {
  const navigate = useNavigate();
  const [userId, setUserId] = useState("");
  const [skillId, setSkillId] = useState("");
  const [score, setScore] = useState("");
  const {
    data: users,
    loading: usersLoading,
    error: usersError,
  } = useAxiosOnMount("/api/users");
  const {
    data: skills,
    loading: skillsLoading,
    error: skillsError,
  } = useAxiosOnMount("/api/skills");

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log({ user_id: userId, skill_id: skillId, score });
    let grade = { user_id: userId, skill_id: skillId, score };
    try {
      // ADD TO DB STEP
      let res = await axios.post(`/api/grades`, grade);
      console.log(res.data);
      // navigate back to Grades
      navigate("/grades");
    } catch (err) {}
  };


  if (usersLoading || skillsLoading) return <p>loading</p>;

  return (
    <div>
      <h1>GradeForm</h1>
      <List
        list={users}
        renderItem={(t) => (
          <p>
            id:{t.id} name:{t.name}
          </p>
        )}
      />
      <List
        list={skills}
        renderItem={(t) => (
          <p>
            id:{t.id} name:{t.name}
          </p>
        )}
      />

      <form onSubmit={handleSubmit}>
        <p>user id:</p>
        <Form.Select aria-label="Default select example" onChange={(e) => setUserId(e.target.value)}>
          {users.map((user)=>{
              return(  <option value={user.id}>{user.name} id:{user.id}</option>)
          })}
        </Form.Select>
        <p>skill id:</p>
        <input value={skillId} onChange={(e) => setSkillId(e.target.value)} />
        <p>score </p>
        <input value={score} onChange={(e) => setScore(e.target.value)} />
        <button>add</button>
      </form>
    </div>
  );
};

export default GradeForm;