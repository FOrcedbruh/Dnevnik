import { useParams } from "react-router-dom";
import styles from './Goal.module.css';
import { useAppSelector } from "../../../hooks/StoreHook";


const Colors = {
    dayColor: '#86C2FA',
    weekColor: '#1658BC',
    monthColor: '#1A16D4',
    yearColor: '#0A077D'
}




const Goal: React.FC = () => {



    const { Goals } = useAppSelector(state => state.CreateGoalSlice);

    const { id } = useParams();

    const numberID = Number(id);

    console.log(numberID);

    const goal = Goals[numberID];

    return (
        <section className={styles.window} style={{'backgroundColor': `${goal.period === 'Day' && Colors.dayColor 
        || goal.period === 'Week' && Colors.weekColor
        || goal.period === 'Month' && Colors.monthColor
        || goal.period === 'Year' && Colors.yearColor}`}}>
            <div style={{'color': `${goal.period === 'Month' && '#fff' 
            || goal.period === 'Day'  && '#000' 
            || goal.period === 'Week'  && '#000'
            || goal.period === 'Year'  && '#fff'}
            `}}>
                {goal.title}
            </div>
            <section className={styles.period} >
               <p > Goal for the <br /> <span>{goal.period}</span> </p>
            </section>
        </section>
    )
}


export default Goal;