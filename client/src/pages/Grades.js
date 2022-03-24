import useAxios from 'axios-hooks'
import AxiosContainer from '../components/AxiosContainer';
import Grade from '../components/Grade';
import List from '../components/List';
import useAxiosOnMount from '../hooks/useAxiosOnMount';

const Grades = ()=>{
    // const [{ data:grades, loading, error }, refetch] = useAxios('/api/grades/all_yo');
    const {data:grades, loading, error } = useAxiosOnMount('/api/grades/all_yo');

    // what am I expecting param to be
    // {id:Number, score:, user:{id,name}, skill:{id,name}}
    const renderOneGrade = (gradeObj)=>{
        return <Grade {...gradeObj}/>
    }
    return (
        <AxiosContainer title={'Grades'} loading={loading} error={error}>
            <List list={grades} renderItem={renderOneGrade} />
        </AxiosContainer>
    )
}

export default Grades