class autoTest{

firstTest(){

   return cy.get('[name="name"]:nth-child(2)');
}

secondTest(){
 
    return cy.get('[name="email"]')

}


}
export default autoTest;