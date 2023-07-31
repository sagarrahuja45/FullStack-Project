export const EMAIL_PATTERN =
  /^[\d\w]+[-._+]{0,1}([\d\w]+|[-._+]{0,1})?[\d\w+]+([^\W-._+]+)@([\w\d]+)((\.){0,1}[A-Z|a-z|0-9]){2}\.[a-z]{2,3}$/;

export const PASSWORD_PATTERN =
  /^[a-zA-Z0-9!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]*$/;

export const PASSWORD_UPPERCASE_CHARACTER = /[A-Z]+/;

export const PASSWORD_LOWERCASE_CHARACTER = /[a-z]+/;

export const PASSWORD_NUMBER = /[0-9]+/;

export const PASSWORD_LENGTH = /.{8,}/;



export const PASSWORD_SPECIAL_CHARACTER = /[!@#$%^&*)(+=._-]+/;



export const BLANK_SPACE = /[\s]+/;


