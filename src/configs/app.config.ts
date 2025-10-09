export function appConfig() {
  return {
    port : +process.env.APP_PORT!,
    name : process.env.APP_NAME!,
    cwd : process.cwd(),
    apiPrefix : process.env.APP_PREFIX!,
    logo : process.env.APP_LOGO!,
    nodeEnv:
      process.env.APP_NODE_ENV === 'production'
        ? 'production'
        : process.env.APP_NODE_ENV === 'staging'
          ? 'staging'
          : 'development',
  }
}