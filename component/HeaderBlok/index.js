 import s from './header.module.css'

const Header = ({title,descr}) => {
return(

//<div>
//<div>

//  <h1 className={s.header}>{title}</h1>
//   <p className={s.parag}>{ndescr}</p>

//</div>
//  </div>
 <header className={s.root}>
   <div className={s.forest}></div>
 <div className={s.container}>
       <h1>{title}</h1>
     <p>{descr}</p>
   </div>
</header>
);
}

export default Header;
