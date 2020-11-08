#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { Vpc1Stack } from '../lib/vpc-1-stack';

const app = new cdk.App();
new Vpc1Stack(app, 'Vpc1Stack');
