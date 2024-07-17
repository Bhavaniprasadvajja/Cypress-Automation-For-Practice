

describe('Test suite', function(){

beforeEach('Data Retrive from Fixture file', function(){

cy.fixture('firstTestData').then(function(data)
{
this.data= data;    

})
} )



it('test cases', function(){

    

    cy.visit(Cypress.env('URL'));
    cy.get('input[name="name"]:nth-child(2)').type(this.data.FieldName);
    cy.get('input[name="name"]:nth-child(2)').should('be.visible');
    cy.get("#exampleFormControlSelect1").select(this.data.id);
    cy.get(':nth-child(4) > .ng-untouched').should('have.value', this.data.FieldName);
    cy.get('input[name="name"]:nth-child(2)').should('have.attr','minlength','2');
    cy.get('#inlineRadio3').should('be.disabled');
    cy.wait(2000)
    cy.get('.navbar-nav>li:nth-child(2)').click();

    // cy.get('h4.card-title').each(($e1, index, $list)=>{
    //     if($e1.text().includes('Blackberry'))
    //         {
    //             cy.get('button.btn.btn-info').eq(index).click();

    //     }


       


    // })

    

    // cy.selectProduct('Nokia Edge')
    // cy.selectProduct('Samsung Note 8')
    // cy.selectProduct('iphone X')

    

this.data.productName.forEach(function(element){
    cy.selectProduct(element)

})

    cy.get('#navbarResponsive > .navbar-nav > .nav-item > .nav-link').click();



})


})