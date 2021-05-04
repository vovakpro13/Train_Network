import s from './job.module.css'
const Job =({description}) => {
    return description
        ? <div className={s.looking}>{description}</div>
        :<div className={s.notLooking}>not looking for job</div>
};

export default Job;