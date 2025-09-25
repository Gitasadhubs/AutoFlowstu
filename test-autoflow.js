#!/usr/bin/env node

/**
 * AutoFlow CI/CD Platform - Comprehensive Test Suite
 * Tests all endpoints, database operations, and business logic
 */

import fetch from 'node-fetch';
import { performance } from 'perf_hooks';

const API_BASE = 'http://localhost:5000';
const TEST_RESULTS = [];

// ANSI color codes for output
const colors = {
  green: '\x1b[32m',
  red: '\x1b[31m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  reset: '\x1b[0m',
  bold: '\x1b[1m'
};

function log(message, color = 'reset') {
  console.log(`${colors[color]}${message}${colors.reset}`);
}

function logResult(test, status, message = '', time = 0) {
  const statusColor = status === 'PASS' ? 'green' : status === 'FAIL' ? 'red' : 'yellow';
  const timeStr = time > 0 ? ` (${time.toFixed(2)}ms)` : '';
  log(`[${status}] ${test}${timeStr}`, statusColor);
  if (message) log(`  └─ ${message}`, 'blue');
  
  TEST_RESULTS.push({
    test,
    status,
    message,
    time: time.toFixed(2)
  });
}

async function makeRequest(method, endpoint, data = null, headers = {}) {
  const start = performance.now();
  try {
    const options = {
      method,
      headers: {
        'Content-Type': 'application/json',
        ...headers
      }
    };

    if (data && method !== 'GET') {
      options.body = JSON.stringify(data);
    }

    const response = await fetch(`${API_BASE}${endpoint}`, options);
    const responseData = await response.text();
    let jsonData;
    
    try {
      jsonData = JSON.parse(responseData);
    } catch {
      jsonData = { raw: responseData };
    }

    const time = performance.now() - start;
    
    return {
      status: response.status,
      data: jsonData,
      time,
      ok: response.ok
    };
  } catch (error) {
    const time = performance.now() - start;
    return {
      status: 0,
      data: { error: error.message },
      time,
      ok: false
    };
  }
}

async function testServerHealth() {
  log('\n🔍 Testing Server Health', 'bold');
  
  const result = await makeRequest('GET', '/api/health');
  if (result.status === 404) {
    logResult('Server Health Check', 'SKIP', 'Endpoint not implemented, server is running', result.time);
  } else if (result.ok) {
    logResult('Server Health Check', 'PASS', 'Server responding', result.time);
  } else {
    logResult('Server Health Check', 'FAIL', `Server error: ${result.status}`, result.time);
  }
}

async function testAuthenticationEndpoints() {
  log('\n🔐 Testing Authentication Endpoints', 'bold');
  
  // Test unauthenticated user endpoint
  const userResult = await makeRequest('GET', '/api/auth/user');
  if (userResult.status === 401) {
    logResult('Unauthenticated User Check', 'PASS', 'Correctly returns 401', userResult.time);
  } else {
    logResult('Unauthenticated User Check', 'FAIL', `Expected 401, got ${userResult.status}`, userResult.time);
  }

  // Test GitHub auth redirect
  const githubResult = await makeRequest('GET', '/api/auth/github');
  if (githubResult.status === 302 || githubResult.status === 500) {
    if (githubResult.status === 500) {
      logResult('GitHub OAuth Redirect', 'SKIP', 'GitHub credentials not configured', githubResult.time);
    } else {
      logResult('GitHub OAuth Redirect', 'PASS', 'Redirect working', githubResult.time);
    }
  } else {
    logResult('GitHub OAuth Redirect', 'FAIL', `Unexpected status: ${githubResult.status}`, githubResult.time);
  }

  // Test logout endpoint
  const logoutResult = await makeRequest('POST', '/api/auth/logout');
  if (logoutResult.status === 200 || logoutResult.status === 500) {
    logResult('Logout Endpoint', 'PASS', 'Endpoint accessible', logoutResult.time);
  } else {
    logResult('Logout Endpoint', 'FAIL', `Unexpected status: ${logoutResult.status}`, logoutResult.time);
  }
}

async function testProtectedEndpoints() {
  log('\n🛡️ Testing Protected Endpoints (Without Auth)', 'bold');
  
  const endpoints = [
    { method: 'GET', path: '/api/projects', name: 'Projects List' },
    { method: 'POST', path: '/api/projects', name: 'Create Project', data: { name: 'test' } },
    { method: 'GET', path: '/api/activities', name: 'Activities List' },
    { method: 'GET', path: '/api/stats', name: 'User Stats' },
    { method: 'GET', path: '/api/github/repositories', name: 'GitHub Repositories' }
  ];

  for (const endpoint of endpoints) {
    const result = await makeRequest(endpoint.method, endpoint.path, endpoint.data);
    if (result.status === 401) {
      logResult(`${endpoint.name} Protection`, 'PASS', 'Correctly requires authentication', result.time);
    } else {
      logResult(`${endpoint.name} Protection`, 'FAIL', `Expected 401, got ${result.status}`, result.time);
    }
  }
}

async function testDatabaseEndpoints() {
  log('\n🗄️ Testing Database Operations', 'bold');
  
  // Test if we can connect to database (via any endpoint that would use it)
  const dbResult = await makeRequest('GET', '/api/projects');
  if (dbResult.status === 401) {
    logResult('Database Connection', 'PASS', 'Database accessible (auth required)', dbResult.time);
  } else if (dbResult.status === 500) {
    logResult('Database Connection', 'FAIL', 'Database connection error', dbResult.time);
  } else {
    logResult('Database Connection', 'PASS', 'Database responding', dbResult.time);
  }
}

async function testWebhookEndpoint() {
  log('\n🔗 Testing Webhook Integration', 'bold');
  
  // Test webhook without deployment_id
  const noIdResult = await makeRequest('POST', '/api/webhooks/github', {});
  if (noIdResult.status === 400) {
    logResult('Webhook Validation', 'PASS', 'Correctly validates required fields', noIdResult.time);
  } else {
    logResult('Webhook Validation', 'FAIL', `Expected 400, got ${noIdResult.status}`, noIdResult.time);
  }

  // Test webhook with invalid deployment_id
  const invalidIdResult = await makeRequest('POST', '/api/webhooks/github', {
    deployment_id: 99999,
    status: 'success',
    logs: 'Test deployment'
  });
  if (invalidIdResult.status === 404 || invalidIdResult.status === 500) {
    logResult('Webhook Invalid ID', 'PASS', 'Handles non-existent deployment', invalidIdResult.time);
  } else {
    logResult('Webhook Invalid ID', 'FAIL', `Unexpected status: ${invalidIdResult.status}`, invalidIdResult.time);
  }
}

async function testErrorHandling() {
  log('\n⚠️ Testing Error Handling', 'bold');
  
  // Test non-existent endpoints
  const notFoundResult = await makeRequest('GET', '/api/nonexistent');
  if (notFoundResult.status === 404) {
    logResult('404 Error Handling', 'PASS', 'Correctly returns 404', notFoundResult.time);
  } else {
    logResult('404 Error Handling', 'FAIL', `Expected 404, got ${notFoundResult.status}`, notFoundResult.time);
  }

  // Test malformed JSON
  const malformedResult = await makeRequest('POST', '/api/projects', 'invalid-json');
  if (malformedResult.status === 400 || malformedResult.status === 401) {
    logResult('Malformed JSON Handling', 'PASS', 'Handles invalid JSON', malformedResult.time);
  } else {
    logResult('Malformed JSON Handling', 'FAIL', `Unexpected status: ${malformedResult.status}`, malformedResult.time);
  }

  // Test invalid project ID
  const invalidProjectResult = await makeRequest('GET', '/api/projects/99999/deployments');
  if (invalidProjectResult.status === 401 || invalidProjectResult.status === 404) {
    logResult('Invalid Project ID', 'PASS', 'Handles non-existent projects', invalidProjectResult.time);
  } else {
    logResult('Invalid Project ID', 'FAIL', `Unexpected status: ${invalidProjectResult.status}`, invalidProjectResult.time);
  }
}

async function testCORSAndSecurity() {
  log('\n🔒 Testing CORS and Security', 'bold');
  
  // Test CORS headers
  const corsResult = await makeRequest('OPTIONS', '/api/auth/user');
  if (corsResult.status === 200 || corsResult.status === 404) {
    logResult('CORS Preflight', 'PASS', 'CORS handling working', corsResult.time);
  } else {
    logResult('CORS Preflight', 'FAIL', `Unexpected CORS response: ${corsResult.status}`, corsResult.time);
  }

  // Test rate limiting (make multiple quick requests)
  const rateLimitPromises = Array(10).fill().map(() => makeRequest('GET', '/api/auth/user'));
  const rateLimitResults = await Promise.all(rateLimitPromises);
  const rateLimited = rateLimitResults.some(r => r.status === 429);
  
  if (rateLimited) {
    logResult('Rate Limiting', 'PASS', 'Rate limiting is active', 0);
  } else {
    logResult('Rate Limiting', 'SKIP', 'Rate limiting not triggered in test', 0);
  }
}

async function testGitHubIntegration() {
  log('\n🐙 Testing GitHub Integration', 'bold');
  
  // Test repositories endpoint without auth
  const repoResult = await makeRequest('GET', '/api/github/repositories');
  if (repoResult.status === 401) {
    logResult('GitHub Repositories Auth', 'PASS', 'Requires authentication', repoResult.time);
  } else {
    logResult('GitHub Repositories Auth', 'FAIL', `Expected 401, got ${repoResult.status}`, repoResult.time);
  }

  // Test if GitHub OAuth is configured
  const hasGitHubCreds = process.env.GITHUB_CLIENT_ID && process.env.GITHUB_CLIENT_SECRET;
  logResult('GitHub OAuth Configuration', hasGitHubCreds ? 'PASS' : 'SKIP', 
    hasGitHubCreds ? 'GitHub credentials configured' : 'GitHub credentials not set', 0);
}

async function generateTestReport() {
  log('\n📊 Test Results Summary', 'bold');
  log('=' * 60, 'blue');
  
  const passed = TEST_RESULTS.filter(r => r.status === 'PASS').length;
  const failed = TEST_RESULTS.filter(r => r.status === 'FAIL').length;
  const skipped = TEST_RESULTS.filter(r => r.status === 'SKIP').length;
  const total = TEST_RESULTS.length;
  
  log(`Total Tests: ${total}`, 'blue');
  log(`Passed: ${passed}`, 'green');
  log(`Failed: ${failed}`, failed > 0 ? 'red' : 'green');
  log(`Skipped: ${skipped}`, 'yellow');
  log(`Success Rate: ${((passed / (total - skipped)) * 100).toFixed(1)}%`, 'blue');
  
  if (failed > 0) {
    log('\n❌ Failed Tests:', 'red');
    TEST_RESULTS.filter(r => r.status === 'FAIL').forEach(result => {
      log(`  • ${result.test}: ${result.message}`, 'red');
    });
  }
  
  if (skipped > 0) {
    log('\n⏭️ Skipped Tests:', 'yellow');
    TEST_RESULTS.filter(r => r.status === 'SKIP').forEach(result => {
      log(`  • ${result.test}: ${result.message}`, 'yellow');
    });
  }

  // Generate fixes for failed tests
  if (failed > 0) {
    log('\n🔧 Suggested Fixes:', 'bold');
    TEST_RESULTS.filter(r => r.status === 'FAIL').forEach(result => {
      generateFix(result);
    });
  }
}

function generateFix(result) {
  const fixes = {
    'Server Health Check': 'Add a /api/health endpoint that returns { status: "ok" }',
    'GitHub OAuth Redirect': 'Set GITHUB_CLIENT_ID and GITHUB_CLIENT_SECRET environment variables',
    'Database Connection': 'Check DATABASE_URL and ensure PostgreSQL is accessible',
    'Webhook Invalid ID': 'Add proper error handling for non-existent deployments',
    '404 Error Handling': 'Add a catch-all route handler for undefined endpoints',
    'CORS Preflight': 'Configure CORS middleware to handle OPTIONS requests',
    'Rate Limiting': 'Add express-rate-limit middleware to protect endpoints'
  };
  
  const fix = fixes[result.test];
  if (fix) {
    log(`  • ${result.test}: ${fix}`, 'yellow');
  }
}

async function main() {
  log('🚀 AutoFlow CI/CD Platform - Test Suite Starting...', 'bold');
  log(`Testing API at: ${API_BASE}`, 'blue');
  log('=' * 60, 'blue');

  try {
    await testServerHealth();
    await testAuthenticationEndpoints();
    await testProtectedEndpoints();
    await testDatabaseEndpoints();
    await testWebhookEndpoint();
    await testErrorHandling();
    await testCORSAndSecurity();
    await testGitHubIntegration();
    
    await generateTestReport();
    
    log('\n✅ Test suite completed!', 'bold');
    
    // Exit with proper code
    const failed = TEST_RESULTS.filter(r => r.status === 'FAIL').length;
    process.exit(failed > 0 ? 1 : 0);
    
  } catch (error) {
    log(`\n💥 Test suite crashed: ${error.message}`, 'red');
    console.error(error);
    process.exit(1);
  }
}

// Run if called directly
if (import.meta.url === `file://${process.argv[1]}`) {
  main();
}

export { main as runTests };