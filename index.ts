import fs from "fs";
import path from "path";

const scopes = [
    "https://www.googleapis.com/auth/userinfo.email",
    "https://www.googleapis.com/auth/drive.metadata.readonly",
    "https://www.googleapis.com/auth/script.projects",
    "https://www.googleapis.com/auth/script.webapp.deploy",
    "https://www.googleapis.com/auth/logging.read",
    "openid",
    "https://www.googleapis.com/auth/userinfo.profile",
    "https://www.googleapis.com/auth/drive.file",
    "https://www.googleapis.com/auth/script.deployments",
    "https://www.googleapis.com/auth/service.management",
    "https://www.googleapis.com/auth/cloud-platform"
];

const data = {
    token: {
        access_token: process.env.ACCESS_TOKEN,
        scope: scopes.join(" "),
        token_type: "Bearer",
        id_token: process.env.ID_TOKEN,
        expiry_date: 1620870307822,
        refresh_token: process.env.REFRESH_TOKEN,
    },
    oauth2ClientSettings: {
        clientId: process.env.CLIENTID,
        clientSecret: process.env.CLIENTSECRET,
        redirectUri: "http://localhost",
    },
    isLocalCreds: false,
};

fs.writeFileSync(path.resolve("~/.clasprc.json"), JSON.stringify(data, null, 2));
