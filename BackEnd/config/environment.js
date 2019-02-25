const environments = {
    development: "development",
    production: "production",
    preproduction: "preproduction",
    test: "test"
};

const ENV = environments[process.env.NODE_ENV] || environments.development;

const config = {
    [environments.development]: {
        MongoDB: {
            URI: "localhost:27017/demiumRealUnicorn_dev",
            host: "localhost",
            port:27017,
            db: "demiumRealUnicorn_dev"
        },
        PORT: 8080
    },

    [environments.production]: {
        MongoDB: {
            URI: "localhost:27017/demiumRealUnicorn",
            host: "localhost",
            port:27017,
            db: "demiumRealUnicorn"
        },
        PORT: 80
    },

    [environments.preproduction]: {

    },

    [environments.test]: {
        MongoDB: {
            URI: "localhost:27017/demiumRealUnicorn_test",
            host: "localhost",
            port:27017,
            db: "demiumRealUnicorn_test"
        },
        PORT: 8080
    },
};

console.log(ENV);
console.log(config[ENV]);

process.env = {
    ...process.env,
    ...config[ENV]
};