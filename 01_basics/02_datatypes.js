 //   "use strict"   //   Treat all JS code as newer version (applys to whole file)
//---------------------No need to write nowdays-----------------------------//


//  alert( 3 + 3 )  //    alert not defined <=-o/p,<error>   
  
                 //     because we are using node.js not browser

 console.log( 3 + 3 ); console.log("Hitesh"); //


 // "Spacing  and  Readability" is priority while executing our code,
                              
       /*  Of Course getting the required output we want...  
         

<-------------- Not recommended ------------------------> 

 {{  (1)   console.log( 3 + 3 ); console.log("Hitesh");       
          
     (2)  console.log( 3   
                
                   +                        
                        3 );                   }} 
 
 <------------------------------------------------------->
                                                                       

{{ 
    On giving spacing ';' is no more needed...
        
        e.g.        console.log( 3 + 3 )
                                                         
                    console.log("Hitesh") 
                
                                                }}  */   //
 

// Documentation -> tc39.es [ECMAScript]

//               -> M_D_N_@webdocs.org         //



//----------------DATA TYPES------------------//


let name = "Rishabh"
let age = 18
let isLoggedIn = false
let state; //let state = null

 // number => 2^(to the power)53
 // bigint
 // string => ""
 // boolean => true/false
 // null => standalone value (empty value)
 // undefined => value not assigned (undefined)
 // symbol => unique (react)
  
 // object  (big topic)

console.log(typeof "hitesh")

console.table([typeof age, isLoggedIn, state]);

console.log(typeof undefined); //undefined --o/p

console.log(typeof null); //object   --o/p




