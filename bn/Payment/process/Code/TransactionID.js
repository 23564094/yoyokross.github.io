// Declare all required characters
const all_characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';

let randomNumber = document.querySelector('#random_number');
let generateStringBtn = document.querySelector('#generate_string');

const generateRandomString = (length) => {
    let result_string = '';
    const characters_length = all_characters.length;
    for (let i = 0; i < length; i++ ) {
        result_string += all_characters.charAt(Math.floor(Math.random() * characters_length));
    }
	
    return result_string;
}

randomNumber.innerHTML = generateRandomString(10);

