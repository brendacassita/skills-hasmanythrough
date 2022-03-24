import useAxios from "axios-hooks";
import AxiosContainer from "../components/AxiosContainer";
import Card from "../components/Card";
import List from "../components/List";

const Users = () => {
  const [{ data: users, loading, error }, refetch] = useAxios("/api/users");

  return (
    <AxiosContainer title={"User"} loading={loading} error={error}>
      <List
        list={users}
        renderItem={(user) => {
          return (
            <Card key={user.id}>
              <h1>{user.name}</h1>
            </Card>
          );
        }}
      />
    </AxiosContainer>
  );
};

export default Users;