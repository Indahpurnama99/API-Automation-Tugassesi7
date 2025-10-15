const { expect } = require("chai");

describe("Update User", () => {
  it("PATCH Update User", async () => {
    const response = await fetch("https://reqres.in/api/users/2", {
      method: "PATCH",
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
    console.log("Hasil PATCH:", data);

    expect(response.status).to.equal(200);
    expect(data.job).to.equal("QA Tester");
  });
});