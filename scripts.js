const firstName = 'John';
const age = 35;
const message = 'Coding';


const logTwice = () => {
    console.log(`Hello, ${firstName} ${age}. I love ${message}!`)
    console.log(`Hello, ${firstName} ${age}. I love ${message}!`)
  }
  
  function hobby () {
    logTwice()
  }
  
  hobby()