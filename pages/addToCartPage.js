import BasePage from './basePage'
import {
	addToCartButton,
	successMessage,
	cartAddedMessage,
	closeBtn,
	itemCount,
	printedChiffonDress,
} from '../pageobjects/selectors'

class AddToCartPage extends BasePage {
	async printedChiffonDress() {
		await this.isElementVisible(printedChiffonDress)
	}

	async clickChiffonDress() {
		await this.waitAndClick(printedChiffonDress)
	}

	async clickAddToCart() {
		return await this.waitAndClick(addToCartButton)
	}

	async cartAddedMessage() {
		return await this.isElementVisible(cartAddedMessage)
	}

	async cartSuccessMessage() {
		return await this.isElementVisible(successMessage)
	}

	async cartCount() {
		await this.waitAndClick(closeBtn)
		return await this.getText(itemCount)
	}
}
export default new AddToCartPage()
