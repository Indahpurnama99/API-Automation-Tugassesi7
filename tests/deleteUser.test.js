const { expect } = require("chai");

describe("Delete User", () => {
  it("DELETE User", async () => {
    const response = await fetch("https://reqres.in/api/users/2", {
      method: "DELETE",
      headers: {
        "x-api-key": "reqres-free-v1",
        "Content-Type": "application/json",
      },
    });

    console.log("Status DELETE:", response.status);

    expect(response.status).to.equal(204);
  });
});
