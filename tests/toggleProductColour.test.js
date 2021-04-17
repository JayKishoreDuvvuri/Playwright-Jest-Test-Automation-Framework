import LandingPage from '../pages/landingPage'
import ProductPage from '../pages/productPage'
import { jestTimeout } from '../config'
import {
	blackColourImageUpdated,
	blueColourImageUpdated,
	itemSelected,
	navigateUrl,
	orangeColourImageUpdated,
	title,
	yellowColourImageUpdated,
} from '../pageobjects/selectors'

// ### 1. Launch the Application
// ### 2. Click on the 5th Product with 5% discount from the list
// ### 3. Toggle between the Colours for this selected product
// ### 4. Verify the image is updated when selecting different colours
// ### 5. Click the Logo at the top and Navigate to Landing Page

describe('Toggle between the colours of the Product', () => {
	beforeAll(async () => {
		jest.setTimeout(jestTimeout)
		await LandingPage.open()
	})

	it('Check the title and url on the Landing Page', async () => {
		await LandingPage.getTitle()
		await LandingPage.getUrl()
		await LandingPage.waitForPageLoad()
		expect(await LandingPage.getTitle()).toEqual(title)
		expect(await LandingPage.getUrl()).toEqual(navigateUrl)
	})

	it('Click on the 5th Product with 5% discount on the Landing Page', async () => {
		await ProductPage.printedSummerDress()
		await ProductPage.verifyTitle()
	})

	it('Check when selecting black colour the image is updated', async () => {
		const result = await ProductPage.blackColour()
		expect(result).toContain(itemSelected)

		const isVisible = await ProductPage.colourSelected()
		expect(isVisible).toBeTruthy()

		const colourUpdated = await ProductPage.blackColourImageUpdated()
		expect(colourUpdated).toEqual(blackColourImageUpdated)
	})

	it('Check when selecting orange colour the image is updated', async () => {
		const result = await ProductPage.orangeColour()
		expect(result).toContain(itemSelected)

		const isVisible = await ProductPage.colourSelected()
		expect(isVisible).toBeTruthy()

		const colourUpdated = await ProductPage.orangeColourImageUpdated()
		expect(colourUpdated).toEqual(orangeColourImageUpdated)
	})

	it('Check when selecting blue colour the image is updated', async () => {
		const result = await ProductPage.blueColour()
		expect(result).toContain(itemSelected)

		const isVisible = await ProductPage.colourSelected()
		expect(isVisible).toBeTruthy()

		const colourUpdated = await ProductPage.blueColourImageUpdated()
		expect(colourUpdated).toEqual(blueColourImageUpdated)
	})

	it('Check when selecting yellow colour the image is updated', async () => {
		const result = await ProductPage.yellowColour()
		expect(result).toContain(itemSelected)

		const isVisible = await ProductPage.colourSelected()
		expect(isVisible).toBeTruthy()

		const colourUpdated = await ProductPage.yellowColourImageUpdated()
		expect(colourUpdated).toEqual(yellowColourImageUpdated)
	})

	it('Navigate to Landing Page', async () => {
		await ProductPage.navigateToHomePage()
		expect(await ProductPage.getTitle()).toEqual(title)
		expect(await ProductPage.getUrl()).toEqual(navigateUrl)
	})
})
