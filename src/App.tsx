import './App.css'
import UserPage from './components/UserPage'
//import Counter from './components/Counter'
// import LoginPage from './components/LoginPage'
import { AuthProvider } from './context/AuthContext'
// import BasicFunctions from './typescript/BasicFunctions'
//import ObjectLiterals from './typescript/ObjectLiterals'
//import BasicTypes from './typescript/BasicTypes'

function App() {
  return (
    <AuthProvider>
      <div className='flex flex-col items-center h-svh'>
        {/* <h1 className="text-3xl font-bold underline">
          Hello world!
        </h1> */}
        {/* <ObjectLiterals /> */}
        {/* <BasicFunctions /> */}
        {/*<BasicTypes />*/}
        {/* <Counter /> */}
        {/* <LoginPage /> */}
        <UserPage />
      </div>
    </AuthProvider>
  )
}

export default App