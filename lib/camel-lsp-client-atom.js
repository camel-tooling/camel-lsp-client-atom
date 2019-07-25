'use babel';

import CamelLspClientAtomView from './camel-lsp-client-atom-view';
import { CompositeDisposable } from 'atom';

export default {

  camelLspClientAtomView: null,
  modalPanel: null,
  subscriptions: null,

  activate(state) {
    this.camelLspClientAtomView = new CamelLspClientAtomView(state.camelLspClientAtomViewState);
    this.modalPanel = atom.workspace.addModalPanel({
      item: this.camelLspClientAtomView.getElement(),
      visible: false
    });

    // Events subscribed to in atom's system can be easily cleaned up with a CompositeDisposable
    this.subscriptions = new CompositeDisposable();

    // Register command that toggles this view
    this.subscriptions.add(atom.commands.add('atom-workspace', {
      'camel-lsp-client-atom:toggle': () => this.toggle()
    }));
  },

  deactivate() {
    this.modalPanel.destroy();
    this.subscriptions.dispose();
    this.camelLspClientAtomView.destroy();
  },

  serialize() {
    return {
      camelLspClientAtomViewState: this.camelLspClientAtomView.serialize()
    };
  },

  toggle() {
    console.log('CamelLspClientAtom was toggled!');
    return (
      this.modalPanel.isVisible() ?
      this.modalPanel.hide() :
      this.modalPanel.show()
    );
  }

};
