const fs = require("fs").promises;
const path = require("path");

exports.handler = async () => {
  try {
    const content = await fs.readFile(
      path.join(__dirname, "public/locales/en/common.json"),
      {
        encoding: "utf-8",
      }
    );
    return {
      statusCode: 200,
      body: JSON.stringify(content),
    };
  } catch (e) {
    return {
      statusCode: 500,
      body: e,
    };
  }
};