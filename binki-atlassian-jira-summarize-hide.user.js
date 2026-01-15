// ==UserScript==
// @name binki-atlassian-jira-summarize-hide
// @version 1.0.0
// @homepageURL https://github.com/binki/binki-atlassian-jira-summarize-hide
// @match https://*.atlassian.net/*
// ==/UserScript==

(async () => {
  const style = document.createElement('style');
  style.textContent = `/* This is the button which appears when the summary is pre-collapsed. */
  button[data-testid='servicedesk-smart-request-summary-trigger.ui.jira-smart-summary-standard-button'],
  /* This is the expanded summary should it be displayed pre-expanded. */
  div[data-testid='servicedesk-smart-request-summary.ui.ai-container'] {
    display: none;
  }
  `;
  document.head.append(style);
})();
