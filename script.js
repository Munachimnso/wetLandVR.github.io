/*
Why we use  JavaScript(js)
Adds interactivity and dynamic effects to a web page. 
JavaScript is a programming language that allows you to manipulate and control the behavior of elements on a webpage, 
handle user interactions, perform calculations, fetch data from servers, and much more.

Javascript  code  test alert('test')

*/



/* 

the DOMContentLoaded event listener used to  ensure that the code inside the callback function runs only --
     after the HTML document has finished loading. 
This is important because the JavaScript code manipulates the DOM and needs access to the HTML elements.



ChatGPT
The addEventListener JavaScript method that allows you to attach an event handler to a specific element on a web page.
 It is commonly used to listen for and respond to various events triggered by user interactions or changes in the browser.
         example structure for an addEventListener "element.addEventListener(event, listener, options);
    

*/
/*  PURPOSE  OF CODE BELOW

    Show insure we can tell when a  user is clicking the menu buttom, the through the websites console

     In summary, this code waits for the DOM content to finish loading, selects two elements with specific CSS class names, and adds a click event listener to one of the elements. When the menu element is clicked, it retrieves the value of a specific attribute from the other element and logs it to the console.
     If either of the elements is not found, it logs an error message.

*/


document.addEventListener('DOMContentLoaded', () => 
{

 
// This code runs when the DOM content has finished loading
/*
    adds an event listener to the DOMContentLoaded event using the addEventListener method on the document object.
     The event listener function is defined using an arrow function syntax () => { ... }
*/

  const menu = document.querySelector('.moblieNavMenu');
  const menuItems = document.querySelector('.NavBar');
  /* 
       assiging the .moblieNavMenu element from our css file to our varible/intance called menu, with  const, 
           which is done by using querySelector method on the document object.


  */
  
    /* 

        code, gets the .NavBar' elment from our css file(docoment)  and assign it to our variable/instance menuItems
         conts-  used  to declare a constant variable named menu, 
                   consts key word used to declare variables are constant, meaning their values cannot be re-assigned once they are initialized. 
                   By using const, you ensure that the variable menu cannot be accidentally reassigned to a different value later in the code.
    */ 


  if (menu && menuItems)  // line checks if both menu and menuItems variables are truth(thus if true), meaning they successfully found elements in the DOM. 
                          // If both elements are found, the code inside the if block will be executed.
                               // Otherwise, the code inside the else block will be executed.
   {
    menu.addEventListener('click', () => 
    //If both menu and menuItems elements are found, 
    //this line adds a click event listener to the menu element using the addEventListener method. 
    // When the menu element is clicked, the code inside the arrow function("() =>" ) will be executed.
 
    {
      const visibility = menuItems.getAttribute('nav-visible');
         // Inside the event listener function( () => ), this line retrieves the value of the 'nav-visible' attribute from 
         // the menuItem's element using the getAttribute method. The value is then assigned to the visibility variable using the const keyword.
      
        
      if(visibility === "false")// if  visibility equals false, the code below will run
      {
        menuItems.setAttribute('nav-visible','true');
        //  we get the data attribute "nav-visible"(created  in html, within the NavBar ul - list) set/turn it into true, so
         //Our  css   element((.NavBar[nav-visible = "true"])) can make menuitem vsisbile
      }
      else {
        // Set the 'nav-visible' attribute to "false" to hide the navigation bar
        menuItems.setAttribute('nav-visible', 'false');
      }
    
    });
  }
   
}); 




 


 
      

     

   



             
















