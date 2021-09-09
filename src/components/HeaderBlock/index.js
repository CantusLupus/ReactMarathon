import s from './style.module.css'

const HeaderBlock = (props) => {
  return (
    <header className={s.root}>
      <div className={s.container}>
        <h1 className={s.title}> { props.title } </h1>
        <p className={s.desc}>{ props.desc }</p>
      </div>
    </header>
  )
}

export default HeaderBlock;