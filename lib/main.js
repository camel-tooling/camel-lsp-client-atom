const {AutoLanguageClient} = require('atom-languageclient');
const cp = require('child_process');
const path = require('path');



class CamelLanguageClient extends AutoLanguageClient {
  getGrammarScopes () { return [ 'source.java', 'text.xml' ] }
  getLanguageName () { return 'Camel' }
  getServerName () { return 'Camel LSP' }

  startServerProcess () {
    const serverHome = path.join(__dirname, '..', 'server');
    const serverJar = path.join(serverHome, 'camel-lsp-server-1.1.0-SNAPSHOT.jar');
    return cp.spawn('java', ['-jar', serverJar]);
  }

}

module.exports = new CamelLanguageClient();
