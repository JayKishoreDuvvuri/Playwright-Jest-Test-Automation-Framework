import LandingPage from '../pages/landingPage'
import { jestTimeout } from '../config'

// ### 1. Launch the Application
// ### 2. Arrive on the Landing Page
// ### 3. Verify the product names are visible
// ### 4. Print the Name of Products in to the Test Reort

describe('Check Product Names Visible and Print it to Test Report', () => {
	beforeAll(async () => {
		jest.setTimeout(jestTimeout)
		await LandingPage.open()
	})

	it('Check the title and url on the Landing Page', async () => {
		await LandingPage.getTitle()
		await LandingPage.getUrl()
		await LandingPage.waitForPageLoad()
	})
	it('Check the product name: Faded Short Sleeve T-shirts is visible', async () => {
		await LandingPage.fadedShortSleeveTshirts()
	})

	it('Check the product name: Blouse is visible', async () => {
		await LandingPage.blouse()
	})

	it('Check the product name: Printed Dress is visible', async () => {
		await LandingPage.printedDress()
	})

	it('Check the product name: Printed Dress Two is visible', async () => {
		await LandingPage.printedDressTwo()
	})

	it('Check the product name: Printed Summer Dress is visible', async () => {
		await LandingPage.printedSummerDress()
	})

	it('Check the product name: Printed Summer Dress Two is visible', async () => {
		await LandingPage.printedSummerDressTwo()
	})

	it('Check the product name: Printed Chiffon Dress is visible', async () => {
		await LandingPage.printedChiffonDress()
	})
})
