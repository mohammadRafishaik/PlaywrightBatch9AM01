import {expect,Page,Locator} from '@playwright/test'

export class WebPage{

    page : Page;
    constructor(page:Page)
    {
        this.page=page;

    }
/*Method*/
     element(loc:string):Locator
    {
        return this.page.locator(loc)
    }
/*Method Name: Launch the application
    Functionality: Initial step to  launch the application
    */
   async launchapp(url:string,pagetitle:string,)
   {
    await this.page.goto(url);
    await this.page.waitForTimeout(5000)
    await expect(this.page).toHaveTitle(pagetitle)

   }

    /*Method Name: Enter data
    Functionality: Send data into text filed
    */
   async entereddata(loc:string,input:string)
   {
    await this.element(loc).fill(input)
   }
/*Method Name: Click Element
    Functionality: Clicking on element(button,link,radiobutton,...etc all click types)
    */
   async clickonelement(loc:string)
   {
    await this.element(loc).click();
   }
/*Method Name: Check element visiblity
    Functionality: Verify ele,ment visibility)
    */
   async checkvisible(loc:string)
   {
    await expect(this.element(loc)).toBeVisible();
   }
/*Method Name: Retrive the element get
    Functionality: Get the element text)
    */
   async gettext(loc:string)
   {
    const elementtext=await this.element(loc).textContent();
    console.log(elementtext);
   }

   /* Method Name:Fileupload
   Functionality: Here user will upload the file upload */

   async fileupload(loc:string,filepath:string)
   {
    await this.element(loc).setInputFiles(filepath);

   }
   /*Method Name: Hover the cursor
   FUnctionality: HOver the mouse of element*/

   async mousehover(loc:string)
   {
    await this.element(loc).hover();
   }
/*Method Name: Hover the cursor
   FUnctionality: HOver the mouse of element*/

   async toverifypagenavigation(loc:string,pagetitle:string)
   {
    await this.page.waitForTimeout(3000)
    await expect(this.element(loc)).toHaveText(pagetitle);
   }
}