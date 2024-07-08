// playwright.config.ts
import {PlaywrightTestConfig} from '@playwright/test';

const playwright_config: PlaywrightTestConfig = {
  reporter: 'list',
    maxFailures: 1

};
export default playwright_config;
