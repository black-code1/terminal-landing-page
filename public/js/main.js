const about = document.querySelector("#about");
const contact = document.querySelector("#contact");
const aboutContent = document.querySelector("#about-content");
const contactContent = document.querySelector("#contact-content");

const aboutBoxHandler = () => {
  const aboutBox = new WinBox({
    title: "About black code",
    url: "https://portfoliodelegrand.netlify.app",
    // modal: true,
    width: "400px",
    height: "400px",
    top: 50,
    right: 50,
    bottom: 50,
    left: 50,
    // mount: aboutContent,
    /*onfocus: function () {
      this.setBackground("#00aa00");
    },
    onblur: function () {
      this.setBackground("#777");
    },*/
  });
};

const contactBoxHandler = () => {
  const contactBox = new WinBox({
    title: "Contact Me",
    background: "#00aa00",
    width: "400px",
    height: "400px",
    top: 150,
    right: 50,
    bottom: 50,
    left: 250,
    mount: contactContent,
    onfocus: function () {
      this.setBackground("#00aa00");
    },
    onblur: function () {
      this.setBackground("#777");
    },
  });
};

about.addEventListener("click", aboutBoxHandler);

contact.addEventListener("click", contactBoxHandler);
