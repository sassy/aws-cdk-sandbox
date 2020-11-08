import * as cdk from '@aws-cdk/core';
import { Vpc } from "@aws-cdk/aws-ec2";

export class Vpc1Stack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);
    const vpc = new Vpc(this, "hello-cdk", {
      cidr: "10.0.0.0/16",
      enableDnsHostnames: true,
      enableDnsSupport: true,
      subnetConfiguration: []
    });    
  }
}
