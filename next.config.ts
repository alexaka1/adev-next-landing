/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
import '~/env';
import { type NextConfig } from 'next';

const config: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default config;
