//para testear auth.js
// import {suma} from './../src/assets/js/suma.js'
// describe('suma', () => {
//     it('debería retornar 4 para suma 2+2' , () => {
//         expect(suma(2, 2)).toBe(4)
//     })
//   });

import {validate,validateEmail,validateUserActive} from './../src/assets/js/validation.js'

describe ('validate',()=>{
    it ('deberia retornar falso si es que no ingresa nombre, correo y contraseña', () =>{
        expect(validate("","","")).toBe(false);
    })
});

describe ('validateEmail',()=>{
    it('Debería retornar false, si el correo no es valido', () => {
        expect(validateEmail('karen.reyes.cgmail.com')).toBe(false);
    })
    it('Debería retornar true, si el correo es valido', () => {
        expect(validateEmail('karen.reyes.c@gmail.com')).toBe(true);
    })
});

describe ('validateUserActive',()=>{
    it ('deberia retornar falso si es que no ingresa correo y contraseña registrados', () =>{
        expect(validateUserActive("","")).toBe(false);
    })
});


