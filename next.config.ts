import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

const nodeEnv = process.env.NODE_ENV;

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: nodeEnv === "development" ? true : false,
};

export default withNextIntl(nextConfig);
