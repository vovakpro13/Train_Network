import User from "./User/User.jsx";
import s from "./users.module.css"
import Preloader from "../common/Preloader/Preloader";
import left from '../../assets/svg/left-arrow.svg';
import right from '../../assets/svg/right-arrow.svg';
import React from "react";

const Users = (props) => {
    const {
        totalUsers, pageSize, currentPage,
        setPagesSlide, pages, isFetching, changeInputValue
    } = props;

    const slide = React.createRef();

    const pagesCount = Math.ceil(totalUsers / pageSize);
    const totalSlides = Math.ceil(pagesCount / pages.countPages);
    const start = pages.currentSlide * pages.countPages + 1;
    const end = start + pages.countPages;

    const pagesArray = [];
    for (let i = start; i <= end; i++) {
        if (i <= pagesCount && i >= 1) {
            pagesArray.push(i)
        }
    }
    const onPressEnterSetPage = (e) => {
        if (e.key === 'Enter') {
            (pages.inputSlide <= totalSlides && pages.inputSlide >= 1)
                ? setPagesSlide(pages.inputSlide - 1)
                : changeInputValue(pages.currentSlide + 1)
        }

    };

    return (
        <div className={s.wrapper}>
            <div className={s.usersList}>
                {!isFetching ? props.users.map(user => <User key={user.id} user={user} follow={props.follow}
                                                             unfollow={props.unfollow}/>) : <Preloader/>}
            </div>
            <div className={s.pagesDiv}>
                <div className={s.pages}>
                    {start > 1 && <button
                        onClick={() => {
                            setPagesSlide(pages.currentSlide - 1);
                            changeInputValue(pages.currentSlide)
                        }}
                        className={`${s.pageButton} ${s.controlBtn}`}>
                        <img src={left} alt="left"/>
                    </button>
                    }
                    {

                        pagesArray.map(p => <button key={p} onClick={() => props.changePage(p)}
                                                    className={`${currentPage === p ? s.selected : s.simplePageBtn} ${s.pageButton}`}>{p}</button>)
                    }
                    {end < pagesCount && <button
                        onClick={() => {
                            setPagesSlide(pages.currentSlide + 1);
                            changeInputValue(pages.currentSlide + 2)
                        }}
                        className={`${s.pageButton} ${s.controlBtn}`}>
                        <img src={right} alt="right"/>
                    </button>}
                </div>
                <div className={s.pagesLog}>
                    <input
                        ref={slide}
                        type="number"
                        max={totalSlides}
                        min={1}
                        onChange={() => changeInputValue(slide.current.value)}
                        onKeyDown={(e) => onPressEnterSetPage(e)}
                        value={pages.inputSlide}/>
                    <div>/ {totalSlides}</div>
                </div>

            </div>
        </div>
    );

}

export default Users;