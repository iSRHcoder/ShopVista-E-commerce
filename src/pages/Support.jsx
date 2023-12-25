/* eslint-disable react/no-unescaped-entities */
import AppFooter from "./../components/AppFooter/AppFooter";
const Support = () => {
  return (
    <>
      <div className="p-5">
        <div className="d-flex justify-content-start align-items-start flex-column">
          <div className="d-flex justify-content-start align-items-start flex-column">
            Welcome to our Support Center! We are here to assist you with any
            questions or concerns you may have. Below, you'll find information
            on common topics to help make your shopping experience smooth and
            enjoyable.
          </div>
          <h4>Frequently Asked Questions (FAQs)</h4>
          <div className="d-flex justify-content-start align-items-start flex-column mb-4">
            <h5>1. Ordering and Payments</h5>

            <div className="d-flex justify-content-start align-items-start flex-column">
              <strong>How do I place an order?</strong>
              You can place an order by browsing our products, selecting the
              items you want, and proceeding to checkout.
              <strong> What payment methods do you accept?</strong>
              We accept major credit cards, PayPal, and other secure payment
              methods. For more details, please visit our Payment Methods page.
            </div>
          </div>
          <div className="d-flex justify-content-start align-items-start flex-column mb-4">
            <h5>2. Shipping and Delivery</h5>
            <div className="d-flex justify-content-start align-items-start flex-column">
              <strong>How can I track my order?</strong>
              Once your order is shipped, you will receive a confirmation email
              with a tracking number. You can use this number to track your
              shipment.
              <strong>What are your shipping rates and delivery times?</strong>
              Shipping rates and delivery times vary based on your location.
              Please refer to our Shipping Information page for detailed
              information.
            </div>
          </div>
          <div className="d-flex justify-content-start align-items-start flex-column mb-4">
            <h5>3. Returns and Exchanges</h5>
            <div className="d-flex justify-content-start align-items-start flex-column">
              <strong>How do I return an item?</strong>
              If you're not satisfied with your purchase, you can initiate a
              return within [X] days of receiving your order. Visit our Returns
              & Exchanges page for instructions.
              <strong>What is your refund policy?</strong>
              We offer refunds for returned items in accordance with our Refund
              Policy. Please review this policy for more information.
            </div>
          </div>
          <div className="d-flex justify-content-start align-items-start flex-column mb-4">
            <h5>4. Account and Security</h5>
            <div className="d-flex justify-content-start align-items-start flex-column">
              <strong>How do I create an account?</strong>
              You can create an account by clicking on the "Sign Up" link and
              following the registration process.
              <strong>How can I reset my password?</strong>
              If you forget your password, you can reset it by visiting the
              "Forgot Password" page and following the instructions.
            </div>
          </div>
        </div>
      </div>
      <AppFooter />
    </>
  );
};

export default Support;
