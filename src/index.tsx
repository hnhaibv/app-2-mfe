import("./bootstrap").then(({ mount }) => {
  const localRoot = document.getElementById("lms-curriculum-app");

  mount({
    mountPoint: localRoot!,
    routingStrategy: "browser",
  });
});

export {};
