import{WebPage} from '../CommonUI/commondata'
import hjson from '../PageLocators/Homepage.json'
import configpage from '../ConfigData/config.json'
// import locators from '../PageLocators/Homepage.json'
import{Page} from '@playwright/test';

export class homepageclass
{
    page:Page;
    web:WebPage;
    constructor(page:Page)
    {
        this.page=page;
        this.web=new WebPage(page);
    }

    async myapp()
    {
        await this.web.launchapp(configpage.url,configpage.pagetitle);
    }
    async username()
    {
        await this.web.entereddata(hjson.usrx,configpage.username);
    }
    async password()
    {
        await this.web.entereddata(hjson.pswx,configpage.password);
    }
     async loginclickelement()
    {
        await this.web.clickonelement(hjson.Lbtnx);
    }
    
    async verifyusernavigation()
    {
        await this.web.toverifypagenavigation(hjson.Wut,configpage.Welcomenote);
    }
    async hoveronelement()
    {
        await this.web.element(hjson.pim).hover();
    }
    async clickonaddemployee()
    {
        await this.web.clickonelement(hjson.Addemployee);
    }
}