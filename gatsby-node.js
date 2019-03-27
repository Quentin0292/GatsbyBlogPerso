// Gatsby node génére les pages en fonction des differentes requetes
const path = require(`path`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return graphql(
    // on fait une requete avec allMarkdownRemark
    `
     {
       allMarkdownRemark(sort: { fields: [frontmatter___date]
      , order: DESC }) {
        edges {
          node {
            frontmatter {
              slug
              title
            }
          }
        }
      }
     }
    `
    // une fois la requete effectuée on récupere une promesse, avec le then on passe à l'étape supérieure
  ).then(result => {
    console.log(JSON.stringify(result, null, 2))
    // pour la facilité de lecture on stocke toutes les informations dans la variable post
    const posts = result.data.allMarkdownRemark.edges

    // puis pour chaque posts trouvés, on va createPage par posts
    posts.forEach(post => {
      createPage({
        // adresse URL de la page
        path: post.node.frontmatter.slug,
        // template de la page (il faut créer un dossier template dans source)
        component: path.resolve(`./src/templates/post.js`),
        // donner une information dans la page
        context: {
          slug: post.node.frontmatter.slug
        },
      })
    })
  })
}

// C'est juste UNE REQUETE qui RENVOIE une DONNEE et apres tout simplement UNE FONCTION QUI CREER LES PAGES
