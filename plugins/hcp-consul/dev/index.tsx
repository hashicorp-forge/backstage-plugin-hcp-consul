/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import React from 'react';
import { createDevApp } from '@backstage/dev-utils';
import { hcpConsulPlugin, HcpConsulPluginPage } from '../src/plugin';

createDevApp()
  .registerPlugin(hcpConsulPlugin)
  .addPage({
    element: <HcpConsulPluginPage />,
    title: 'HCP consul',
    path: '/hcp-consul',
  })
  .render();
