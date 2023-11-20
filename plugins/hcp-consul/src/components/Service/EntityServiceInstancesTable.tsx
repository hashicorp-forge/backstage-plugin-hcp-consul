/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import { MissingAnnotationEmptyState } from '@backstage/core-components';
import { useEntity } from '@backstage/plugin-catalog-react';
import React from 'react';
import {
  CONSUL_CLUSTER_RESOUCR_NAME_ANNOTATION,
  CONSUL_NAMESPACE_ANNOTATION,
  CONSUL_PARTITION_ANNOTATION,
  CONSUL_NAME_ANNOTATION,
  isHcpConsulServiceAvailable,
} from '../../annotations';

import { Service } from '../../api/api';
import { ServiceInstancesComponent } from './ServiceInstancesComponent';

const ServiceInstancesTable = () => {
  // Wait on entity
  const { entity } = useEntity();

  // Get plugin attributes
  const service_name = entity.metadata.annotations?.[CONSUL_NAME_ANNOTATION];
  const clusterResourceName =
    entity.metadata.annotations?.[CONSUL_CLUSTER_RESOUCR_NAME_ANNOTATION];
  const partition =
    entity.metadata.annotations?.[CONSUL_PARTITION_ANNOTATION] ?? '';
  const namespace =
    entity.metadata.annotations?.[CONSUL_NAMESPACE_ANNOTATION] ?? '';

  const service = {
    name: service_name,
    cluster_resource_name: clusterResourceName,
    namespace: namespace,
    partition: partition,
  } as Service;

  return <ServiceInstancesComponent service={service} />;
};

export const EntityServiceInstancesTable = () => {
  // Wait on entity
  const { entity } = useEntity();

  // Check that attributes are available
  if (!isHcpConsulServiceAvailable(entity)) {
    return (
      <MissingAnnotationEmptyState
        annotation={[
          CONSUL_CLUSTER_RESOUCR_NAME_ANNOTATION,
          CONSUL_NAMESPACE_ANNOTATION,
          CONSUL_PARTITION_ANNOTATION,
          CONSUL_NAME_ANNOTATION,
        ]}
      />
    );
  }

  return <ServiceInstancesTable />;
};
