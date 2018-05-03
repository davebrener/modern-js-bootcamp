// Lexical Scope (Static Scope)
//Global Scope = Defined outside of all code blocks
// Local Scope - Defined inside a code block

// In a scope you can access variables defined in that scope, or in any parent/ancestor

// Global Scope (varOne) - parent
  // Local Scope (varTwo) - child of varOne and sibling of varThree
      // Local Scope (VarFour) - ancestor is varOne, parent is varTwo
  // Local Scope (varThree) - child of varOne and sibling of varTwo

let varOne = 'varOne';

if (true) {
    console.log(varOne)
    let varTwo = 'varTwo'
    console.log(varTwo)

    if (true) {
        let varFour = 'varFour'
    }
}

if (true) {
    let varThree = 'varThree'
}

console.log(varTwo)