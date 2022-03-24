import useAxios from "axios-hooks";
import AxiosContainer from "../components/AxiosContainer";
import List from "../components/List";

const Skills = () => {
  // get back json data from server. AXios 'parse' to convert to JS Object
  const [{ data, loading, error }, refetch] = useAxios("/api/skills");

  return (
    <AxiosContainer title={"Skillsss"} loading={loading} error={error}>
      <List
        list={data}
        renderItem={(skill) => {
          return (
            <div style={{background:'red'}}>
              <h1>{skill.name}</h1>
            </div>
          );
        }}
      />
    </AxiosContainer>
  );
};

export default Skills;