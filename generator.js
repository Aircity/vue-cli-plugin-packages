module.exports = api => {
  api.extendPackage({
    private: true,
    workspaces: ["packages/*"]
  });

  api.render("./template");
};
