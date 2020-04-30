// These are solely placeholders for the below prompts, don't change them.
const FILL_ME_IN = '';
const REPLACE_ME = () => {};
/*
 * Callback Review
 *
 * Not all functions end with a return statement!
 * Instead, some functions pass data along to the next function by invoking
 * a callback function with the data as the argument.
 *
 * Refactor the following function so that it takes a second parameter, callback,
 * and instead of returning the result, invokes the callback with it as a parameter.
 */
const findHalfWordLength = (word) => {
  let halfWordLength = Math.floor(word.length / 2);
  return halfWordLength;
};

/*
 * Instead of telling findHalfWordLength to return a piece of data to us right away,
 * we provided it with a callback function to use with the data it generates.
 *
 * Here we passed print into that refactored function as the callback.
 * Notice that print is NOT invoked when passed as an argument.
 * You should be able to see a console.log statement saying "Your output: 4"!
 */
const print = (output) => {
  console.log(`Your output: ${output}`);
};

findHalfWordLength('callback', print);

// ====== NEXT: Finish the following functions ===== //

/*
 * Given a number and a callback, generate an array of the individual digits of the number in order.
 * Example: 237523 => [2, 3, 7, 5, 2, 3]
 *
 * makeDigitArray should invoke the callback function with the generated array passed as an argument.
 */
const makeDigitArray = (FILL_ME_IN) => {
  // FILL_ME_IN
};

/*
 * Given an input array and a callback, find the sum of elements in the following manner:
 * ADD elements found at even indices,
 * SUBTRACT elements found at odd indices.
 * Example: [7, 1, 3, 4] => (7 - 1 + 3 - 4) = 5
 *
 * Pass your results into the callback as we did before.
 */
const arraySummer = (FILL_ME_IN) => {
  // FILL_ME_IN
};

/*
* Write a function which takes in a number and a callback.  It should create a string which, when printed out, 
* looks like a pyramid of zeroes, with widest part at the base being the width of the number!
* Be sure to pass your result into the callback the same as before.
* 
* If your input is less than zero, pass in "You don't get a pyramid!", and if it equals zero
* pass an empty string.  
*
* Example: 
* IN: 5
* OUT: '\n0\n00\n000\n0000\n00000'
* Which, when printed, gives us a lovely: 
* 0
* 00
* 000
* 0000
* 00000
*
*/
const pyramidBuilder = (FILL_ME_IN) => {
  // FILL_ME_IN
};

/*
 * Assuming you've built all the above functions correctly, the invocation below should
 * allow us to input any number and eventually end up with a pyramid built out of the below
 * function chain printed out into the console! Feel free to mess with the input and see
 * your different pyramids.
 *
 * This is an example of callback hell, and also uses anonymous wrapper functions--you'll be learning
 * more about both of those concepts later :)
 */
makeDigitArray(9090909, (arr) => {
  arraySummer(arr, (sum) => {
    pyramidBuilder(sum, (pyramidString) => {
      print(pyramidString);
    });
  });
});

/*
* Finally, let's dip our toes into async operations!
*
* You might not know this, but setTimeout is actually an asynchronous function--you'll learn more
* about what exactly that means in the next section.
* 
* Looking below, you'll see that Eminem, aka the Real Slim Shady, is trying to tell us something.
* Correctly put the functions inside of createMessage into their respective setTimeouts so that our callback 
* is invoked with the right message. Note: You should ONLY be changing the functions in the timeout calls.
*
* Your output should look something like:
* Hi! My name is 
* "Who?"
* My name is
* "What?"
* My name is *chikka chikka* Slim Shady.
*
*/
const createMessage = (callback) => {
  let message = '';

  const introduceYourself = () => {
    message += 'My name is ';
  };
  const theRealSlim = () => {
    message += '*chikka chikka* Slim Shady.';
  };
  const iDontKnowThem = () => {
    message += '"Who?"\n';
  };
  const addGreeting = () => {
    message += 'Hi! ';
  };
  const iDidntHearYou = () => {
    message += '"What?"\n';
  };

  setTimeout(REPLACE_ME, 12);
  setTimeout(REPLACE_ME, 17);
  setTimeout(REPLACE_ME, 21);
  setTimeout(REPLACE_ME, 31);
  setTimeout(REPLACE_ME, 14);
  setTimeout(REPLACE_ME, 25);
  setTimeout(REPLACE_ME, 33);

  // You should recognize this method of wrapping a function from precourse.  In this case, the wrapper
  // function is actually the callback of this setTimeout invocation, and it will run whatever else you put inside!
  setTimeout(() => {
    REPLACE_ME;
  }, 35);
};

/* This should let us see the result of plugging in all the callbacks on our console. Uncomment it if you're getting stuck! */
// createMessage(print);
