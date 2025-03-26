/*
1. Create a class called Actions
*/

/*
2. Create 3 static asynchronous functions with the details given below in this class
Create a function called as visitUrl()
- it takes an argument url
- it returns a Promise which will be resolved if url starts with 'www' or 'https://'
- resolve message will be 'URL visited successfully'
- the Promise will be rejected if url does not start with 'www' or 'https://' with a message 'Wrong URL'
- delay this method for 1 second for demo purposes

Create a function called as login()
- it takes 2 arguments username and password
- it returns a Promise which will be resolved if username = 'TechGlobal' and password = 'Test1234'
- resolve message will be 'Logged in successfully'
- the Promise will be rejected whether username or password is wrong with a message 'Wrong credentials'
- delay this method for 3 seconds for demo purposes


Create a function called as validateTitle()
- it takes an argument title
- it returns a Promise which will be resolved if the title is not empty, undefined or null
- resolve message will be 'Title validated successfully'
- the Promise will be rejected if title is empty, null or undefined with a message 'Wrong title'
- delay this method for half a second for demo purposes

*/
export class Actions {
  static visitUrl(url) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if(url.startsWith('www') || url.startsWith('https://')) resolve('URL visited successfully');
        else reject('Wrong URL');
      }, 1000);
    });
  }

 static login(username, password) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if(username === 'TechGlobal' && password === 'Test1234') resolve('Logged in successfully');
      else reject('Wrong credentials');
    }, 3000);
  });
 }

 static validateTitle(title) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if(title) resolve('Title validated successfully');
      else reject('Wrong title');
    }, 500);
  });
 }
}