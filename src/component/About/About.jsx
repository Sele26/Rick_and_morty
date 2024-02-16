//import styles from './about.module.css'
import img from './Yo.jpeg';

const About = () =>{
    
    return(
        <div >
            <div >
                <h2 >Hola mi nombre es Selene Gonzalez y cree este proyecto justo a SOYHENRY </h2>
                <p></p>
            </div>
            <div>
                <img src={img} alt="Yo" height={350} width={350}/>
            </div>
        </div>
    )
}
export default About;