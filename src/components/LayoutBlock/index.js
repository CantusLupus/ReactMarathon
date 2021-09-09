import s from "./style.module.css";

const LayoutBlock = ({title, desc, urlBg, colorBg='red'}) => {
  const layoutStyle = urlBg ? {backgroundImage: `url(${urlBg})`}:{background: `${colorBg}`};
  
  return (
    <section className={s.root} style={layoutStyle}>
      <div className={s.wrapper}>
        <article className={s.article}>
          <div className={s.title}>
            <h3>{title}</h3>
            <span className={s.subtitle}></span>
          </div>
          <div className={`${s.desc}, ${s.full}`}>
            <p className={s.desc}>{desc}</p>
          </div>
        </article>
      </div>
    </section>
  );
}

export default LayoutBlock;