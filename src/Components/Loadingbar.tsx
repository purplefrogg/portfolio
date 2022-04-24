import style from './Loadingbar.module.scss'

const Loadingbar = () => {
  return (
    <div className={style.loadingBar__wrap}>
      <div className={style.loadingBar}>
        <div className={style.loadingBar__wrap_2}></div>
      </div>
    </div>
  )
}

export default Loadingbar
