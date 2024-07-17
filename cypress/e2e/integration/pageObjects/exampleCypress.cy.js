class exampleCypress{

getTraversal(){

    return cy.contains('Traversal')
}
getTextOfTraversal(){
    return cy.get('.container>h1')
}
getTextExample(){

    return cy.get('.container>p')
}
getChildren(){

cy.get('#children')
}

    

}
export default exampleCypress