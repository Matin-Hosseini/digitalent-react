const generateCookie = (response, name, value) => {
  response.cookie(name, value, {
    httpOnly: true,
    sameSite: true,
    maxAge: 3 * 24 * 60 * 60 * 1000,
  });
};

module.exports = { generateCookie };
