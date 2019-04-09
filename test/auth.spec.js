//para testear auth.js
// import {suma} from './../src/assets/js/suma.js'
// describe('suma', () => {
//     it('debería retornar 4 para suma 2+2' , () => {
//         expect(suma(2, 2)).toBe(4)
//     })
//   });

import {validate} from './../src/assets/js/validation.js'

describe ('validate',()=>{
    it ('deberia retornar falso si es que no ingresa nombre, correo y contraseña', () =>{
        expect(validate("","","")).toBe(false);
    })
});
