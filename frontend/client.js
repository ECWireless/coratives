// client.js
import sanityClient from '@sanity/client'

export default sanityClient({
  projectId: 'h1brlrjj',
  dataset: 'production',
  useCdn: true
})
