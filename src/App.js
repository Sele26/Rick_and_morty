import  { useState , useEffect} from 'react';
import Cards from './component/Cards/Cards.jsx';
import About from './component/About/About.jsx';
import Detail from './component/Detail/Detail.jsx';
import Favorites from './component/Favorites/Favorite.jsx';
import Nav from './component/Nav/Nav.jsx';
import Form from './component/Form /Form.jsx';
import {Routes, Route, useLocation, useNavigate} from 'react-router-dom';


const URL = 'https://rickandmortyapi.com/api/character/'

function App() {
   const [characters, setCharacters] = useState([]);

   const [ access, setAccess ] = useState(false);

   const location = useLocation();
   const navigate = useNavigate();


   // Falso
   const EMAIL = 'sele.rulo@hotmail.com';
   const PASSWORD = '123456';

   useEffect(() => {
      !access && navigate('/');
   }, [access]);

   const [userData, setUserData] = useState({email:'',password:''});
   function login(userData) {
      
      if (userData.password === PASSWORD && userData.username === EMAIL) {
         setAccess(true);
         navigate('/home');
      }
   }
   const onSearch = async (id) => {
      try {
         const response = await fetch(`${URL}${id}`);
         const data = await response.json();
         setCharacters([...characters, data]);
      } catch (error) {
         console.log('error', error);
      }
   }
   const onClose = (id) => {
      const personajesFiltrados = characters.filter((character) => character.id !== id);
      setCharacters(personajesFiltrados);
   }
   const handleChange = (e) =>{
      const {name, value} = e.target;
      setUserData({
         ...userData,
         [name]:value,

      });
   };
   return (
      <div className='App'>
         { 
            location.pathname !== '/' ?
            <Nav onSearch={onSearch} /> :
            undefined
         }
         <Routes>
            <Route path='/' element={<Form login={login} />}/>
            <Route path='/favorites' element={<Favorites/>}/>
            <Route path='/home' element={<Cards characters={characters}onClose={onClose}/>}/>
            <Route path='/about' element={<About/>}></Route>
            <Route path='/detail/:id' element= {<Detail />} />
         </Routes>
      </div>
   );
}

export default App;