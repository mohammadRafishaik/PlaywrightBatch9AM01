import{test,expect} from '@playwright/test';
import{homepageclass} from '../Pageelements/Homepage';

test.describe("Test scenarios:",async()=>
{
let hp:homepageclass;

test.beforeEach("Homepage data", async({page})=>
{
 hp=new homepageclass(page)
})

test("Tc_01_Verify Oranagehrm home page",async({page})=>
{
await hp.myapp();
await hp.username();
await hp.password();
await hp.loginclickelement();
await hp.verifyusernavigation();
await hp.hoveronelement();
await hp.clickonaddemployee();
})

});