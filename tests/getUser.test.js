const assert = require("assert");
const { expect } = require ("chai")

describe("API Automation Reqres.in", function () {
    it("Get list User", async function () {
        const response = await fetch("https://reqres.in/api/users?page=2");
        const data = await response.json();

        console.log(data);
        assert.strictEqual(response.status, 200);
        assert.equal(data.data[0].id, "7");
});
});