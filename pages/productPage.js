import {
	colourBlack,
	printedSummerDress,
	imagePicture,
	colourOrange,
	colourBlue,
	colourYellow,
	colourSelected,
	headerLogo,
	quantityWanted,
	numberOfItems,
	checkout,
	productPrice,
} from '../pageobjects/selectors'
import BasePage from './basePage'
import AddToCartPage from './addToCartPage'

class ProductPage extends BasePage {
	async printedSummerDress() {
		return await this.waitAndClick(printedSummerDress)
	}

	async verifyTitle() {
		return await this.getTitle({ visible: true })
	}

	async blackColour() {
		await this.waitAndClick(colourBlack)
		const result = await page.evaluate(
			'document.querySelector("#color_11").getAttribute("class")'
		)
		return result
	}

	async blackColourImageUpdated() {
		await this.isElementVisible(imagePicture)
		const result = await page.evaluate(
			'document.querySelector("#bigpic").getAttribute("src");'
		)
		return result
	}

	async orangeColour() {
		await this.waitAndClick(colourOrange)
		const result = await page.evaluate(
			'document.querySelector("#color_13").getAttribute("class")'
		)
		return result
	}
	async orangeColourImageUpdated() {
		await this.isElementVisible(imagePicture)
		const result = await page.evaluate(
			'document.querySelector("#bigpic").getAttribute("src");'
		)
		return result
	}

	async blueColour() {
		await this.waitAndClick(colourBlue)
		const result = await page.evaluate(
			'document.querySelector("#color_14").getAttribute("class")'
		)
		return result
	}

	async blueColourImageUpdated() {
		await this.isElementVisible(imagePicture)
		const result = await page.evaluate(
			'document.querySelector("#bigpic").getAttribute("src");'
		)
		return result
	}

	async yellowColour() {
		await this.waitAndClick(colourYellow)
		const result = await page.evaluate(
			'document.querySelector("#color_16").getAttribute("class")'
		)
		return result
	}

	async yellowColourImageUpdated() {
		await this.isElementVisible(imagePicture)
		const result = await page.evaluate(
			'document.querySelector("#bigpic").getAttribute("src");'
		)
		return result
	}

	async colourSelected() {
		return await this.isElementVisible(colourSelected)
	}

	async navigateToHomePage() {
		await this.waitAndClick(headerLogo)
	}

	async addQuantity() {
		await this.waitAndType(quantityWanted, numberOfItems)
		await AddToCartPage.clickAddToCart()
		await AddToCartPage.cartSuccessMessage()
		await AddToCartPage.cartAddedMessage()
		return await this.waitAndClick(checkout)
	}

	async verifyTotalPrice() {
		const result = await this.getText(productPrice)
		return result
	}
}
export default new ProductPage()
