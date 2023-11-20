/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

export interface Config {
  /**
   * Configuration options for the hcp consul plugin
   */
  consul: {
    /**
     * The organizationID of the project
     * @visibility frontend
     */
    organizationID: string;

    /**
     * The default projectID to be used
     * @visibility frontend
     */
    projectID: string;
  };
}
