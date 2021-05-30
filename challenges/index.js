/**
 * CHALLENGE 1-2 TASK
 *
 * Find all menu elements by selector ".nav-link"
 * or by className "nav-link".
 *
 *  Use "for" loop to iterate through all menu items
 * Inside of the loop add "onclick" event handler to
 * each menu item.
 *
 * In the "onclick" event handler:
 * 1. Remove first "active" class from all
 * menu elements
 * 2. Add "active" class to the clicked menu element
 * 3. Log to the console message with the name
 * of the clicked menu item
 */
"use strict"


const getNavLink = document.querySelectorAll('.nav-link')
const linkLength = getNavLink.length


for (let i = 0; i < linkLength; i++) {
    const links = getNavLink[i]
    links.onclick = function (){
        for (let j = 0; j < linkLength; j++) {
            getNavLink[j].classList.remove('active')
        }
        links.classList.add('active')
        console.log(links.innerHTML);
    }
    
}

