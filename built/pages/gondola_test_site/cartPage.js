"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const gondolajs_1 = require("gondolajs");
let CartPage = class CartPage {
    constructor() {
        this.lblCartHeader = `//h1[text()='Cart']`;
        this.lblItemName = `//div[@class='cartitems']//h4[text()='%s']`;
        this.ifrPaymentFrame = `//iframe[@title='Secure card payment input frame']`;
        this.txtPaymentEmail = `#email`;
        this.txtPaymentCardNumber = `input[name='cardnumber']`;
        this.txtPaymentExpDate = `input[name='exp-date']`;
        this.txtPaymentCVC = `input[name='cvc']`;
        this.txtPaymentPostal = `input[name='postal']`;
        this.btnPayment = `//button[@class='pay-with-stripe']`;
    }
    async checkItemDisplayed(productName) {
        var realItemLocator = this.lblItemName.replace(`%s`, productName);
        await gondolajs_1.gondola.checkControlExist(realItemLocator);
    }
    async checkPaymentButtonEnabled() {
        let attribute = await gondolajs_1.gondola.getControlProperty(this.btnPayment, "disabled");
        await gondolajs_1.gondola.checkEqual(attribute, false);
    }
    async fillPaymentInfo(payment) {
        await gondolajs_1.gondola.waitForElement(this.txtPaymentEmail, 5);
        await gondolajs_1.gondola.enter(this.txtPaymentEmail, payment.email);
        await gondolajs_1.gondola.switchFrame(this.ifrPaymentFrame);
        await gondolajs_1.gondola.waitForElement(this.txtPaymentCardNumber, 5);
        await gondolajs_1.gondola.enter(this.txtPaymentCardNumber, payment.cardNumber);
        await gondolajs_1.gondola.enter(this.txtPaymentExpDate, `${payment.month}${payment.year}`);
        await gondolajs_1.gondola.enter(this.txtPaymentCVC, payment.cvc);
        await gondolajs_1.gondola.enter(this.txtPaymentPostal, payment.zipCode);
        await gondolajs_1.gondola.switchFrame("");
    }
};
__decorate([
    gondolajs_1.locator
], CartPage.prototype, "lblCartHeader", void 0);
__decorate([
    gondolajs_1.locator
], CartPage.prototype, "lblItemName", void 0);
__decorate([
    gondolajs_1.locator
], CartPage.prototype, "ifrPaymentFrame", void 0);
__decorate([
    gondolajs_1.locator
], CartPage.prototype, "txtPaymentEmail", void 0);
__decorate([
    gondolajs_1.locator
], CartPage.prototype, "txtPaymentCardNumber", void 0);
__decorate([
    gondolajs_1.locator
], CartPage.prototype, "txtPaymentExpDate", void 0);
__decorate([
    gondolajs_1.locator
], CartPage.prototype, "txtPaymentCVC", void 0);
__decorate([
    gondolajs_1.locator
], CartPage.prototype, "txtPaymentPostal", void 0);
__decorate([
    gondolajs_1.locator
], CartPage.prototype, "btnPayment", void 0);
__decorate([
    gondolajs_1.action("check item displayed", "Check item displayed in shopping cart.")
], CartPage.prototype, "checkItemDisplayed", null);
__decorate([
    gondolajs_1.action("check payment button enabled", "Check whether Payment button is enabled or not.")
], CartPage.prototype, "checkPaymentButtonEnabled", null);
__decorate([
    gondolajs_1.action("fill payment information", "Enter payment information")
], CartPage.prototype, "fillPaymentInfo", null);
CartPage = __decorate([
    gondolajs_1.page
], CartPage);
exports.CartPage = CartPage;
exports.default = new CartPage();
//# sourceMappingURL=cartPage.js.map