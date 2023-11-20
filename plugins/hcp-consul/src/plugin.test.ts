/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { hcpConsulPlugin } from './plugin';

describe('hcp-consul', () => {
  it('should export plugin', () => {
    expect(hcpConsulPlugin).toBeDefined();
  });
});
