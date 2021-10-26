export const getEnv = (env: string, defaultValue: string): string => {
    let result = null
    const pseudoEnv = (window as any)._env_
    if (pseudoEnv) {
        result = pseudoEnv[env]
    }
    if (!result && process && process.env) {
        result = process.env[env]
    }
    if (!result) {
        result = defaultValue
    }
    return result
}