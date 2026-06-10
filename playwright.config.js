// @ts-check
// 
import { chromium, defineConfig, devices, firefox, webkit } from '@playwright/test';
import { trace } from 'console';

//const {devices}= require('@playwright/test');



/**
 * @see https://playwright.dev/docs/test-configuration
 */

const config=({
  testDir: './tests',
  timeout: 40*1000,
   expect:
  {
   timeout:   5000,
   
  },
  reporter: 'html',
  
  use:{
    browserName: 'chromium',
    headless: false,
    screenshot:'on',
    trace: 'Retain-on-failure' // off, on to track the logs
  }

  
});

module.exports=config

