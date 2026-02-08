import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./style/contactPage.css";
import { Alert, Button, Form } from "react-bootstrap";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CallIcon from "@mui/icons-material/Call";
import "bootstrap/dist/css/bootstrap.min.css";

// import Alert from "@mui/material/Alert";

const ContactPage = () => {
  const form = useRef();
  const [alert, setAlert] = useState({
    open: false,
    message: "",
    severity: "success",
  });

  //emailjs configuration and sending email function
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_fccac8j", "template_4ursgne", form.current, {
        publicKey: "pajGkv57u0wfe-aCc",
      })
      .then(
        () => {
          setAlert({
            open: true,
            message: "Email sent successfully!",
            variant: "success",
          });
        },
        (error) => {
          setAlert({
            open: true,
            message: `Failed to send email: ${error.text}`,
            variant: "error",
          });
        },
      );
    e.target.reset();
  };
  //end of emailjs configuration and sending email function
  return (
    <>
      <div className="contact-page">
        <h1 className="text-center  mt-5" style={{ color: "#1a4d6d" }}>
          Contact Us
        </h1>
        <p className="text-center mt-2 ">
          Have a question about your medication or need assistance? We’re always
          here to help, feel free to contact us online or by phone.
        </p>
        <ContactDetails />
        <div className="container contact-box">
          <div className="row">
            <div className="col-sm-12 col-md-5   offset-md-1 contact-form">
              <h2 style={{ marginLeft: "20px", marginTop: "20px" }}>
                Get In Touch
              </h2>
              <div className="p-4">
                {/* Alert Section */}
                {alert.show && (
                  <Alert
                    variant={alert.variant}
                    onClose={() => setAlert({ ...alert, show: false })}
                    dismissible
                    className="shadow-sm"
                  >
                    <Alert.Heading>
                      {alert.variant === "success" ? "Success!" : "Error"}
                    </Alert.Heading>
                    <p className="mb-0">{alert.message}</p>
                  </Alert>
                )}
                {/* Contact form using emailjs to send emails directly from the client side */}
                <form ref={form} onSubmit={sendEmail}>
                  <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label className="form-label ">Name</Form.Label>
                    <Form.Control
                      type="text"
                      className="form-control mb-2"
                      id="name"
                      aria-describedby="emailHelp"
                      name="user_name"
                      required
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className="form-label">
                      Email address
                    </Form.Label>
                    <Form.Control
                      type="email"
                      className="form-control mb-2"
                      id="email"
                      aria-describedby="emailHelp"
                      name="user_email"
                      required
                    />
                  </Form.Group>
                  <div id="emailHelp" className="form-text mb-2">
                    We ll never share your email with anyone else.
                  </div>
                  <Form.Group className="mb-3" controlId="formMessage">
                    <Form.Label className="form-label">Comment..</Form.Label>
                    <Form.Control
                      as="textarea"
                      className="form-control mb-2"
                      id="Textarea"
                      rows="3"
                      required
                      name="message"
                    />
                  </Form.Group>
                  <Button type="submit" className="contact-btn">
                    Submit
                  </Button>
                </form>
              </div>
            </div>
            <div className="col-md-5  col-sm-12 contact-form-img ">
              <h4
                style={{
                  display: "flex",
                  margin: "0 auto",
                  alignItems: "flex-end",
                  height: "100%",
                  width: "70%",
                  paddingBottom: "50px",
                  fontStyle: "italic",
                  fontWeight: "550",
                  color: "#1a4d6d",
                }}
              >
                Reach out to us today and discover how we can help you.
              </h4>
            </div>
          </div>
        </div>
        {/* // Snackbar component to display success or error messages after form submission */}
      </div>
    </>
  );
};

export default ContactPage;

const ContactDetails = () => {
  const contactDetailsStyle = {
    color: "#7d7d7d",
    fontSize: "15px",
  };
  return (
    <>
      <div className="container mt-5 ">
        <div className="row  ">
          <div className="col-sm-12 col-md-5  offset-md-1   ">
            <h4>Get help by phone</h4>
            <p style={contactDetailsStyle}>
              For any questions related to your medications, account issues, or
              prescription notification preferences, please contact us at +267
              77148663
            </p>
            <h4>Visit us on Social Media</h4>
            <p style={contactDetailsStyle}>
              We are available on social media. Stay updated with news and
              events from our pharmacy. Be sure to like our Facebook and
              Instagram pages
            </p>
            <h4>Contact us online</h4>
            <p style={contactDetailsStyle}>
              Need to contact us via e-mail? Fill out the form below and we will
              contact you. Please allow 24-48 hours for a response. For more
              quicker responses please call us directly.
            </p>
          </div>
          <div className="col-md-4 col-sm-12  offset-md-2 ">
            <div className="location ">
              <h4>
                <LocationOnIcon
                  style={{ fontSize: "30px", color: "#fe9d00" }}
                />
                Pharmacy Location
              </h4>
              <div className="location-details  ps-5">
                <strong>Ikins Pharmacy</strong>
                <br />
                <cite>
                  Plot 210 ,cental district Mahalapye <br />
                  opposite Taxi Rank,by Fasion world
                </cite>
              </div>
            </div>
            <div className="our-contact  mt-4 ">
              <h4>
                <CallIcon style={{ fontSize: "30px", color: "#fe9d00" }} />{" "}
                Pharmacy Contacts
              </h4>
              <div className="c-details ps-5">
                <cite>
                  <strong>Phone:</strong> 420200
                </cite>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
