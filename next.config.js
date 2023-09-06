/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental : {
        serverActions : true
    },
    eslint : {
        ignoreBuildErrors : true
    }
}

module.exports = nextConfig
