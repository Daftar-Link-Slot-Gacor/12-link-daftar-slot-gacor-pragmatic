'use babel';

import 12LinkDaftarSlotGacorPragmaticView from './12-link-daftar-slot-gacor-pragmatic-view';
import { CompositeDisposable } from 'atom';

export default {

  12LinkDaftarSlotGacorPragmaticView: null,
  modalPanel: null,
  subscriptions: null,

  activate(state) {
    this.12LinkDaftarSlotGacorPragmaticView = new 12LinkDaftarSlotGacorPragmaticView(state.12LinkDaftarSlotGacorPragmaticViewState);
    this.modalPanel = atom.workspace.addModalPanel({
      item: this.12LinkDaftarSlotGacorPragmaticView.getElement(),
      visible: false
    });

    // Events subscribed to in atom's system can be easily cleaned up with a CompositeDisposable
    this.subscriptions = new CompositeDisposable();

    // Register command that toggles this view
    this.subscriptions.add(atom.commands.add('atom-workspace', {
      '12-link-daftar-slot-gacor-pragmatic:toggle': () => this.toggle()
    }));
  },

  deactivate() {
    this.modalPanel.destroy();
    this.subscriptions.dispose();
    this.12LinkDaftarSlotGacorPragmaticView.destroy();
  },

  serialize() {
    return {
      12LinkDaftarSlotGacorPragmaticViewState: this.12LinkDaftarSlotGacorPragmaticView.serialize()
    };
  },

  toggle() {
    console.log('12LinkDaftarSlotGacorPragmatic was toggled!');
    return (
      this.modalPanel.isVisible() ?
      this.modalPanel.hide() :
      this.modalPanel.show()
    );
  }

};
