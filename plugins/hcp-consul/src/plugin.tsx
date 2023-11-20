/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import {
  discoveryApiRef,
  fetchApiRef,
  createApiFactory,
  createPlugin,
  createRoutableExtension,
  createComponentExtension,
} from '@backstage/core-plugin-api';
import React from 'react';
import { rootRouteRef } from './routes';
import { HcpConsulHttpApi, hcpConsulApiRef } from './api/api';

export const hcpConsulPlugin = createPlugin({
  id: 'hcp-consul',
  routes: {
    root: rootRouteRef,
  },
  apis: [
    createApiFactory({
      api: hcpConsulApiRef,
      deps: { discoveryApi: discoveryApiRef, fetchApi: fetchApiRef },
      factory: ({ discoveryApi, fetchApi }) =>
        HcpConsulHttpApi.create(discoveryApi, fetchApi),
    }),
  ],
});

type HcpConsulPluginPageProps = {
  projectID?: string;
};

export const HcpConsulPluginPage: (
  props: HcpConsulPluginPageProps,
) => React.JSX.Element = hcpConsulPlugin.provide(
  createRoutableExtension({
    name: 'HcpConsulPluginPage',
    component: () =>
      import('./components/HcpConsul').then(({ HcpConsulOverview }) => {
        return props => {
          return <HcpConsulOverview projectID={props.projectID} />;
        };
      }),
    mountPoint: rootRouteRef,
  }),
);

export const EntityServiceInstancesTable = hcpConsulPlugin.provide(
  createComponentExtension({
    name: 'EntityServiceInstancesTable',
    component: {
      lazy: () =>
        import('./components/Service').then(m => m.EntityServiceInstancesTable),
    },
  }),
);
