

import s from './La.module.css'

const Layout = ({id,title,descr,urlBg,colorBg}, ...props)=>{



const sectiStyle = {};

if (urlBg){
  sectiStyle.backgroundImage = `url(${urlBg})`
}

if (colorBg){
  sectiStyle.backgroundColor = colorBg
}

return(

  <section
  className={s.root}
  id={id}
  style = {sectiStyle}>
    <div
    className={s.wrapper}>
        <article>
            <div className={s.title}>
                <h3>{title}</h3>
                <span className={s.separator}></span>
            </div>
            <div className={`${s.desc} ${s.full}`}>
                <p>{descr}></p>
            </div>
        </article>
    </div>
</section>
)}
export default Layout;
