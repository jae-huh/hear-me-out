let baseUrl = ''

if ( process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'PRODUCTION' ) {
  baseUrl = 'https://hearmeout-api.now.sh'
} else {
  baseUrl = 'http://localhost:5000'
}

export { baseUrl }
