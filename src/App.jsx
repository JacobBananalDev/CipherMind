import FetchButton from "./components/fetchButton/fetchButton"
import Input from "./components/Input/Input"
import Suggestion from "./components/suggestion/suggestion"

function App() {

  return (
    <div className="w-screen min-h-screen bg-blue-800 p-4">
      <h1 className="text-2xl font-bold text-center">CipherMind AI</h1>
      <div className="mt-6 max-w-4xl mx-auto">
        <Input/>
        <FetchButton/>
        <Suggestion/>
      </div>
      {/* <div className="mt-6 max-w-4xl mx-auto">
        <Input/>
        <Suggestion/>
      </div> */}
    </div>
  )
}

export default App
