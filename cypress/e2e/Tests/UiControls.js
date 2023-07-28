///<reference types="cypress"/>
import UiControlsPO from "../Pageobject/UiControlsPO.cy"


describe("First Demo Test",()=>
{  

    let uicontrol=new UiControlsPO()
   
    before("Before every Test",()=>
    {
        cy.visit("")
    })


    it("Input Field",()=>
    {
        cy.visit("")
        uicontrol.EnterInput_field().type("")
    })



})