const { configureRuntimeEnv } = require("next-runtime-env/build/configure");

configureRuntimeEnv();

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
};

module.exports = nextConfig;
