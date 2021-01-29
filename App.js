import Bg1img from './asset/bg1.jpg'
import Bg2img from './asset/bg2.jpg'
import Header from './component/HeaderBlok';
import Layout from './component/Layout';
import Footer from './component/Footer';


const App = () => {
  return (
  <>
 < Header
        title="Pacemon-Gema"
         descr="Start"/>
 < Layout
          title="Layout"
          descr="Layout descript1"
          id="im1"
          urlBg={Bg1img}>

</Layout>

 < Layout
      title="Layout"
      id="im2"
      descr="Layout descript2"
      colorBg="#202736">

      </Layout>
< Layout
        title="Layout"
        id="im3"
        descr="Layout descript3"
        urlBg={Bg2img}>


        </Layout>
 < Footer/>
 </>
);
}
export default App;
