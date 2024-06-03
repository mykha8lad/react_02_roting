import './App.css'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import ExerciseFourModuleOne from './ModuleOne/ExerciseFour';
import ExerciseOne from './ModuleTwo/ExerciseOne';
import ExerciseTwo from './ModuleTwo/ExerciseTwo';
import ExerciseThree from './ModuleTwo/ExerciseThree';
import ExerciseFourModuleTwo from './ModuleTwo/ExerciseFour';

function App() {
  return (
    <BrowserRouter>
        <header>
            <nav>        
                <p className='module-style'>Module 1</p>
                <Link to='/module-one-exercise-four'>Exercise 4</Link> 
                <p className='module-style'>|</p>
                <p className='module-style'>Module 2</p>   
                <Link to='/module-two-exercise-one'>Exercise 1</Link>
                <Link to='/module-two-exercise-two'>Exercise 2</Link>
                <Link to='/module-two-exercise-three'>Exercise 3</Link>
                <Link to='/module-two-exercise-four'>Exercise 4</Link>
            </nav>
        </header>
        <Routes>  
            <Route path='/module-one-exercise-four' element={<ExerciseFourModuleOne />}>
            </Route>
            <Route path='/module-two-exercise-one' element={<ExerciseOne />}>
            </Route>
            <Route path='/module-two-exercise-two' element={<ExerciseTwo />}>
            </Route>
            <Route path='/module-two-exercise-three' element={<ExerciseThree />}>
            </Route>
            <Route path='/module-two-exercise-four' element={<ExerciseFourModuleTwo />}>
            </Route>
        </Routes>
    </BrowserRouter>
  )
}

export default App
