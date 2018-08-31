const log = console.log

let element = 7;
log(element);

let array = [1, 2, 3];
log(array[0]);
let object = { 1: 2, 2: 4, a: 43 };
log(object[2]);
//log(object.1);
log(object["a"]);

log(object.a);
function func() {
    //alert(1);
}
func();


//первая часть

let func2 = function () {
    log("I am find 2");
}

let func3 = func2;

func3();

array.map(a => log(a));
// map foreach slice методы массивов джс.
