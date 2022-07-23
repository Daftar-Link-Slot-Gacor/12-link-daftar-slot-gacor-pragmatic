'use babel';

import 12LinkDaftarSlotGacorPragmatic from '../lib/12-link-daftar-slot-gacor-pragmatic';

// Use the command `window:run-package-specs` (cmd-alt-ctrl-p) to run specs.
//
// To run a specific `it` or `describe` block add an `f` to the front (e.g. `fit`
// or `fdescribe`). Remove the `f` to unfocus the block.

describe('12LinkDaftarSlotGacorPragmatic', () => {
  let workspaceElement, activationPromise;

  beforeEach(() => {
    workspaceElement = atom.views.getView(atom.workspace);
    activationPromise = atom.packages.activatePackage('12-link-daftar-slot-gacor-pragmatic');
  });

  describe('when the 12-link-daftar-slot-gacor-pragmatic:toggle event is triggered', () => {
    it('hides and shows the modal panel', () => {
      // Before the activation event the view is not on the DOM, and no panel
      // has been created
      expect(workspaceElement.querySelector('.12-link-daftar-slot-gacor-pragmatic')).not.toExist();

      // This is an activation event, triggering it will cause the package to be
      // activated.
      atom.commands.dispatch(workspaceElement, '12-link-daftar-slot-gacor-pragmatic:toggle');

      waitsForPromise(() => {
        return activationPromise;
      });

      runs(() => {
        expect(workspaceElement.querySelector('.12-link-daftar-slot-gacor-pragmatic')).toExist();

        let 12LinkDaftarSlotGacorPragmaticElement = workspaceElement.querySelector('.12-link-daftar-slot-gacor-pragmatic');
        expect(12LinkDaftarSlotGacorPragmaticElement).toExist();

        let 12LinkDaftarSlotGacorPragmaticPanel = atom.workspace.panelForItem(12LinkDaftarSlotGacorPragmaticElement);
        expect(12LinkDaftarSlotGacorPragmaticPanel.isVisible()).toBe(true);
        atom.commands.dispatch(workspaceElement, '12-link-daftar-slot-gacor-pragmatic:toggle');
        expect(12LinkDaftarSlotGacorPragmaticPanel.isVisible()).toBe(false);
      });
    });

    it('hides and shows the view', () => {
      // This test shows you an integration test testing at the view level.

      // Attaching the workspaceElement to the DOM is required to allow the
      // `toBeVisible()` matchers to work. Anything testing visibility or focus
      // requires that the workspaceElement is on the DOM. Tests that attach the
      // workspaceElement to the DOM are generally slower than those off DOM.
      jasmine.attachToDOM(workspaceElement);

      expect(workspaceElement.querySelector('.12-link-daftar-slot-gacor-pragmatic')).not.toExist();

      // This is an activation event, triggering it causes the package to be
      // activated.
      atom.commands.dispatch(workspaceElement, '12-link-daftar-slot-gacor-pragmatic:toggle');

      waitsForPromise(() => {
        return activationPromise;
      });

      runs(() => {
        // Now we can test for view visibility
        let 12LinkDaftarSlotGacorPragmaticElement = workspaceElement.querySelector('.12-link-daftar-slot-gacor-pragmatic');
        expect(12LinkDaftarSlotGacorPragmaticElement).toBeVisible();
        atom.commands.dispatch(workspaceElement, '12-link-daftar-slot-gacor-pragmatic:toggle');
        expect(12LinkDaftarSlotGacorPragmaticElement).not.toBeVisible();
      });
    });
  });
});
