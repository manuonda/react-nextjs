export interface    PasswordConfig {
    hasLowerCase?: boolean;
    hasUpperCase?: boolean;
    hasNumbers?: boolean;
    hasSymbols?: boolean;
    length?: number;
}

export const generatePassword = ({
    hasLowerCase = false,
    hasUpperCase = false,
    hasNumbers = false,
    hasSymbols = false,
    length = 8,
}: PasswordConfig = {}) => {
  
    const upperCaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowerCaseChars = "abcdefghijklmnopqrstuvwxyz";
    const numberChars = "0123456789";
    const symbolChars = "!@#$%^&*()_+~`|}{[]:;?><,./-=";

    let charSet = "";

    if (hasLowerCase) charSet += lowerCaseChars;
    if (hasUpperCase) charSet += upperCaseChars;
    if (hasNumbers) charSet += numberChars;
    if (hasSymbols) charSet += symbolChars;

    if (charSet.length === 0) {
        charSet = lowerCaseChars;
    }

    let password = "";
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charSet.length);
        password += charSet[randomIndex];
    }

    return password;

}