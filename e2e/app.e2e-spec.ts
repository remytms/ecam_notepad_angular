import { EcamNotepadAngularPage } from './app.po';

describe('ecam-notepad-angular App', function() {
  let page: EcamNotepadAngularPage;

  beforeEach(() => {
    page = new EcamNotepadAngularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
