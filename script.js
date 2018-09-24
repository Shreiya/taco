// to run a simple server, cd in your terminal to the folder these files are in and run:
// python -m SimpleHTTPServer 8007
// then go to http://localhost:8007 in your browser

const SpeechRecognition = webkitSpeechRecognition;


const getSpeech = () => {
  const recognition = new SpeechRecognition();
  recognition.lang = 'en-US';
  recognition.start();
  // recognition.continuous = false;
  recognition.interimResults = true;
  console.log('started rec');

  recognition.onresult = event => {
    const speechResult = event.results[0][0].transcript;
    console.log('result: ' + speechResult);
    console.log('confidence: ' + event.results[0][0].confidence);
    document.querySelector('#speech-div').textContent = speechResult;
    // getGif(speechResult);
    // if (speechResult === "Taco") {
    window.open('http://taco-randomizer.herokuapp.com/');
    // } else if (speechResult !== "Taco") {
    //   document.querySelector('#speech-div').textContent = "Come on. That's totally a Taco"
    // };
    //};
  };

  recognition.onend = () => {
    console.log('it is over');

    // for "endless" mode, comment out the next line and uncomment getSpeech()
    recognition.stop();
    getSpeech();

  };

  recognition.onerror = event => {
    console.log('something went wrong: ' + event.error);
  };
};
getSpeech();

// const getGif = phrase => {
//   let url = `http://api.giphy.com/v1/gifs/random?api_key=${giphyAPIKey}&tag=${phrase}`;
//   console.log(url);
//
//   fetch(url, {
//       mode: 'cors'
//     })
//     .then(response => response.json())
//     .then(result => {
//       const = openInNewTab(url) {
//         var win = window.open(url, '_blank');
//         win.focus();
//       }
//     });
// };

// document.querySelector('#my-button').onclick = () => {
//   console.log('clickity');
//   getSpeech();
// };
