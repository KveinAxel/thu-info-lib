import {InfoHelper} from "../src";

let userId = "";
let password = "";

try {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const secrets = require("../secrets.json");
    userId = secrets.userId;
    password = secrets.password;
} catch (e) {
    userId = process.env.INFO_USER_ID!;
    password = process.env.INFO_PASSWORD!;
}

it("should enter mocked account", async () => {
    const helper = new InfoHelper();
    await helper.login({userId: "8888", password: "8888"});
    await helper.logout();
    expect(helper.mocked()).toEqual(true);
}, 60000);

it("should login successfully.", async () => {
    const helper = new InfoHelper();
    await helper.login({userId, password});
    await helper.logout();
    expect(helper.mocked()).toEqual(false);
}, 60000);
