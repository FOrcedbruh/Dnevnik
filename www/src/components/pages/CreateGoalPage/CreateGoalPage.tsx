import styles from './CreateGoalPage.module.css';
import { useState, useEffect } from 'react';
import Tooltip from '@mui/material/Tooltip';
import addIcon from './../../../icons/add-outline.svg';
import GoalType from '../../types/GoalType';
import { useAppDispatch, useAppSelector } from '../../../hooks/StoreHook';
import { addGoal } from '../../../store/reducers/CreateGoalSlice';
import { Link } from 'react-router-dom';



const Colors = {
    dayColor: '#86C2FA',
    weekColor: '#1658BC',
    monthColor: '#1A16D4',
    yearColor: '#0A077D'
}


const CreateGoalPage: React.FC = () => {


    const { Goals } = useAppSelector(state => state.CreateGoalSlice);
    const dispatch = useAppDispatch();

    const [period, setPeriod] = useState<string>('Day');

    const onChangePeriod = (e: React.ChangeEvent<HTMLInputElement>) => {
       setPeriod(e.target.value);
    }


    const [title, setTitle] = useState<string>('');


    const onChangeTitle = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setTitle(e.target.value);
    }



    const [viewBtn, setViewBtn] = useState<boolean>(false);

    useEffect(() => {
        if (title && period) {
            setViewBtn(true);
        } else {
            setViewBtn(false);
        }
    }, [title, period]);


    const AddGoalHandler = () => {
        const data: GoalType = {
            title,
            period,
            id: Goals.length
        }
        dispatch(addGoal(data));
        console.log(Goals)
    }


    return (
        <section className={styles.window} style={{'backgroundColor': `${period === 'Day' && Colors.dayColor 
        || period === 'Week' && Colors.weekColor
        || period === 'Month' && Colors.monthColor
        || period === 'Year' && Colors.yearColor}`}}>
            <textarea value={title} onChange={e => onChangeTitle(e)} placeholder='Just begin typing...' cols={20} style={{'color': `${period === 'Month' && '#fff' 
            || period === 'Day'  && '#000' 
            || period === 'Week'  && '#000'
            || period === 'Year'  && '#fff'}
            `}}/>
            <div>
                <Tooltip title='First letter is uppercase(Day, Week...)' followCursor placement='top'>
                    <div className={styles.period}>
                        <p>goal for the</p>
                        <input type="text"  value={period} onChange={(e) => onChangePeriod(e)}/>
                    </div>
                </Tooltip>
                <button className={`${styles.createBtn} ${viewBtn && styles.viewBtn}`} onClick={AddGoalHandler}>
                    <Link to='/'>
                        <img src={addIcon}/>
                    </Link>
                    
                </button>
            </div>
        </section>
    )
}

export default CreateGoalPage;