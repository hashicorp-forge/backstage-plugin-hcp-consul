/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import React, { useState } from 'react';
import { Grid } from '@material-ui/core';
import {
  Table,
  TableColumn,
  Progress,
  ResponseErrorPanel,
} from '@backstage/core-components';
import useAsync from 'react-use/lib/useAsync';
import { Service, hcpConsulApiRef } from '../../api/api';
import { useApi } from '@backstage/core-plugin-api';
import Button from '@material-ui/core/Button';

import { ServiceInstancesComponent } from './ServiceInstancesComponent';
import { ServiceDetailsCard, listAndSetServices } from '.';
import { SERVICES_PER_PAGE } from '../../constants';

const serviceColumns: TableColumn<Service>[] = [
  {
    title: 'cluster',
    render: (row: Service) => row.cluster_id,
  },
  {
    title: 'name',
    highlight: true,
    render: (row: Service) => row.name,
  },
  {
    title: 'partition',
    render: (row: Service) => row.partition,
  },
  {
    title: 'namespace',
    render: (row: Service) => row.namespace,
  },
  {
    title: 'total instances',
    render: (row: Service) => row.instance_count,
  },
  {
    title: 'checks failing',
    render: (row: Service) => row.checks_critical,
  },
  {
    title: 'checks warning',
    render: (row: Service) => row.checks_warning,
  },
];

type ServiceUnhealthyTableProps = {
  projectID: string;
};

export const ServiceUnhealthyTable = ({
  projectID,
}: ServiceUnhealthyTableProps) => {
  const hcpConsulApi = useApi(hcpConsulApiRef);

  const projectResourceName = `project/${projectID}`;
  const unheathyStatus = ['warning', 'critical'];

  const [services, setServices] = useState<Service[]>([]);
  const [prevToken, setPrevToken] = useState('');
  const [nextToken, setNextToken] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error>();

  useAsync(async () => {
    await listAndSetServices(
      hcpConsulApi,
      projectResourceName,
      SERVICES_PER_PAGE,
      '',
      '',
      unheathyStatus,
      setServices,
      setPrevToken,
      setNextToken,
      setLoading,
      setError,
    );
  }, []);

  if (loading) {
    return <Progress />;
  } else if (error) {
    return <ResponseErrorPanel error={error} />;
  }

  const handleNextClick = async () => {
    listAndSetServices(
      hcpConsulApi,
      projectResourceName,
      SERVICES_PER_PAGE,
      '',
      nextToken,
      unheathyStatus,
      setServices,
      setPrevToken,
      setNextToken,
      setLoading,
      setError,
    );
  };
  const handlePrevClick = async () => {
    listAndSetServices(
      hcpConsulApi,
      projectResourceName,
      SERVICES_PER_PAGE,
      prevToken,
      '',
      unheathyStatus,
      setServices,
      setPrevToken,
      setNextToken,
      setLoading,
      setError,
    );
  };

  return (
    <div>
      <Table
        title="Unhealthy services"
        data={services || []}
        columns={serviceColumns}
        options={{ search: false, paging: false }}
        detailPanel={rowData => {
          return (
            <div>
              <Grid container spacing={2} justifyContent="center">
                <Grid item xs={4}>
                  <ServiceDetailsCard service={rowData.rowData} />
                </Grid>
                <Grid item xs={8}>
                  <ServiceInstancesComponent service={rowData.rowData} />
                </Grid>
              </Grid>
            </div>
          );
        }}
      />
      <Grid container spacing={0} justifyContent="flex-end">
        <Grid item xs={1}>
          <Button
            variant="contained"
            color="primary"
            disabled={prevToken === ''}
            onClick={handlePrevClick}
          >
            Prev
          </Button>
        </Grid>
        <Grid item xs={1}>
          <Button
            variant="contained"
            color="primary"
            disabled={nextToken === ''}
            onClick={handleNextClick}
          >
            Next
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};
