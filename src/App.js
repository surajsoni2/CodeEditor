import React,{useState,useEffect} from "react";
import Editor from "./components/Editor";
import useLocalStorage from "./usingLocalStorage";

function App() {
  const [html, setHtml] = useLocalStorage('html', '')
  const [css, setCss] = useLocalStorage('css', '')
  const [js, setJs] = useLocalStorage('js', '')
  const [srcDoc, setSrcDoc] = useState('')
  useEffect(() => {
    
  const timeout = setTimeout(() =>{
    setSrcDoc(`
    <html>
    <body>${html}</body>
    <style>${css}</style>
    <script>${js}</script>
    </html>
    `)
  },250)
  return ()=>clearTimeout(timeout)
  }, [html,css,js])
  
  return (
    <>
        <div className="panel top">
          <Editor language="xml" name="HTML" value={html} onChange={setHtml} />
          <Editor language="css" name="CSS" value={css} onChange={setCss} />
          <Editor language="javascript" name="JavaScript" value={js} onChange={setJs} />
        </div>
        <div className="panel down">
          <iframe 
          srcDoc={srcDoc}
            title="output"
            sandbox="allow-scripts"
            frameBorder="0"
            width="100%"
            height="100%"
          />
        </div>
    </>
  );
}

export default App;
