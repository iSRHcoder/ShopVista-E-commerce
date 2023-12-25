import AppFooter from "./../components/AppFooter/AppFooter";
const ContactUs = () => {
  return (
    <>
      <div className="d-flex justify-content-start align-items-start flex-column p-5">
        <p>
          If you cannot find the information you need in our FAQs, feel free to
          contact our Customer Support team. We are here to help you!
        </p>
        <ul className="d-inline-block">
          <li>
            <strong>Email:</strong> support@shopvista.in
          </li>
          <li>
            <strong>Phone:</strong> +91 9403886801
          </li>
        </ul>
        <h3>Hours of Operation</h3>
        <p>
          Our Customer Support team is available to assist you during the
          following hours:
        </p>
        <ul className="d-inline-block">
          <li>
            <strong>Monday-Saturday</strong> 09:00AM-06:00PM
          </li>
          <li>
            <strong>Sunday:</strong> Closed
          </li>
        </ul>
        <h5>
          Thank you for choosing ShopVista! We appreciate your business and are
          committed to providing you with exceptional service. HAPPY
          SHOPPING...!
        </h5>
      </div>
      <div style={{ marginTop: "12.7%" }}>
        <AppFooter />
      </div>
    </>
  );
};

export default ContactUs;
