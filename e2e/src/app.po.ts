import { browser, by, element } from 'protractor';

export const navigate = () => browser.get('/');

const toolbarTitleSelector = 'body > bo-root > bo-nav > mat-sidenav-container > mat-sidenav-content > mat-toolbar > span';

export const getToolbarTitle = () => element(by.css(toolbarTitleSelector)).getText();
