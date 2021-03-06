import { gondola, locator, page, action } from "gondolajs";

@page
export class HomePage {
    @locator public lblPageTitle = `//main[@class='capsule']//h1`;
    @locator public lnkTopMenuWomen = `//div[@class='navarea']//ul/a[.="Women's"]`;
    @locator public lnkTopMenuSale = `//div[@class='navarea']//ul/a[.="Sale"]`;
    @locator public lnkTopMenuShoppingCart = `//div[@class='navarea']//a[@href='/cart']`;
    @locator public lblWomenHeader = `//h1[text()="Women's"]`;

    @action("open demo web", "Navigate to home page")
    public async navigateTo() {
        await gondola.navigate(this._homePageUrl);
    }

    @action("check page title displayed", "Check 'Sale' page title is displayed")
    public async checkPageTitleDisplayed() {
        await gondola.checkControlExist(this.lblPageTitle);
        await gondola.checkControlProperty(this.lblPageTitle, "innerText", "Shop");
    }

    @action("select women's tab", "Click the Women's link on top menu bar")
    public async selectWomenTab() {
        await gondola.waitForElement(this.lnkTopMenuWomen);
        await gondola.click(this.lnkTopMenuWomen);
        await gondola.waitForElement(this.lblWomenHeader);
    }

    constructor() {
        this._homePageUrl = "https://demo.gondolatest.com";
    }
    _homePageUrl: string;
}

export default new HomePage();
