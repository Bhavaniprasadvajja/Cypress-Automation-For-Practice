class dummyTicket {

    getDummyFirstName (){

        return cy.get('[name="travname"]')
    }
    getDummyLastName(){

       return cy.get('[name="travlastname"]')
    }
    getDummyDate(){

       return cy.get('#dob')
    }
    getDummyYear(){

       return cy.get('.ui-datepicker-year')
    }
    getDummyMonth(){
    
       return cy.get('.ui-datepicker-month')
    }
    getDummyDateCalender(){

       return cy.get('.ui-datepicker-calendar')
    }
    getDummyGender(){

        return cy.contains('Female')
    }
    getDummycheckbox1(){

     return cy.get('[name="addmorepax"]')
    }
    getDummayAddMore(){

     return cy.get('#select2-addpaxno-container')
    }
    getDummaySearch(){

      return cy.get('.select2-search__field')
    }
    getDummayData(){

      cy.get('.select2-results__option')
    }

    getDummyFromCity(){

      return cy.get('[name="fromcity"]')
    }
    getDummyToCity(){

      return cy.get('[name="tocity"]')
    }
    getDummyDeparton(){

      return cy.get('#departon')
    }


}
export default dummyTicket