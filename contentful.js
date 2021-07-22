import { createClient as createClientDelivery} from "contentful";
import { createClient as createClientManagment } from 'contentful-management'

export  const delivery = createClientDelivery({
  // This is the space ID. A space is like a project folder in Contentful terms
  space: "nezh43dj970l",
  // This is the access token for this space. Normally you get both ID and the token in the Contentful web app
  accessToken: "GckgRfXgjD36l9CmBETE8gFSevBv_Pzcek_B_jToneo"
});


export const managment = createClientManagment({
  accessToken: 'CFPAT-u3zzUa9J-qLbPWpDV6-hebFRqMmSZPV0kC92hSi0CWs',
},
{
    type: 'plain',
    defaults: {
      spaceId: 'nezh43dj970l',
      environmentId: 'master',
    },
  }
)