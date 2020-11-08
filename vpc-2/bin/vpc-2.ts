#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { Vpc2Stack } from '../lib/vpc-2-stack';

const app = new cdk.App();
new Vpc2Stack(app, 'Vpc2Stack');
