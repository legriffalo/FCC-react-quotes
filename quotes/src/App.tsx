import { useState,useEffect } from 'react'
import Quote from './assets/components/Quote.tsx';
import Footer from './assets/components/footer.tsx';
import './App.css'

function App() {

  const fetchPosts = async () => {
    try {
      const response = await fetch(srcUrl);
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const data = await response.json();
      const quoteLen = Object.keys(data["quotes"]).length
      const rand = Math.floor(Math.random()*quoteLen);
      return data["quotes"][rand]
    } 

    catch (error) {
      console.log(error instanceof Error ? error.message : 'Something went wrong');
    } finally {}
  };

  const stateChange = ()=>{
    fetchPosts().then((response)=>{setQuote(response)})
  }

  const srcUrl = 'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json'
  const [quote, setQuote] = useState({"quote":"I am great","author":"Grif"})

  useEffect(() => {
    stateChange()
  },[])

  return (
    <>
    <div className="flex flex-row items-center justify-center 
  bg-[url('https://img.freepik.com/free-vector/grey-hexagons-black-background_78370-2098.jpg')] h-full w-full">

      <div id="quote-box" className="card bg-black border w-2/3 h-2/5">
        <Quote id="quote" text={quote["quote"]} author={quote["author"]} onClick={stateChange} />

      </div>
      <Footer />
    </div>
    </>
  )
}

export default App
