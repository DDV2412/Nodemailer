const mailerTransport = require("./lib/nodemailer");

require("dotenv").config();

const sendMail = async () => {
  await mailerTransport({
    to: "Ari Susanto" + "<risusanto@outlook.com>",
    subject: "Submission: Chapter-9 Challenge#<Dian Dwi Vaputra>",
    text: "Favorite Song: Shane Filan - Beautiful In White | link github: https://github.com/DDV2412",
    html: `<!DOCTYPE html>
<html>
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
  </head>
  <body style="font-family: sans-serif">
    <div style="display: block; margin: auto; max-width: 600px" class="main">
      <h1 style="font-size: 18px; font-weight: bold; margin-top: 20px">
        Dian Dwi Vaputra
      </h1>
      <h3>Favorite Song</h3>
      <p>Shane Filan - Beautiful In White</p>
      <img
        alt="Inspect with Tabs"
        src="https://m.media-amazon.com/images/I/71EodKggiQL.png"
        style="width: 100%"
      />
      <p>Sosial Account</p>
      <a href="https://github.com/DDV2412/challenge-9">Link GitHub</a>
    </div>
    <style>
      .main {
        background-color: white;
      }
      a:hover {
        border-left-width: 1em;
        min-height: 2em;
      }
    </style>
  </body>
</html>

`,
  });
};

sendMail();
