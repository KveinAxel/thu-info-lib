import {InfoHelper} from "./dist";

(async () => {
    const helper = new InfoHelper();
    await helper.login(
        {
            userId: "", // Fill your credentials information here
            password: "",
            dormPassword: "",
        },
    );

    // Go on with your code here.

})().catch(console.error);
