## API Report File for "@hashicorp/plugin-hcp-consul-backend"

> Do not edit this file. It is a report generated by [API Extractor](https://api-extractor.com/).

```ts
import { Config } from '@backstage/config';
import express from 'express';
import { Logger } from 'winston';

// Warning: (ae-missing-release-tag) "createRouter" is part of the package's API, but it is missing a release tag (@alpha, @beta, @public, or @internal)
//
// @public (undocumented)
export function createRouter(options: RouterOptions): Promise<express.Router>;

// Warning: (ae-missing-release-tag) "RouterOptions" is part of the package's API, but it is missing a release tag (@alpha, @beta, @public, or @internal)
//
// @public (undocumented)
export interface RouterOptions {
  // (undocumented)
  config: Config;
  // (undocumented)
  logger: Logger;
}

// (No @packageDocumentation comment for this package)
```
