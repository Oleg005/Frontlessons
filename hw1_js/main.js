var x = 6;
var y = 14;
var z = 4;

console.log(x += y - x++ * z);
// 1. Приоритет має дія множення, тому спочатку вирахувується x++ * z = 24;
// 2. потім вираховується y - x++ = -10;
// 3. далі 6+(-10)=-4.

x = 6, y = 14, z = 4;
console.log(z = --x - y * 5)
// 1. Спочатку вираховується y * 5 = 70;
// 2. потім --x(тут вже х = 5) - y * 5 =  5 - 70 = 65.

x = 6, y = 14, z = 4;
console.log(y /= x + 5 % z)
// 1. Спочатку вираховується y / (x + 5%z);
// 2. потім 5 % z = 1;
// 3. далі  6+1=7;
// 4. в кінці y / 7 = 14 / 7 = 2.

x = 6, y = 14, z = 4;
console.log(z - x++ + y * 5)
// 1. Спочатку вираховується y * 5 = 70;
// 2. потім z - x++ = -2;
// 3. далі z - x++ + y * 5 = 69.

x = 6, y = 14, z = 4;
console.log(x = y - x++ * z)
// Спочатку вираховується x++ * z = 24;
// потім y - x++ * z = -10.

