/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

import { Entity } from '@backstage/catalog-model';

/** @public */
export const CONSUL_NAMESPACE_ANNOTATION = 'consul.io/namespace';

/** @public */
export const CONSUL_PARTITION_ANNOTATION = 'consul.io/partition';

/** @public */
export const CONSUL_NAME_ANNOTATION = 'consul.io/name';

/** @public */
export const CONSUL_CLUSTER_RESOUCR_NAME_ANNOTATION =
  'consul.io/cluster_resource_name';

/** @public */
export const isHcpConsulServiceAvailable = (entity: Entity) =>
  Boolean(entity.metadata.annotations?.[CONSUL_NAME_ANNOTATION]) &&
  Boolean(
    entity.metadata.annotations?.[CONSUL_CLUSTER_RESOUCR_NAME_ANNOTATION],
  );
