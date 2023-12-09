import React from 'react'
import { useState } from 'react'

const Translator = () => {

    const [inputText, setInputText]=useState("")
    const [targetLang, setTargetLang]=useState("")

    const handleSubmit=(e=>{
        e.preventDefault()
        const encodedParams = new URLSearchParams();
        encodedParams.append("q", inputText);
        encodedParams.append("target", targetLang);
        encodedParams.append("source", "en");

        const options = {
	        method: 'POST',
	        headers: {
		        'content-type': 'application/x-www-form-urlencoded',
		        'Accept-Encoding': 'application/gzip',
		        'X-RapidAPI-Key': '604c561820mshcbe9b299449bf67p14763cjsn6d6691cc82fb',
		        'X-RapidAPI-Host': 'google-translate1.p.rapidapi.com'
	        },
	        body: encodedParams
        };

        fetch('https://google-translate1.p.rapidapi.com/language/translate/v2', options)
	        .then(response => response.json())
	        .then(response => console.log(response))
	        .catch(err => console.error(err));
    })

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="inputText" value={inputText} onChange={(e)=>setInputText(e.target.value)} /><br />
        <input type="text" name="targetLang" value={targetLang} onChange={(e)=>setTargetLang(e.target.value)} /><br />
        <input type="submit" value="TRANSLATE" />
      </form>
      
    </div>
  )
}

export default Translator
