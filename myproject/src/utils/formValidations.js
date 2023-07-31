import { PASSWORD_FIELD_VALIDATION } from "../constants/messages"
import { PASSWORD_UPPERCASE_CHARACTER,BLANK_SPACE,PASSWORD_LENGTH, PASSWORD_LOWERCASE_CHARACTER,PASSWORD_NUMBER,PASSWORD_PATTERN,PASSWORD_SPECIAL_CHARACTER,PLATFORM_FEES_NUMBER_VALIDATION } from "../constants/patterns"

export const ValidationAggregator = (value, patterns) => {
    const errors = patterns
      .map(([pattern, message, negate = false]) => {
        if (negate) {
          return pattern.test(value) ? message : true;
        }
  
        return pattern.test(value) ? true : message;
      })
      .filter((e) => e !== true);
  
    return errors.length === 0 || errors[0];
  };

export const validateFirstName = {
    required: {
      value: true,
      message: 'first name is required',
    },
    maxLength: {
        value: 30,
        message: 'maximum length for first name is 30 characters',
      }, 
    minLength: {
        value: 3,
        message: 'minimum length for first name is 3 characters',
      },
}

export const validateLastName = {
    required: {
      value: true,
      message: 'first name is required',
    },
    maxLength: {
        value: 30,
        message: 'maximum length for first name is 30 characters',
      }, 
    minLength: {
        value: 3,
        message: 'minimum length for first name is 3 characters',
      },
}

export const validateEmail = {
    required: {
      value: true,
      message: 'Email is required',
    },
    pattern: {
        value: /^(?=[^\s@]+@[^\s@]+\.[^\s@]{2,}$)[^\s@]{1,64}@[^\s@]{1,255}$/,
        message: 'Please enter a valid email',
      }
    }

    export const validatePassword = {
        required: {
          value: true,
          message: 'password is required',
        },
        validate: (password) =>
        ValidationAggregator(password, [
          [BLANK_SPACE, PASSWORD_FIELD_VALIDATION.NO_SPACE, true],
          [PASSWORD_LENGTH, PASSWORD_FIELD_VALIDATION.MIN_LENGTH],
          [PASSWORD_LOWERCASE_CHARACTER, PASSWORD_FIELD_VALIDATION.REQUIRE_LOWERCASE_CHARACTER],
          [PASSWORD_UPPERCASE_CHARACTER, PASSWORD_FIELD_VALIDATION.REQUIRE_UPPERCASE_CHARACTER],
          [PASSWORD_NUMBER, PASSWORD_FIELD_VALIDATION.REQUIRE_NUMBER],
          [
            PASSWORD_SPECIAL_CHARACTER,
            PASSWORD_FIELD_VALIDATION.REQUIRE_SPECIAL_CHARACTER,
          ],
        ]),
    //     validate: {
              
    //     checkLength: (password) => {
    //             const isValid = PASSWORD_LENGTH.test(password);
          
    //             if (!isValid) {
    //               return PASSWORD_FIELD_VALIDATION.MIN_LENGTH;
    //             }
          
    //             return null;
    //           },
    //           checkLowerCase: (password) => {
    //             const isValid = PASSWORD_LOWERCASE_CHARACTER.test(password);
          
    //             if (!isValid) {
    //               return PASSWORD_FIELD_VALIDATION.REQUIRE_LOWERCASE_CHARACTER;
    //             }
          
    //             return null;
    //           },
              
              
    //         checkUpperCase: (password) => {
    //           const isValid = PASSWORD_UPPERCASE_CHARACTER.test(password);
        
    //           if (!isValid) {
    //             return PASSWORD_FIELD_VALIDATION.REQUIRE_UPPERCASE_CHARACTER;
    //           }
        
    //           return null;
    //         },
    //         checkNumber: (password) => {
    //             const isValid = PASSWORD_NUMBER.test(password);
          
    //             if (!isValid) {
    //               return PASSWORD_FIELD_VALIDATION.REQUIRE_NUMBER;
    //             }
          
    //             return null;
    //           },
    //           checkSpecialCharacter: (password) => {
    //             const isValid = PASSWORD_SPECIAL_CHARACTER.test(password);
          
    //             if (!isValid) {
    //               return PASSWORD_FIELD_VALIDATION.REQUIRE_SPECIAL_CHARACTER;
    //             }
          
    //             return null;
    //           },
    //     }
 }
