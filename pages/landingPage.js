import BasePage from './basePage'
import {
	blouse,
	fadedShortSleeveTshirts,
	printedChiffonDress,
	printedDress,
	printedDressTwo,
	printedSummerDress,
	printedSummerDressTwo,
} from '../pageobjects/selectors'
import { baseUrl, timeout } from '../config'

class LandingPage extends BasePage {
	constructor() {
		super(baseUrl, timeout)
	}

	async open() {
		await super.open()
		await super.waitForPageLoad()
	}

	async fadedShortSleeveTshirts() {
		return await this.isXPathVisible(fadedShortSleeveTshirts)
	}

	async blouse() {
		return await this.isXPathVisible(blouse)
	}

	async printedDress() {
		return await this.isXPathVisible(printedDress)
	}

	async printedDressTwo() {
		return await this.isXPathVisible(printedDressTwo)
	}
	async printedSummerDress() {
		return await this.isElementVisible(printedSummerDress)
	}
	async printedSummerDressTwo() {
		return await this.isXPathVisible(printedSummerDressTwo)
	}
	async printedChiffonDress() {
		return await this.isElementVisible(printedChiffonDress)
	}
}
export default new LandingPage()
