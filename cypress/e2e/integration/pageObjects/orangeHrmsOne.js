
class orangeHrmsOne{

    getHrmsWhy(){

        return cy.contains('Why OrangeHRM')
    }
    getHrmsOurCustomer(){

        return cy.contains('Our Customers')
    }
    getHrmsCaseStudie(){

        return cy.contains('Case Studies')
    }

}
export default orangeHrmsOne