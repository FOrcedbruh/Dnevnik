import styles from './HomePage.module.css';
import { GoalsData } from '../../../GoalsData';
import addicon from './../../../icons/add-outline.svg';
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../hooks/StoreHook';
import closeIcon from './../../../icons/closeIcon.svg';
import { useState } from 'react';
import { removeGoal } from '../../../store/reducers/CreateGoalSlice';
import doneIcon from './../../../icons/doneIcon.svg';

const Colors = {
    dayColor: '#86C2FA',
    weekColor: '#1658BC',
    monthColor: '#1A16D4',
    yearColor: '#0A077D'
}




const HomePage: React.FC = () => {

    const { Goals } = useAppSelector(state => state.CreateGoalSlice);


    const dispatch = useAppDispatch();

    const [viewAct, setViewAct] = useState<boolean>(false);

    const viewActHandler = () => {
        setViewAct(true);
    }

    const viewActOutHandler = () => {
        setViewAct(false);
    }

    return (
        <section className={styles.window}>
            
            <div className={styles.btn}>
                <Link to='/create_goal'>
                    <img color='#fff' src={addicon}/>
                </Link>
            </div>
            <div className={styles.variants}>
                {Goals.length === 0 ? (GoalsData.map(item => {
                    return (
                        <article key={item.id} style={{'backgroundColor': `${item.color}`}}>
                            <p>goal for the <br /><span>{item.period}</span></p>
                        </article>
                    )
                })) : Goals.map(goal => {
                    return (
                        <article onMouseOut={viewActOutHandler} onMouseOver={viewActHandler} className={styles.goal} key={goal.id} style={{'backgroundColor': `${goal.period === 'Day' && Colors.dayColor 
                        || goal.period === 'Week' && Colors.weekColor
                        || goal.period === 'Month' && Colors.monthColor
                        || goal.period === 'Year' && Colors.yearColor}`}}>
                            <Link className={styles.link} to={`/${goal.id}`}>
                                <h3 className={styles.goalTitle}>{goal.title}</h3>
                                <h5>goal for the <span className={styles.goalPeriod}>{goal.period}</span></h5>
                            </Link>
                            <div className={styles.actions} style={{'opacity': `${viewAct ? 1 : 0}`}}>
                                <Link to={`congratulations/${goal.id}`}><img src={doneIcon} className={styles.doneIcon}/></Link>
                                <img src={closeIcon} onClick={() => dispatch(removeGoal(goal.id))}/>
                            </div>
                        </article>
                    )
                })}
            </div>
        </section>
    )
}



export default HomePage;