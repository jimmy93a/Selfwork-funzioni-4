let str = 'i topi non avevano nipoti'; 
let modifica_str = str.replaceAll(" ");

let splitted = modifica_str.split(' ').reverse().join(' ');

if (modifica_str === splitted) {
    console.log('TRUE');
    
}else{
    console.log('FALSE');
    
}