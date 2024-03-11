
// let num:number = 5
// console.log(num)


// basic datatypes

// integer 
// let  x:number = 10;
// console.log(x);
// // string
// let data:string = 'string data ';
// console.log(data);
// //boolean 
// let bool:boolean = true;
// console.log(bool)
// // any data

// let any_data :any ;
// any_data = true;
// console.log(any_data)



// -------------------array ,tuples---------------------//

// let array : string[] ;
// array = ['name','age','address'];
// console.log(array)

// let tuples :[string,number];

// tuples = ['haseeb',20];
// console.log(tuples);

// array of tuples and any


// let tuples :[string,number][];

// tuples = [
//     ['haseeb',20],
//     ['haseeb',20],
//     ['haseeb',20]
// ];
// console.log(tuples);
 

// let any_data_array  :any[];
// any_data_array = ['haseeb',18,true,];
// console.log(any_data_array)

// objects
// object type
// type datatype = {
//     id:number,
//     name:string
// }

// const user:datatype= {
//     id:1,
//     name:'haseeb'

// }
// console.log(user)

// type assertion

// let data : any = 2;
//  const num = data as number
// console.log(num);



// function in typescript 


// function square(x:number):number
// {
//     return x*x;

// }
// console.log(square(2));

// interface

// interface  productinterface
// {
//     product:string,
//     price:number,
//     description:string,
//     // we can put ? for optional  like 
//     feedback?:string
// }


// const product_1 : productinterface = {
//     product : 'samsung',
//     price :  20000 ,
//     description:"this is description" ,
//     feedback:"dfadsz"
    
   
// }
// console.log(product_1);

// use inteface with function
//  interface  cal
//  {
//     (x:number,y:number):number
//  }

//  const add:cal = ( x:number,y:number ): number => x+y ;
//  const sub:cal = ( x:number,y:number ): number => x-y ;
//  console.log(add(3,2) , sub(7,6))


interface  personInterface
{
    id:number,
    name:string,
    register():string
}

class person implements personInterface{

    id : number ;
    name:string  ;


    constructor (id:number , name:string)
    {
      this.name = name;
      this.id = id;
    }
    register()
    {
     return   `${this.name} is  registered`
    }


}
const brad = new person(20,'brad');
const newPerson = new person(10,'person');
console.log(brad , newPerson,newPerson.register()) ;


// subclass

class employee extends person
 
{
    position:string ;

    constructor(id:number , name:string , position:string)
    {
       
        super(id,name);
        this.position = position ;

    }
}
const emp1 = new employee (1,'haseeb','developer');
console.log(emp1,emp1.register());



// generics

function  get<T> (items:T[]) : T[]
{
  return new Array().concat(items);
}

let numarray  = get<number>([1,2,3,4,5,5]);
let stringdata = get<any>(["name","dob",20])

numarray.push(6);
stringdata.push("age")
console.log (stringdata);