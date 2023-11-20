/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import React from 'react';
import { Grid } from '@material-ui/core';

import Button from '@material-ui/core/Button';

type PaginationButtonProps = {
  prevToken: string;
  nextToken: string;
  onPrevClick: React.MouseEventHandler<HTMLButtonElement>;
  onNextClick: React.MouseEventHandler<HTMLButtonElement>;
};

export const PaginationButtonComponent = ({
  prevToken,
  nextToken,
  onPrevClick,
  onNextClick,
}: PaginationButtonProps) => {
  return (
    <Grid container spacing={0} justifyContent="flex-end">
      <Grid item xs={1}>
        <Button
          variant="contained"
          color="primary"
          disabled={prevToken === ''}
          onClick={onPrevClick}
        >
          Prev
        </Button>
      </Grid>
      <Grid item xs={1}>
        <Button
          variant="contained"
          color="primary"
          disabled={nextToken === ''}
          onClick={onNextClick}
        >
          Next
        </Button>
      </Grid>
    </Grid>
  );
};
