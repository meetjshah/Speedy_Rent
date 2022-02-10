class MessageParser {
    constructor(actionProvider, state) {
      this.actionProvider = actionProvider;
      this.state = state;
    }
  
    parse(message) {
      console.log(message)
      const lowercase = message.toLowerCase();
    
      if (lowercase.includes("hello")){
        this.actionProvider.greet();
      }
      else if (lowercase.includes("help")){
        this.actionProvider.help();
      }
      else if (lowercase.includes("apartments")){
        this.actionProvider.handleApartments();
      }
      else{
          this.actionProvider.handleNoInput();
      }
    }
  }
  
  export default MessageParser;
