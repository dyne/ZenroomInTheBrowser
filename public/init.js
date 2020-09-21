// const zenroom = require('/zenroom/zenroom_bundle.js');
// import * as zenroom from '/zenroom/zenroom_bundle.js';

(async function () {
    const zenroom = await import('/zenroom_browsify_bundle.js');

    console.log(zenroom);

    const zenResult = [];
    const zenErrors = [];
    const startTime = new Date();

    //save the result
    const print = (text) => {
      zenResult.push(text);
      console.log('Print: ' + text);
    };

    //Save any error
    const print_err = (text) => {
      zenErrors.push(text);
      console.log('Print Error: ' + text);
    };

    //zenroom returns successfully
    const onSuccess = () => {
        const timeTaken = new Date() - startTime;
        console.log('Executed successfully: time taken: ' + timeTaken);
    //   setExecutionTime(timeTaken);
    };

    //zenroom returns with error
    const onError = () => {
        console.log('zenroom returned with error');
    };

    const options = {
      script: "Scenario 'ecdh': Create the keypair\nGiven that I am known as 'Alice'\nWhen I create the keypair\nThen print my data\n",
      data: "",
      conf: "",
      keys: "",
      print: print,
      print_err: print_err,
      success: onSuccess,
      error: onError,
    };

    //execute zenroom
    zenroom.init(options).zencode_exec();
})();