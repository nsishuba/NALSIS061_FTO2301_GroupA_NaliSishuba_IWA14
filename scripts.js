firstName = 'John';
age = 35;
message = 'Coding';


const logTwice = () => {
    console.log(`Hello, ${firstName} ${age}. I love ${message}!`)
  }
  
  function hobby () {
    logTwice()
  }
  
  hobby()