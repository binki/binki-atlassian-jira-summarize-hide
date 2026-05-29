// ==UserScript==
// @name binki-atlassian-jira-summarize-hide
// @version 1.0.2
// @homepageURL https://github.com/binki/binki-atlassian-jira-summarize-hide
// @match https://*.atlassian.net/*
// ==/UserScript==

(async () => {
  const style = document.createElement('style');
  style.textContent = `/* This is the button which appears in the “Improve this issue” button menu */
  button[data-testid='issue.issue-view.views.issue-base.foundation.quick-add.improve-issue.summarize-comments'],
  /* This is the button which appears when the summary is pre-collapsed. */
  button[data-testid='servicedesk-smart-request-summary-trigger.ui.jira-smart-summary-standard-button'],
  /* This is the updated button which looks like a “reverse sort direction” button, see #1. */
  button[data-testid='issue-smart-request-summary-trigger.ui.jira-smart-summary-standard-button'],
  /* This is the expanded summary should it be displayed pre-expanded for servicedesk (CSM). */
  div[data-testid='servicedesk-smart-request-summary.ui.ai-container'],
  /* This is the expanded summary should it be displayed pre-expanded for normal Jira, see #1. */
  div[data-testid='issue-smart-request-summary.ui.ai-container'],
  /* This is the right sidebar summary see #2 */
  div[data-testid='servicedesk-ai-context-common.ui.ai-context-container.ai-container'] {
    display: none;
  }
  `;
  document.head.append(style);
})();
