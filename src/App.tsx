//  import BasicTypes from "./typescript/BasicTypes.tsx";

import Counter from "./components/counter";
import { AuthProvider } from "./context/AuthContext";
import BasicFuctions from "./typescript/BasicFunctions";

//import ObjectLiterals from "./typescript/ObjectLiterals";

function App() {
  return (
    
    <AuthProvider> 

<div className="flex flex-col justify-center items-center h-svh ">
        {/* <BasicTypes/> */}
        {/*<ObjectLiterals/>*/}
        {/*<BasicFuctions/>*/}
        {/* <Counter />  */}


      </div>
    </AuthProvider>
      
    
  );
}

export default App;
