/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import React from 'react';
import { Typography, Grid } from '@material-ui/core';
import {
  InfoCard,
  Header,
  Page,
  Content,
  ContentHeader,
} from '@backstage/core-components';
import { ServiceUnhealthyTable, ServicesOverview } from '../Service';
import { ClusterTable, ClusterOverviewCard } from '../Cluster';
import { ServiceListTableComponent } from '../Service';
import { TabbedLayout } from '@backstage/core-components';
import { useApi, configApiRef } from '@backstage/core-plugin-api';

type HcpConsulOverviewProps = {
  projectID?: string;
};

export const HcpConsulOverview = ({ projectID }: HcpConsulOverviewProps) => {
  const config = useApi(configApiRef);
  const defaultProjectID = config.getString('consul.projectID');

  const finalProjectID = projectID || defaultProjectID;

  return (
    <Page themeId="service">
      <Header title="HCP consul" subtitle="" />
      <Content>
        <ContentHeader title="">Project ID: {finalProjectID}</ContentHeader>
        <TabbedLayout>
          <TabbedLayout.Route path="/" title="Overview">
            <Grid container spacing={3} alignItems="stretch">
              <Grid item md={12}>
                <ServiceUnhealthyTable projectID={finalProjectID} />
              </Grid>
              <Grid item md={6} xs={12}>
                <InfoCard title="Clusters Overview">
                  <Typography variant="body1">
                    <ClusterOverviewCard projectID={finalProjectID} />
                  </Typography>
                </InfoCard>
              </Grid>
              <Grid item md={6} xs={12}>
                <InfoCard title="Services Overview">
                  <Typography variant="body1">
                    <ServicesOverview projectID={finalProjectID} />
                  </Typography>
                </InfoCard>
              </Grid>
            </Grid>
          </TabbedLayout.Route>

          <TabbedLayout.Route path="/clusters" title="Clusters">
            <ClusterTable projectID={finalProjectID} />
          </TabbedLayout.Route>

          <TabbedLayout.Route path="/services" title="Services">
            <Grid container spacing={3} direction="column">
              <Grid item>
                <ServiceListTableComponent projectID={finalProjectID} />
              </Grid>
            </Grid>
          </TabbedLayout.Route>
        </TabbedLayout>
      </Content>
    </Page>
  );
};
