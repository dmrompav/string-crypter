# <span>string-crypter</span>

Methods to encrypt your text or to return decrypted.

## Install

```
  npm install string-crypter
```

## Usage
```javascript
import { encrypt, decrypt } from 'string-crypter';

const key = 'Phrase I will never forget';
const text = 'Hello string-crypter!';

const encrypted = encrypt(key)(text);
// "wmdmh0TCSfws3DfdlywS="

const decrypted = decrypt(key)(encrypted);
// "Hello string-crypter!"
```

## Methods
- **encrypt**( *key*, *text* ) // @return { String }
- **decrypt**( *key*, *string* ) // @return { String }

> The bigger KEY you use, the safer cipher you get. KEY length shouldn't be more than TEXT length, cause KEY's extra length is useless, but that is not crytical. If you are using KEY of just one letter - it will be the "Caesar cipher").

## Text/key symbols that are available
**EN**  
Aa Bb Cc Dd Ee Ff Gg Hh Ii Jj Kk Ll Mm Nn Oo Pp Qq Rr Ss Tt Uu Vv Ww Xx Yy Zz  
**RU**  
Аа Бб Вв Гг Дд Ее Ёё Жж Зз Ии Йй Кк Лл Мм Нн Оо Пп Рр Сс Тт Уу Фф Хх Цц Чч Шш Щщ Ъъ Ыы Ьь Ээ  Юю Яя  
**Others**  
1234567890 !?@#$%^&*()-=+_|/'"[]{}:;,.`~№<>