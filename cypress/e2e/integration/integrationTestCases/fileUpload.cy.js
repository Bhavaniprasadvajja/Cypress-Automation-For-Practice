describe('File Upload', function(){

it('File Upload block',function(){

cy.visit("https://www.zoho.com/in/books/accounting-software-demo/#/salesorders/new", {timeout:50000})

cy.get("button>input[type='file']").eq(0).scrollIntoView();
cy.get("button>input[type='file']").eq(0).selectFile("C:\\Users\\user\\Desktop\\Cypress\\Data document for file upload.docx")

})

})