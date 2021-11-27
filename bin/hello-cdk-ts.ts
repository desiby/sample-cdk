#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { HelloCdkTsStack } from '../lib/hello-cdk-ts-stack';


const app = new cdk.App();

const env = process.env.ENVIRONMENT

const deployEnv = {
  account: process.env.CDK_DEPLOY_ACCOUNT || process.env.CDK_DEFAULT_ACCOUNT,
  region: process.env.CDK_DEPLOY_REGION || process.env.CDK_DEFAULT_REGION
};

new HelloCdkTsStack(app, `HelloCdkTsStack-${env}`, {env: deployEnv});