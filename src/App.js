import './App.css';
import Input from '@mui/joy/Input';
import LinearProgress from '@mui/joy/LinearProgress';
import Button from '@mui/joy/Button';
import { useState } from 'react';
import { Box } from '@mui/joy';

function App() {
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState("")
  const asciiArt = "\n       O  \n      /|\\ \n     / | \\ \n    /_| _\\ \n   /   \\   \\\n  /_____\\___\\\n /        \\   \\\n/__________\\___\\\n  |         |\n  |         |\n  |         |\n  |         |\n  |         |\n  |         |\n  |         |\n  |         |\n  |         |\n  |_____ _____|\n  |_____|_____|\n"
  return (
    <div className="App">
      <form
        id='searchBar'
        className='block'
        onSubmit={async(event) => {
          event.preventDefault();
          const formData = new FormData(event.currentTarget);
          const formJson = Object.fromEntries((formData).entries());
          setLoading(true)
          setResult("")
          await new Promise(resolve => setTimeout(resolve, 2000));
          setLoading(false)
          setResult(asciiArt)
        }}
      >
        <Box
          sx={{ display: 'flex'}}
          >
          <Input sx={{ flexGrow: 1, mr: 1}}
          name='prompt'
          placeholder="what do you want to draw ?"
          required
          />
          <Button type="submit">Submit</Button>
        </Box>
      </form>
      <div id="result" className='block'>
        {loading && <LinearProgress />}
        <pre>
          {result}
        </pre>
      </div>
    </div>
  );
}

export default App;
