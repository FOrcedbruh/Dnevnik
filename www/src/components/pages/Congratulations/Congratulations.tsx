import { useAppSelector } from '../../../hooks/StoreHook';
import styles from './Congratulations.module.css';
import { useParams, Link } from 'react-router-dom';
import AddIcon from './../../../icons/add-outline.svg';



const Congratulations: React.FC = () => {

    const { Goals } = useAppSelector(state => state.CreateGoalSlice);

    const { id } = useParams();

    const numberID: number = Number(id);

    const goal = Goals[numberID];


    return (
        <section className={styles.window}>
            <div>
                <h2>
                    CONGRATULATIONS <br /><br /> YOU DID IT
                </h2>
                <p>
                    {goal.title}
                </p>
            </div>
            <section>
                next goal? <button><Link to='/create_goal'><img src={AddIcon}/></Link></button>
            </section>
        </section>
    )
}

export default Congratulations;