import readlineSync from 'readline-sync';

export const askName = () => {
    // Wait for user's response.
    const userName = readlineSync.question('May I have your name? ');
    console.log('Hi, ' + userName + '!');
};
