const { expect } = require("chai");

describe("Create User", () => {
  it("POST Create User", async () => {
    const response = await fetch("https://reqres.in/api/users", {
      method: "POST",
      headers: {
        "x-api-key": "reqres-free-v1",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: "Indah",
        job: "QA Tester",
      }),
    });

    const data = await response.json();
    console.log(data);

    expect(response.status).to.equal(201);
    expect(data.name).to.equal("Indah");
    expect(data.job).to.equal("QA Tester");
  });
});