import AddToCartPage from '../pages/addToCartPage'
import LandingPage from '../pages/landingPage'
import { jestTimeout } from '../config'
import { productCount } from '../pageobjects/selectors'

// ### 1. Launch the Application
// ### 2. Select the Product
// ### 3. Add to Cart
// ### 4. Verify the message displayed that the product is added to Cart
// ### 5. Check the Product Count of the Cart

describe('Add to Cart', function () {
	beforeAll(async () => {
		jest.setTimeout(jestTimeout)
		await LandingPage.open()
	})

	it('Check the title and url on the Landing Page', async () => {
		await LandingPage.getTitle()
		await LandingPage.getUrl()
		await LandingPage.waitForPageLoad()
	})

	it('click on 20% discuont listed Item', async () => {
		await AddToCartPage.printedChiffonDress()
		await AddToCartPage.clickChiffonDress()
	})

	it('Check whether the Shopping Cart is enabled and click item to add to Cart', async () => {
		await AddToCartPage.clickAddToCart()
	})

	it('Verify whether the product added to Cart message is displayed', async () => {
		await AddToCartPage.cartSuccessMessage()
		let isVisible = await AddToCartPage.cartAddedMessage()
		expect(isVisible).toBeTruthy()
	})

	it('Verify the product count from the Cart', async () => {
		let getProductCount = await AddToCartPage.cartCount()
		expect(getProductCount).toEqual(productCount)
	})
})
